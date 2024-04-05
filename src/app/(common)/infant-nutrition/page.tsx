import Container from "@/components/Container";
import Filters from "@/components/Products/Filters";
import Pagination from "@/components/ui/Paginations";
import ProductCard from "@/components/ui/ProductCard";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TProduct } from "@/types/products";
import { Filter } from "lucide-react";

const ProductsPage = async () => {
  const res = await fetch(
    `${process.env.SERVER_URL}/products?sortby=createdAt&`,
    {
      cache: "no-store",
    }
  );
  const { data: flashSaleProducts } = await res.json();
  return (
    <Container className="pt-5 lg:pt-8 pb-8 lg:pb-10">
      <div className="space-y-4 lg:space-y-5 ">
        <h1 className="text-2xl md:text-3xl font-bold">Infant Nutrition</h1>
        <div className="space-y-1.5">
          <p className="font-semibold text-sm">Showing 1–12 of 24 item(s)</p>
          <p className="text-sm max-w-[90ch] text-slate-500">
            Don&rsquo;t miss out on this opportunity to save big on baby
            essentials!
          </p>
        </div>
      </div>
      <div className="py-8 flex gap-6 relative">
        {/* small device */}
        <aside className="lg:hidden">
          <Sheet>
            <SheetTrigger className="flex justify-center items-center gap-2 flex-nowrap text-base font-medium bg-sky-950/70 px-2 py-1 text-white rounded-l-md fixed right-0 top-16 z-10">
              Filter <Filter size={17} />
            </SheetTrigger>
            <SheetContent side={"left"} className="min-w-[300px] max-w-fit pt-20 px-0">
              <Filters />
            </SheetContent>
          </Sheet>
        </aside>
        {/* large device  */}
        <aside className="w-[400px] h-fit hidden lg:block sticky top-[80px] left-0">
          <Filters />
        </aside>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {flashSaleProducts.map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
      <Pagination />
    </Container>
  );
};
export default ProductsPage;
