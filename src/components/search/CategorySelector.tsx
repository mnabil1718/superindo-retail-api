import { Category } from "@/lib/data";
import { getCategories, getCategory } from "@/lib/fetches";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const CategorySelector = async ({ categoryId }: { categoryId?: string }) => {
  const currentCategory = categoryId
    ? await getCategory(categoryId)
    : undefined;
  const categories = await getCategories();
  return (
    <div className="flex flex-wrap w-full items-center gap-2">
      <Link
        href="/search"
        className={clsx(
          "rounded-full px-3 py-2 text-sm border transition-all duration-200 bg-blue-50 hover:border-blue-600",
          {
            "bg-blue-600 text-white": !currentCategory,
            "bg-blue-50 hover:border-blue-600": currentCategory,
          }
        )}
      >
        Semua
      </Link>
      {categories.map((category, index) => {
        return (
          <Link
            key={index}
            href={`/search/${category.id}`}
            className={clsx(
              "rounded-full px-3 py-2 text-sm border transition-all duration-200 bg-blue-50 hover:border-blue-600",
              {
                "bg-blue-600 text-white": category.id === currentCategory?.id,
                "bg-blue-50 hover:border-blue-600":
                  category.id !== currentCategory?.id,
              }
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategorySelector;
