import { Variant } from "@/lib/data";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const VariantSelector = ({
  activeVariant,
  setActiveVariant,
  variants,
}: {
  activeVariant: Variant;
  setActiveVariant: React.Dispatch<React.SetStateAction<Variant>>;
  variants: Variant[];
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {variants.map((variant: Variant, index: number) => {
        return (
          <button
            onClick={() => setActiveVariant(variant)}
            key={index}
            className={clsx(
              "rounded-full px-3 py-2 text-sm border transition-all duration-200",
              {
                "bg-blue-600 text-white": variant.id === activeVariant.id,
                "bg-blue-50 hover:border-blue-600":
                  variant.id !== activeVariant.id,
              }
            )}
          >
            {variant.name}
          </button>
        );
      })}
    </div>
  );
};

export default VariantSelector;
