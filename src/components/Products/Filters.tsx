import { Filter } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

const Filters = () => {
  const priceRanges = [
    {
      min: 0,
      max: 500,
    },
    {
      min: 501,
      max: 1000,
    },
    {
      min: 1001,
      max: 2000,
    },
    {
      min: 2001,
      max: 5000,
    },
  ];
  const categories = [
    {
      name: "Milk",
    },
    {
      name: "ELDOMILK",
    },
    {
      name: "Fruit juice",
    },
    {
      name: "Shampoo",
    },
    {
      name: "Diapers",
    },
  ];
  return (
    <div className="pb-5">
      <h3 className="text-xl lg:text-2xl font-semibold ml-5 underline underline-offset-4"><Filter className="inline" /> Filters</h3>
      
      <div className="divide-y-2 space-y-5 max-h-[76vh] overflow-y-scroll px-6">
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold">Price Range</h3>
          {priceRanges.map((range, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={"terms" + index} name="price" />
              <label
                htmlFor={"terms" + index}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span>{range.min}</span> <span>-</span> {""}
                <span>{range.max}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold">Brands/Category</h3>
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={"terms" + index} name="category" />
              <label
                htmlFor={"terms" + index}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold">Ratings</h3>
          {[1, 2, 3, 4, 5].map((number, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={"terms" + index} name="category" />
              <label
                htmlFor={"terms" + index}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {number} Stars
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
