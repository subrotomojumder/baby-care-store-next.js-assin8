import { Progress } from "./progress";
import { Button } from "./button";

const Pagination = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 my-10 lg:my-16">
      <p className="font-semibold text-sm">Showing 1–12 of 24 item(s)</p>
      <Progress value={50} className="w-[55%] lg:w-[40%] h-1 bg-slate-400" />
      <Button variant="outline" className="rounded-full">
        Learn more...
      </Button>
    </div>
  );
};

export default Pagination;
