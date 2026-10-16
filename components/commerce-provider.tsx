"use client";

import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Heart, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { suitColors } from "@/data/homepage";

type SuitColor = (typeof suitColors)[number];
type CartEntry = { product: SuitColor; size?: string; quantity: number };
type Panel = "cart" | "favorites" | null;

type CommerceContextValue = {
  cart: CartEntry[];
  favorites: string[];
  panel: Panel;
  addToCart: (product: SuitColor, size?: string) => void;
  toggleFavorite: (product: SuitColor) => void;
  removeFromCart: (productName: string, size?: string) => void;
  removeFavorite: (productName: string) => void;
  changeQuantity: (productName: string, change: number, size?: string) => void;
  openPanel: (panel: Panel) => void;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

export function useCommerce() {
  const value = useContext(CommerceContext);
  if (!value) {
    throw new Error("useCommerce must be used inside CommerceProvider");
  }
  return value;
}

export function CommerceProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [panel, setPanel] = useState<Panel>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("imza-cart") ?? "[]");
      const savedFavorites = JSON.parse(localStorage.getItem("imza-favorites") ?? "[]");
      const validCart = Array.isArray(savedCart)
        ? savedCart.flatMap((entry): CartEntry[] => {
            const product = suitColors.find(
              (color) => color.name === entry?.product?.name,
            );
            const quantity = Number(entry?.quantity);
            return product && Number.isInteger(quantity) && quantity > 0
              ? [{ product, quantity }]
              : [];
          })
        : [];
      const validFavorites = Array.isArray(savedFavorites)
        ? savedFavorites.filter(
            (name): name is string =>
              typeof name === "string" &&
              suitColors.some((product) => product.name === name),
          )
        : [];

      setCart(validCart);
      setFavorites(validFavorites);
    } catch {
      localStorage.removeItem("imza-cart");
      localStorage.removeItem("imza-favorites");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("imza-cart", JSON.stringify(cart));
    localStorage.setItem("imza-favorites", JSON.stringify(favorites));
  }, [cart, favorites, hydrated]);

  const value = useMemo<CommerceContextValue>(
    () => ({
      cart,
      favorites,
      panel,
      addToCart(product, size) {
        setCart((current) => {
          const existing = current.find(
            (entry) => entry.product.name === product.name && entry.size === size,
          );
          return existing
            ? current.map((entry) =>
                entry.product.name === product.name && entry.size === size
                  ? { ...entry, quantity: entry.quantity + 1 }
                  : entry,
              )
            : [...current, { product, size, quantity: 1 }];
        });
      },
      toggleFavorite(product) {
        setFavorites((current) =>
          current.includes(product.name)
            ? current.filter((name) => name !== product.name)
            : [...current, product.name],
        );
      },
      removeFromCart(productName, size) {
        setCart((current) =>
          current.filter(
            (entry) => entry.product.name !== productName || entry.size !== size,
          ),
        );
      },
      removeFavorite(productName) {
        setFavorites((current) => current.filter((name) => name !== productName));
      },
      changeQuantity(productName, change, size) {
        setCart((current) =>
          current.flatMap((entry) => {
            if (entry.product.name !== productName || entry.size !== size) {
              return [entry];
            }
            const quantity = entry.quantity + change;
            return quantity > 0 ? [{ ...entry, quantity }] : [];
          }),
        );
      },
      openPanel: setPanel,
    }),
    [cart, favorites, panel],
  );

  return (
    <CommerceContext.Provider value={value}>
      {children}
      <CommercePanel />
    </CommerceContext.Provider>
  );
}

function CommercePanel() {
  const {
    addToCart,
    cart,
    favorites,
    panel,
    changeQuantity,
    openPanel,
    removeFavorite,
    removeFromCart,
  } = useCommerce();
  const cartCount = cart.reduce((total, entry) => total + entry.quantity, 0);
  const favoriteProducts = suitColors.filter((product) =>
    favorites.includes(product.name),
  );

  if (!panel) return null;

  const isCart = panel === "cart";

  return (
    <div className="fixed inset-0 z-[100] flex justify-end" role="presentation">
      <button
        aria-label="Fermer le panneau"
        className="absolute inset-0 bg-[#1b0d10]/45"
        onClick={() => openPanel(null)}
        type="button"
      />
      <aside
        aria-labelledby="commerce-panel-title"
        aria-modal="true"
        className="relative flex h-full w-full max-w-[440px] flex-col bg-[#f6efe6] text-[#38141c] shadow-[-16px_0_48px_rgb(26_13_15/18%)]"
        role="dialog"
      >
        <header className="flex items-center justify-between border-b border-[#d6c7b7] px-6 py-5 sm:px-8">
          <div>
            <p className="m-0 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#9c7650]">
              La Maison IMZA
            </p>
            <h2
              className="mb-0 mt-1 font-serif text-3xl font-normal"
              id="commerce-panel-title"
            >
              {isCart ? "Votre panier" : "Vos favoris"}
            </h2>
          </div>
          <button
            aria-label="Fermer"
            className="store-button flex size-10 items-center justify-center rounded-full text-[#55101f] hover:bg-[#efe5da]"
            onClick={() => openPanel(null)}
            type="button"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        {isCart ? (
          cart.length ? (
            <>
              <ul className="m-0 flex-1 divide-y divide-[#d6c7b7] overflow-y-auto px-6 sm:px-8">
                {cart.map(({ product, quantity, size }) => (
                  <li className="flex gap-4 py-5" key={`${product.name}-${size ?? "unsized"}`}>
                    <Image
                      alt={`Tailleur IMZA ${product.name.toLowerCase()}`}
                      className="h-28 w-[76px] object-cover object-top"
                      height={224}
                      src={product.image}
                      width={152}
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div>
                        <p className="m-0 font-serif text-lg">Le tailleur signature</p>
                        <p className="mb-0 mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#735c57]">
                          {product.name}{size ? ` · Taille ${size}` : ""}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 items-center border border-[#d6c7b7]">
                          <button
                            aria-label={`Retirer une unité de ${product.name}`}
                            className="flex size-8 items-center justify-center hover:bg-[#efe5da]"
                            onClick={() => changeQuantity(product.name, -1, size)}
                            type="button"
                          >
                            <Minus aria-hidden="true" className="size-3.5" />
                          </button>
                          <span className="min-w-7 text-center text-xs">{quantity}</span>
                          <button
                            aria-label={`Ajouter une unité de ${product.name}`}
                            className="flex size-8 items-center justify-center hover:bg-[#efe5da]"
                            onClick={() => changeQuantity(product.name, 1, size)}
                            type="button"
                          >
                            <Plus aria-hidden="true" className="size-3.5" />
                          </button>
                        </div>
                        <button
                          aria-label={`Retirer ${product.name} du panier`}
                          className="flex size-9 items-center justify-center text-[#735c57] hover:text-[#55101f]"
                          onClick={() => removeFromCart(product.name, size)}
                          type="button"
                        >
                          <Trash2 aria-hidden="true" className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#d6c7b7] px-6 py-5 sm:px-8">
                <p className="mb-4 mt-0 text-sm text-[#735c57]">
                  {cartCount} {cartCount > 1 ? "articles" : "article"} dans votre panier
                </p>
                <Link
                  className="store-button inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#55101f] px-6 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f6efe6] no-underline hover:bg-[#43101c]"
                  href="/#contact"
                  onClick={() => openPanel(null)}
                >
                  Demander conseil
                  <ShoppingBag aria-hidden="true" className="size-4" />
                </Link>
                <p className="mb-0 mt-3 text-center text-[0.68rem] text-[#735c57]">
                  Contactez-nous pour finaliser votre commande.
                </p>
              </div>
            </>
          ) : (
            <EmptyPanel
              icon={<ShoppingBag aria-hidden="true" className="size-6" />}
              message="Votre panier attend ses premières pièces."
              onClose={() => openPanel(null)}
              title="Votre panier est vide"
            />
          )
        ) : favoriteProducts.length ? (
          <ul className="m-0 flex-1 divide-y divide-[#d6c7b7] overflow-y-auto px-6 sm:px-8">
            {favoriteProducts.map((product) => (
              <li className="flex gap-4 py-5" key={product.name}>
                <Image
                  alt={`Tailleur IMZA ${product.name.toLowerCase()}`}
                  className="h-28 w-[76px] object-cover object-top"
                  height={224}
                  src={product.image}
                  width={152}
                />
                <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                  <div>
                    <p className="m-0 font-serif text-lg">Le tailleur signature</p>
                    <p className="mb-0 mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#735c57]">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#55101f] underline underline-offset-4"
                      onClick={() => removeFavorite(product.name)}
                      type="button"
                    >
                      Retirer des favoris
                    </button>
                    <button
                      aria-label={`Ajouter ${product.name} au panier`}
                      className="store-button flex size-9 items-center justify-center bg-[#55101f] text-[#f6efe6] hover:bg-[#43101c]"
                      onClick={() => {
                        addToCart(product);
                        openPanel("cart");
                      }}
                      type="button"
                    >
                      <ShoppingBag aria-hidden="true" className="size-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyPanel
            icon={<Heart aria-hidden="true" className="size-6" />}
            message="Gardez vos coloris préférés à portée de main."
            onClose={() => openPanel(null)}
            title="Aucun favori pour le moment"
          />
        )}
      </aside>
    </div>
  );
}

function EmptyPanel({
  icon,
  message,
  onClose,
  title,
}: {
  icon: ReactNode;
  message: string;
  onClose: () => void;
  title: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full border border-[#d6c7b7] text-[#9c7650]">
        {icon}
      </span>
      <h3 className="mb-0 mt-5 font-serif text-2xl font-normal">{title}</h3>
      <p className="mb-0 mt-2 max-w-[18rem] text-sm leading-6 text-[#735c57]">{message}</p>
      <button
        className="store-button mt-7 inline-flex min-h-11 items-center justify-center bg-[#55101f] px-6 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f6efe6] hover:bg-[#43101c]"
        onClick={onClose}
        type="button"
      >
        Continuer mes achats
      </button>
    </div>
  );
}
