import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = { children: ReactNode; className?: string };

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-7xl xl:max-w-[1480px] mx-auto px-5 md:px-[35px] py-10 lg:py-16",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
