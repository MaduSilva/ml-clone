import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import ProductsList from "@/components/productsList/productsList";
import { useGlobalContext } from "@/contexts/globalContext";

const ProductsListPage = () => {
  const { productsData, setProductsData, searchText, sortBy } =
    useGlobalContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(searchText, sortBy);
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchText, sortBy]);

  return (
    <div>
      <ProductsList products={productsData} />
    </div>
  );
};

export default ProductsListPage;
