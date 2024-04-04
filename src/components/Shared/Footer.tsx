import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const footerItems = [
  {
    category: "Trending Products",
    subCates: [
      { name: "Pricing", href: "#" },
      { name: "Overview", href: "#" },
      { name: "Browse", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  },
  {
    category: "Brands",
    subCates: [
      { name: " Dark Romance", href: "#" },
      { name: "Resort Prints", href: "#" },
      { name: "Noor", href: "#" },
      { name: "Rumi", href: "#" },
    ],
  },
  {
    category: "About Us",
    subCates: [
      { name: "Contact Us", href: "#" },
      { name: "Developers", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    category: "Contact Us",
    subCates: [
      { name: "About", href: "#" },
      { name: "Press", href: "#" },
      { name: "Events", href: "#" },
      { name: "Request Demo ➜", href: "#" },
    ],
  },
  {
    category: "Customer Care",
    subCates: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Gmail", href: "#" },
      { name: "Whatsapp's", href: "#" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-sky-950">
      <div className="h-full w-full max-w-7xl mx-auto px-4 md:px-[30px] 2xl:px-0 py-8 md:py-12 grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-2">
        <Link href={"/"}>
          <div className="flex justify-start items-center">
            <Image src={logo} className="max-h-14 max-w-14" alt="" />
            <h1 className="text-xl lg:text-2xl">
              <span className="text-white font-bold">Care</span>
            </h1>
          </div>
        </Link>
        {footerItems.map((item, i) => (
          <div key={i} className="text-gray-400/90">
            <p className="font-medium mb-3 text-gray-200">{item.category}</p>
            <ul className="flex flex-col items-start gap-y-2">
              {item.subCates.map((childItem, ind) => (
                <li key={ind}>
                  <a
                    href={childItem.href}
                    className={`text-xs leading-6 capitalize`}
                  >
                    {childItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-gray-500/60 h-[1.2px]" />
      <div className="h-full w-full max-w-7xl mx-auto px-4 md:px-[30px] 2xl:px-0 py-10 flex justify-center items-center gap-6 text-gray-400 text-xs">
        <span>@ 2024. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
