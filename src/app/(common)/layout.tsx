import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default CommonLayout;
