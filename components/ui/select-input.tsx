"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
};

export function SelectInput({
  label,
  value,
  options,
  onValueChange,
}: SelectInputProps) {
  return (
    <SelectPrimitive.Root
      onValueChange={(nextValue) => {
        if (typeof nextValue === "string") onValueChange(nextValue);
      }}
      value={value}
    >
      <SelectPrimitive.Trigger
        aria-label={label}
        className="inline-flex min-h-10 min-w-[172px] items-center justify-between gap-4 border border-[#bda984] bg-[#f6efe6] px-3 text-left text-[0.75rem] font-normal normal-case tracking-normal text-[#38141c] outline-none transition-colors hover:border-[#55101f] focus-visible:ring-2 focus-visible:ring-[#9c7650] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6efe6]"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDown aria-hidden="true" className="size-4 text-[#55101f]" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner sideOffset={6}>
          <SelectPrimitive.Popup className="z-[100] min-w-[var(--anchor-width)] overflow-hidden border border-[#bda984] bg-[#f6efe6] text-[#38141c] shadow-[0_14px_36px_rgba(56,20,28,0.18)]">
            <SelectPrimitive.List className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  className="relative flex min-h-10 cursor-default select-none items-center gap-2 px-3 pr-9 text-sm outline-none transition-colors data-[highlighted]:bg-[#55101f] data-[highlighted]:text-[#f6efe6] data-[selected]:font-medium"
                  key={option.value}
                  value={option.value}
                >
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute right-3 inline-flex items-center justify-center">
                    <Check aria-hidden="true" className="size-4" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
