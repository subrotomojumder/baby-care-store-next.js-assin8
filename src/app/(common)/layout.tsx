import Footer from "@/components/Shared/Footer";
import NavbarComp from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarComp />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};
export default CommonLayout;
