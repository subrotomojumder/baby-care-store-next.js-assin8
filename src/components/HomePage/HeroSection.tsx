import { TProduct } from "@/types/products";
import Container from "../Container";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

const HeroSection = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products?limit=10`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: flashSaleProducts } = await res.json();
  return (
    <>
      <div className="hero-section w-full 10">
        <Container>
          <div className="text-center lg:text-start text-white px-10 lg:px-5">
            <h1 className="max-w-[80ch] text-3xl lg:text-5xl font-bold leading-tight md:leading-loose">
              Navigating Baby Care with Confidence!
            </h1>
            <p className=" max-w-[90ch] font-thin mt-3 text-sm md:text-base">
              Welcome to our comprehensive baby care guide, support parents on
              their exciting journey! From soothing techniques to feeding
              schedules, diapering essentials to sleep training tips,
              we&rsquo;ve got you covered.
            </p>
            <div className="relative h-fit mt-5">
              <div className="animate-ping absolute inline-flex h-full w-24 rounded-full bg-sky-50 opacity-35 z-0 transition-all"></div>
              <Button className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg z-10">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-slate-100 ">
        <Container>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[80%] lg:max-w-[90%] mx-auto"
          >
            <CarouselContent className="max-w-full">
              {flashSaleProducts.map((product: TProduct) => (
                <CarouselItem
                  key={product._id}
                  className="md:basis-1/2 lg:basis-1/3 pl-10 pr-5"
                >
                  <div className="relative">
                    <div className="group bg-white rounded-xl overflow-hidden border-2 border-blue-500 p-0.5">
                      <Image
                        src={product.images[0]}
                        alt="image"
                        height={400}
                        width={400}
                        className="rounded-xl group-hover:scale-105 duration-200"
                      />
                    </div>
                    <div className="p-5 pt-2 bg-gray-100 flex flex-col gap-2">
                      <h5 className="font-medium line-clamp-2 text-center">
                        {product.title}
                      </h5>
                      {/* <div className="flex justify-between items-center">
                        <h6 className="font-semibold ">
                         ${product.price}{" "}
                          <span className="line-through font-normal text-gray-400">
                            $
                            {Number(product.price) +
                              Number(product.price) * (15 / 100)}
                          </span>
                        </h6>
                        <Link href={`products/${product._id as string}`}>
                          <Button variant="outline">Details</Button>
                        </Link>
                      </div> */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge className="absolute top-5 left-5 bg-green-400">
                              Brand New
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>2 days ago!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
