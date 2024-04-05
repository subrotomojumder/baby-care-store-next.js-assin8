import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container className="py-0 lg:py-0">
      <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <Image
            className="hidden lg:block"
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className="hidden md:block lg:hidden"
            src="https://i.ibb.co/c1ggfn2/Group-193.png"
            alt=""
            width={400}
            height={500}
          />
          <Image
            className="md:hidden"
            src="https://i.ibb.co/8gTVH2Y/Group-198.png"
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
            The page you ate is missing !!
          </h1>
          <p className="py-4 text-base text-gray-800">
            The content you’re looking for does not exist. Either it was
            removed, or you mistyped the link.
          </p>
          <p className="py-2 text-base text-gray-800">
            Sorry about that! Please visit our home page to get where you need
            to go.
          </p>
          <Link href={"/"}>
            <Button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white">
              Go back Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
