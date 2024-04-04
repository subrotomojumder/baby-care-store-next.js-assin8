import Container from "../Container";
import Link from "next/link";
import { Button } from "../ui/button";

const FlashSale = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold">Flash Sale</h1>
        <Button >
          See All
        </Button>
      </div>
    </Container>
  );
};

export default FlashSale;
