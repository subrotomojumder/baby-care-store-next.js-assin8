import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/types/products";

const LoadingPage = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();
  return (
    <Container className="flex justify-center">
      {products?.map((product: TProduct) => (
        <div key={product._id} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default LoadingPage;
