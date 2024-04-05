import { TProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import Rating from "./Rating";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-white border border-slate-100 hover:border-slate-50 shadow hover:shadow-lg shadow-accent group rounded transition-all">
      <Link href={`infant-nutrition/${product._id as string}`}>
        <div className="group-hover:opacity-80 rounded-t">
          <Image
            src={product.images[0]}
            alt="image"
            height={400}
            width={400}
            className="rounded-t"
          />
        </div>
        <div className="p-4 pb-5 bg-gray-100">
          <div className="space-y-1 h-[86px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    className="rounded-sm bg-green-500"
                    variant={"destructive"}
                  >
                    {product.category}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="z-10">
                  <p>Category {product.category}!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h5 className="font-medium line-clamp-2">{product.title}</h5>
          </div>
          <div className="flex justify-between items-center text-sm font-medium">
            <div className="flex justify-start items-center gap-1">
              Rate: <Rating rate={product.rating} />
            </div>
            <h6 className="">
              <span className="line-through font-normal text-gray-400">
                ${Number(product.price) + Number(product.price) * (15 / 100)}
              </span>{" "}
              ${product.price}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
