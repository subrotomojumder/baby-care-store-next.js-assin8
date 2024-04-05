"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
type TProductImageProps = {
  className?: string;
  images: string[];
};

const ProductDetailsImage = ({ images, className }: TProductImageProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={cn("grid grid-cols-5 lg:pr-5 ", className)}>
      <div className="col-span-1 flex flex-col justify-center lg:justify-center gap-4 pr-2">
        {images.map((image: string, i: number) => (
          <div
            key={i}
            onClick={() => setImageIndex(i)}
            className={cn(
              "bg-white p-2 border-2 border-blue-300 hover:border-blue-500 rounded opacity-70 hover:opacity-100 cursor-pointer",
              {
                "opacity-100 border-blue-500": imageIndex === i,
              }
            )}
          >
            <Image
              src={image}
              width={100}
              height={200}
              alt="image"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="bg-white col-span-4 lg:p-4 lg:border-r">
        <Image
          src={images[imageIndex]}
          width={500}
          height={500}
          alt="image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProductDetailsImage;
