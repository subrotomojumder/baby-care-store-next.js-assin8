import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-[220px] xl:w-[250px] bg-blue-300 min-h-screen">
        <div className="px-4 py-8">
          <Link href={"#profile"}>
            <Button className="w-full rounded-none text-start" variant="secondary">
              Profile
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button className="w-full rounded-none text-start" variant="secondary">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardLayout;
