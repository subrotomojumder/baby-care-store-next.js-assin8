import { TProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import Rating from "./Rating";

const FlashProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-white border border-slate-100 hover:border-0 shadow hover:shadow-md shadow-accent group rounded transition-all">
      <Link href={`products/${product._id as string}`}>
        <div className="group-hover:opacity-80 rounded-t">
          <Image
            src={product.images[0]}
            alt="image"
            height={400}
            width={400}
            className="rounded-t"
          />
        </div>
        <div className="p-4 pb-5 bg-gray-100 flex flex-col gap-2">
          <div className="space-y-1">
            <Badge className="rounded-sm bg-green-500" variant={"destructive"}>
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
      </Link>
    </div>
  );
};

export default FlashProductCard;
