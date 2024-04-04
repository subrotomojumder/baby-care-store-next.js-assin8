import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../Container";
import { cn } from "@/lib/utils";
import { TProduct } from "@/types/products";
import ProductCard from "../ui/ProductCard";

const TrendingProducts = async () => {
  const res = await fetch(
    `${process.env.SERVER_URL}/products?limit=8&sortby=rating&sort=des`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: trendingProducts } = await res.json();
  return (
    <Container>
      <div className="flex justify-between">
        <div>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-3")}>
            Trending Products
          </h2>
          <p className={cn("max-w-[60ch] text-gray-600")}>
            Explore a wide range of products, feeding essentials, meticulously
            curated to ensure the utmost comfort and safety for your little one.
          </p>
        </div>
        <Link href={"/products"}>
          <Button variant="outline">View All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {trendingProducts.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;
