"use client";

// import Image from "next/image";
// import logoImage from "@/assets/images/logo.png";
// import { navRoutes } from "@/utils/routeConstant";
// import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavbarComp = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      navbar
      {/* <Navbar
        maxWidth={"2xl"}
        shouldHideOnScroll={true}
        isBordered={true}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "bg-white",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <Link href={"/"}>
            <NavbarBrand>
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
            </NavbarBrand>
          </Link>
        </NavbarContent>
        <NavbarMenu className="bg-slate-100">
          {navRoutes.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <Button
                as={Link}
                href={item.path}
                color="primary"
                variant="light"
                className="text-lg justify-start"
                size="sm"
                radius="none"
                fullWidth={true}
              >
                {item.name}
              </Button>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent className="hidden sm:flex gap-0" justify="center">
          {navRoutes.map((item) => (
            <NavbarItem
              key={item.name}
              isActive={pathName === item.path ? true : false}
            >
              <Button
                as={Link}
                href={item.path}
                color="primary"
                variant="light"
                className="text-lg drop-shadow-sm"
                size="sm"
                radius="none"
              >
                {item.name}
              </Button>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="">
            <Button
              color="success"
              variant="solid"
              className="text-white font-medium"
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}
    </div>
  );
};

export default NavbarComp;
