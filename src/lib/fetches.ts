import { Category, Product, Variant } from "./data";

// Not combined with getProducts because of no caching
export async function searchProducts(q: string): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/products?q=${q}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCategory(id: string): Promise<Category | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/categories/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data.category;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/categories`,
      {
        method: "GET",
        next: {
          revalidate: 5,
        },
      }
    );
    const data = await response.json();
    return data.categories;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProductVariants(
  product_id: number | undefined
): Promise<Variant[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/variants/${product_id}`,
      {
        method: "GET",
        next: {
          revalidate: 5,
        },
      }
    );
    const data = await response.json();

    return data.variants;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/products/${slug}`,
      {
        method: "GET",
        next: {
          revalidate: 5,
        },
      }
    );
    const data = await response.json();

    return data.product;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getProductsByCategory(
  categoryId: string
): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/products/categories/${categoryId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await response.json();
    const products = await data.products;
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTNAME_URL}/api/products`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const products = await data.products;
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSomething() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/vercel/next.js`,
      {
        method: "GET",
        next: {
          revalidate: 5,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
