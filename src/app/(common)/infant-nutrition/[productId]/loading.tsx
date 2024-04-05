import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage= async () => {
  return (
    <Container className="flex justify-center">
      <div className="flex flex-col space-y-5">
        <div className="flex gap-5 w-[70%]">
          <Skeleton className="h-[300px] lg:h-[400px] w-[50%] rounded-xl" />
          <Skeleton className="h-[300px] lg:h-[400px] w-[50%] rounded-xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-[70%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
      </div>
    </Container>
  );
};

export default LoadingPage;