import Container from "../Container";
import Link from "next/link";
import { Button } from "../ui/button";
import FlashProductCard from "../ui/FlashProductCard";
import { TProduct } from "@/types/products";

const FlashSale = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products?limit=4&flashSale=true`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: flashSaleProducts } = await res.json();
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold">Flash Sale</h1>
        <Link href={"/flash-sale"}>
          <Button variant="outline">View All</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {flashSaleProducts.map((product: TProduct) => (
          <FlashProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
