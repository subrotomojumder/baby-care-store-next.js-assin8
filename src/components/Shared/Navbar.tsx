"use client";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { navRoutes } from "@/utils/routeConstant";
import { usePathname } from "next/navigation";

export type TNavItem = {
  name: string;
  path: string;
};
const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLUListElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 w-full z-[999] py-1 md:py-2 transition-all duration-300 bg-blue-400 "
      )}
    >
      <nav className="h-full w-full max-w-[1480px] mx-auto flex justify-between items-center px-4 md:px-[30px] ">
        <Link href={"/"}>
          <div className="flex justify-start items-center">
            <div className="max-w-24 md:max-w-28">
              <Image
                src={logoImage}
                alt="logo"
                property="true"
                className="max-h-full"
              />
            </div>
            <p className="font-bold text-2xl md:text-3xl italic font-mono">
              Care
            </p>
          </div>
        </Link>
        <Button
          onClick={() => setIsOpen((c) => !c)}
          variant={"ghost"}
          className=" lg:hidden rounded-[2px] hover:bg-[#f1f3f529] px-2 text-white hover:text-white z-10"
        >
          <AlignJustify className="shrink-0 size-[22px] sm:size-6" />
        </Button>
        {/* large device */}
        <ul className="hidden lg:flex justify-around space-x-3 xl:space-x-4 text-white">
          {navRoutes.map((item: TNavItem, i) => (
            <li
              className="rounded-[2px] hover:bg-[#e0e4eb17] px-2 py-1 transition-all"
              key={i}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Link href={"#login"}>
            <button className="bg-green-500 active:bg-green-600 px-2 py-1 transition-all rounded-md">
              Login
            </button>
          </Link>
        </div>
        {/* small device */}
        <div
          onClick={handleOutsideClose}
          className={cn(" lg:hidden fixed inset-0 bg-gray-900/50 invisible ", {
            visible: isOpen,
          })}
        >
          <ul
            ref={containerRef}
            className="flex flex-col text-end divide-y divide-gray-500 absolute right-0 top-12 md:top-16 bg-white dark:bg-slate-600 py-2 px-4"
          >
            {navRoutes.map((item: TNavItem, i) => (
              <Link href={item.path} key={i}>
                <li
                  className={cn(
                    "rounded-[2px] hover:bg-sky-500/80 hover:text-white font-[500] px-4 py-2",
                    {
                      "transition-all": isOpen,
                    }
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
            <li className="py-2">
              <Link href={"#login"}>
                <button className="bg-green-500 active:bg-green-600 px-2 py-1 rounded-md w-full">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
