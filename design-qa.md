# Mobile hero design QA

## Comparison target

- Source visual: `/var/folders/bg/546z30l93z5f_prwnwmk28c40000gn/T/TemporaryItems/NSIRD_screencaptureui_dnO2Ft/Screenshot 2026-10-16 at 14.16.45.png` (574 × 1230 px; the page content is about 550 px wide).
- Later user direction: restore the announcement band and navbar, leave space below the navbar, and keep the logo clear of the model's head.
- Implementation: browser capture from `http://localhost:3000/` using the in-app browser at a 550 × 1232 CSS viewport. The capture was returned inline and was not saved as a separate local image file.
- State: home page, mobile viewport, announcement band and navbar visible, menu closed.
- Density: browser capture used a 550 × 1232 CSS viewport; source screenshot pixel density is not recorded, so comparison was normalized by the visible 550 px page width.

## Visual review

- Full view: the campaign portrait sits above a warm cream copy panel. The announcement band and navbar remain visible. The shorter navbar and small bottom gap bring the portrait closer while leaving the logo above the model's head.
- Focused regions: the top header/photo boundary and the lower headline, description, and CTA were checked at the same 550 px viewport. The headline stays on the intended two lines, the CTA spans the copy width, and the copy remains readable.
- Typography: Bodoni Moda carries the large headline; DM Sans carries the eyebrow, supporting copy, and button. The mobile headline scales with viewport width and does not clip at the checked size.
- Spacing and layout: the image height follows the mobile width; the cream copy area uses consistent 6vw side padding. The navbar is 5rem tall with a small 0.5rem gap below it.
- Color: cream, oxblood, and warm sand follow the site's existing palette.
- Image: reused the existing IMZA campaign portrait and adjusted its mobile crop to keep the model's face clear of the logo.
- Copy: existing IMZA headline, supporting copy, and CTA are preserved.
- Interactions: mobile menu opens and closes; the primary CTA navigates to `#signature-suit`.

## Comparison history

- First mobile render had too much blank space between the navbar and portrait. The user flagged this in the 14:32 screenshot.
- Reduced the navbar row from 7rem to 5rem and its bottom margin from 1.25rem to 0.5rem. The revised 550 × 1232 capture shows the portrait starting shortly after the navbar while keeping clear space between the logo and the model's head.

## Findings

- No actionable P0, P1, or P2 visual issues remain.

## Implementation checklist

- [x] Show the announcement band on mobile.
- [x] Keep the mobile navbar visible above the portrait.
- [x] Leave a small gap under the navbar.
- [x] Keep the logo clear of the model's head.
- [x] Use the cream editorial copy area and full-width CTA.
- [x] Check mobile menu and primary CTA behavior.

final result: passed

---

# Products page design QA

## Comparison target

- Source visual: user-provided products page screenshot in this conversation (the IMZA six-color collection page).
- Implementation: `/products` at `http://localhost:3000/products`.
- Desktop review: 1280 × 960 CSS viewport. Mobile review: 390 × 844 CSS viewport.
- State: all six colors visible, no filters selected, featured sort selected, cart and favorites empty.

## Visual review

- The centered editorial title, breadcrumb, warm cream background, oxblood typography, swatch controls, and six product images follow the reference.
- Desktop uses four columns for the first four colors and two wider cards for the final colors. Mobile uses two columns and wraps the filter controls so all color choices remain visible.
- The custom sort menu matches the cream, oxblood, and muted-gold palette. Product cards include quick add-to-cart and favorite controls, plus a labeled add-to-cart button below each card.
- No horizontal page overflow appeared at the 390 px mobile viewport.

## Interaction review

- Multi-select color filters displayed Bordeaux and Sauge together and updated the visible count; “Effacer les filtres” restored all six.
- Custom sort menu opened, changed to alphabetical order, and returned to featured order.
- Add-to-cart updated the header count, showed an accessible confirmation, and populated the cart drawer with a quantity control.
- Favorite control updated the header count and populated the favorites drawer. Removing items restored the empty state.
- Browser preview state was reset after the interaction review.

## Implementation checklist

- [x] Match the supplied collection page layout and visual palette.
- [x] Support multiple active color filters and clear filters.
- [x] Use a branded custom sort menu.
- [x] Add cart controls and a shared cart drawer.
- [x] Add favorites controls and a shared favorites drawer.
- [x] Review desktop and mobile layouts at explicit viewport sizes.
- [x] Check that the mobile document has no horizontal overflow.

final result: passed
