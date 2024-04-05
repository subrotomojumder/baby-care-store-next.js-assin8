import Container from "@/components/Container";
import FlashProductCard from "@/components/ui/FlashProductCard";
import Pagination from "@/components/ui/Paginations";
import TimeCountDown from "@/components/ui/TimeCountDown";
import { TProduct } from "@/types/products";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products?flashSale=true`, {
    cache: "no-store",
  });
  const { data: flashSaleProducts } = await res.json();
  return (
    <Container className="py-5 lg:py-8 ">
      <div className="space-y-5 lg:space-y-7">
        <div className="flex justify-between">
          <h1 className="text-2xl md:text-3xl font-bold">Flash Sale</h1>
          <TimeCountDown
            dateMillisecond={Number(
              new Date("2024-10-04T13:19:11+0000").getTime()
            )}
          />
        </div>
        <div className="space-y-1.5">
          <p className="font-semibold text-sm">Showing 1–12 of 24 item(s)</p>
          <p className="text-sm max-w-[90ch] text-slate-500">
            Welcome to our Baby Care Flash Sale! Discover incredible discounts
            on essential products for your little one!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {flashSaleProducts.map((product: TProduct) => (
          <FlashProductCard key={product._id} product={product} />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default FlashSalePage;
