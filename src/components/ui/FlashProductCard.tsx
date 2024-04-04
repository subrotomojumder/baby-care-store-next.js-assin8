import { TProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import Rating from "./Rating";
import { Button } from "./button";

const FlashProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-white border border-slate-100 hover:border-slate-50 shadow hover:shadow-md shadow-accent group rounded transition-all">
      <Link href={`products/${product._id as string}`}>
        <div className="relative">
          <div className="rounded-t">
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
              <Badge
                className="rounded-sm bg-green-500"
                variant={"destructive"}
              >
                {product.category}
              </Badge>
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
          <div className="bg-black/40 absolute inset-0 w-full rounded border-slate-500 flex justify-center items-center duration-500 opacity-0 group-hover:opacity-100">
            <Button variant="outline" className="rounded-full">
              15% Discount
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlashProductCard;
