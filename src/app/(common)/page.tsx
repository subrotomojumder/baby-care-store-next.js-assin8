import FlashSale from "@/components/HomePage/FlashSale";
import HeroSection from "@/components/HomePage/HeroSection";
import TopCategories from "@/components/HomePage/TopCategories";
import TrendingProducts from "@/components/HomePage/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlashSale />
      <TopCategories />
      <TrendingProducts />
    </>
  );
};

export default HomePage;
