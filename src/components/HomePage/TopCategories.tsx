import { cn } from "@/lib/utils";
import Container from "../Container";
import Image from "next/image";
import milkCate from "@/assets/images/nestle-milk-category.jpg";
import diapersCate from "@/assets/images/diapers-category.jpg";
import cosmeticsCate from "@/assets/images/cosmetics-category.jpg";
import shampooCate from "@/assets/images/shampo-category.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const TopCategories = () => {
  return (
    <Container className="">
      <div
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3"
          )}
        >
          Top Categories
        </h2>
        <p className={cn("text-center max-w-[80ch] mx-auto text-gray-600")}>
          Explore a wide range of products, from diapers to feeding essentials,
          meticulously curated to ensure the utmost comfort and safety for your
          little one.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center">
        <div className="relative group overflow-hidden rounded-xl">
          <div className="w-full h-full border border-gray-50 group-hover:border-blue-500 rounded-xl">
            <Image
              src={milkCate}
              alt="image"
              height={500}
              width={400}
              className="rounded-xl w-full h-ful"
            />
          </div>
          <div className="bg-black/70 absolute bottom-0 w-full rounded-b-xl border border-slate-900 translate-y-20 group-hover:translate-y-0 duration-300">
            <div className="flex justify-between items-center px-5 py-3">
              <h2 className="text-white text-lg font-medium">
                Baby nutrition milk
              </h2>
              <Link href={"/products?category=milk"}>
                <Button variant="outline" className="rounded-full">
                  Get All
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="relative group overflow-hidden rounded-xl">
            <div className="w-full h-full border border-gray-50 group-hover:border-blue-500 rounded-xl">
              <Image
                src={cosmeticsCate}
                alt="image"
                height={400}
                width={500}
                className="rounded-xl w-full h-ful"
              />
            </div>
            <div className="bg-black/70 absolute bottom-0 w-full rounded-b-xl border border-slate-900 translate-y-20 group-hover:translate-y-0 duration-300">
              <div className="flex justify-between items-center px-5 py-2">
                <h2 className="text-white text-lg font-medium">
                  Baby scan cosmetics
                </h2>
                <Link href={"/products?category=cosmetics"}>
                  <Button variant="outline" className="rounded-full">
                    Get All
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <div className="w-full h-full border border-gray-50 group-hover:border-blue-500 rounded-xl">
              <Image
                src={diapersCate}
                alt="image"
                height={400}
                width={500}
                className="rounded-xl w-full h-ful"
              />
            </div>
            <div className="bg-black/70 absolute bottom-0 w-full rounded-b-xl border border-slate-900 translate-y-20 group-hover:translate-y-0 duration-300">
              <div className="flex justify-between items-center px-5 py-3">
                <h2 className="text-white text-lg font-medium">
                  Baby Diapers pant
                </h2>
                <Link href={"/products?category=diapers"}>
                  <Button variant="outline" className="rounded-full">
                    Get All
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-xl">
          <div className="w-full h-full border border-gray-50 group-hover:border-blue-500 rounded-xl">
            <Image
              src={shampooCate}
              alt="image"
              height={500}
              width={400}
              className="rounded-xl w-full h-ful"
            />
          </div>
          <div className="bg-black/70 absolute bottom-0 w-full rounded-b-xl border border-slate-900 translate-y-20 group-hover:translate-y-0 duration-300">
            <div className="flex justify-between items-center px-5 py-3">
              <h2 className="text-white text-lg font-medium">
                Baby body Shampoo
              </h2>
              <Link href={"/products?category=shampoo"}>
                <Button variant="outline" className="rounded-full">
                  Get All
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href={"/products"}>
          <Button variant="outline">View All</Button>
        </Link>
      </div>
    </Container>
  );
};

export default TopCategories;
