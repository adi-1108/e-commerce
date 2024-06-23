import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const getCategoryList = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories?limit="
    );
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <Card className="flex items-center justify-center gap-8 px-4 py-2 my-2">
      {category?.map((item, index) => {
        return (
          <Button
            className="font-semibold text-white transition-all hover:scale-105"
            key={index}
          >
            {item}
          </Button>
        );
      })}
    </Card>
  );
};

export default CategoryList;
