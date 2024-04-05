import Container from "@/components/Container";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/types/products";

const LoadingPage = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products?limit=8`, {
    cache: "no-store",
  });
  const { data: flashSaleProducts } = await res.json();
  return (
    <Container>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-8 place-content-center">
        {flashSaleProducts.map((product: TProduct) => (
          <SkeletonCard key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default LoadingPage;
