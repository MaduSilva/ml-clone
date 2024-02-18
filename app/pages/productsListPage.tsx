import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import ProductsList from "@/components/productsList/productsList";
import { useGlobalContext } from "@/contexts/globalContext";

const ProductsListPage: React.FC<{ filterId: string }> = ({ filterId }) => {
  const { productsData, setProductsData, searchText, sortBy, filterSelected } =
    useGlobalContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(
          searchText,
          sortBy,
          filterId,
          filterSelected
        );
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchText, sortBy, filterSelected]);

  return (
    <div>
      <ProductsList products={productsData} />
    </div>
  );
};

export default ProductsListPage;
