export interface Product {
  id: number;
  plu: string;
  name: string;
  slug: string;
  category_id: number;
  is_active: boolean;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Variant {
  id: number;
  code: string;
  product_id: number;
  name: string;
  stock: number;
  price: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: number;
  product: Product;
  variant: Variant;
  qty: number;
  total: number; // total price
  created_at: string;
  updated_at: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Makanan",
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 2,
    name: "Minuman",
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 3,
    name: "Obat",
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
];

export const products: Product[] = [
  {
    id: 1,
    plu: "PDCT001",
    name: "Susu Formula",
    slug: "susu-formula",
    category_id: 2,
    is_active: true,
    image: "/products/susu.jpg",
    description:
      "Susu description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 2,
    plu: "PDCT002",
    name: "Kornet Daging",
    slug: "kornet-daging",
    category_id: 1,
    is_active: true,
    image: "/products/kornet.jpg",
    description:
      "Kornet daging description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 3,
    plu: "PDCT003",
    name: "Obat Lambung",
    slug: "obat-lambung",
    category_id: 3,
    is_active: true,
    image: "/products/obat.jpg",
    description:
      "Obat lambung description: When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
];

export const variants: Variant[] = [
  {
    id: 1,
    code: "PDCT001001",
    product_id: 1,
    name: "Cokelat",
    stock: 10,
    price: 13000,
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 2,
    code: "PDCT001002",
    product_id: 1,
    name: "Vanilla",
    stock: 5,
    price: 14000,
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 3,
    code: "PDCT002001",
    product_id: 2,
    name: "Sapi",
    stock: 25,
    price: 15000,
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 4,
    code: "PDCT003001",
    product_id: 3,
    name: "Herbal",
    stock: 16,
    price: 10000,
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
  {
    id: 5,
    code: "PDCT003002",
    product_id: 3,
    name: "Tablet",
    stock: 28,
    price: 9000,
    is_active: true,
    created_at: "2023-04-01 07:00:00",
    updated_at: "2023-04-01 07:00:00",
  },
];
