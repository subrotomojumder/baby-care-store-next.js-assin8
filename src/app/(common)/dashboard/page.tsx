import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TProduct } from "@/types/products";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";

const Dashboard = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/products`, {
    cache: "no-store",
  });
  const { data: products } = await res.json();
  return (
    <Container>
      <Table className=" border rounded-md px-0 ">
        <TableHeader>
          <TableRow>
            <TableHead className=""></TableHead>
            <TableHead className="">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Ratings</TableHead>
            <TableHead className="text-start pl-5">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product: TProduct) => (
            <TableRow key={product._id}>
              <TableCell>
                <div className=" w-16 lg:w-24">
                  <Image
                    src={product.images[0]}
                    width={100}
                    height={100}
                    alt=""
                    className={cn("object-cover rounded h-full w-full")}
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.title}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.rating} Stars</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-between flex-nowrap gap-x-5">
                  <Button
                    variant={"outline"}
                    className="py-0 px-2 text-sm flex items-center gap-x-2 "
                  >
                    <span className="leading-3">Edit</span>{" "}
                    <SquarePen className="size-3" />
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="p-2 rounded-full hover:bg-gray-200"
                  >
                    <Trash2 className="size-5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Products</TableCell>
            <TableCell className="text-right ">
              <span className="pr-3">{products?.length}</span>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
};

export default Dashboard;
