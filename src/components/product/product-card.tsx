import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category, Product } from "@/lib/data";
import Link from "next/link";

async function getCategory(id: number): Promise<Category> {
  const response = await fetch(`http://localhost:3000/api/categories/${id}`, {
    method: "GET",
  });
  const data = await response.json();

  return data.category;
}

export async function ProductCard({ product }: { product: Product }) {
  const category = await getCategory(product.category_id);
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group hover:border-blue-500 transition duration-200">
        <CardContent className="aspect-[4/3] w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{category.name}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
