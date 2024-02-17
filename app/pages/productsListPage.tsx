import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import Product from "@/interfaces/productsInterface";
import Image from "next/image";
import { getCurrencySymbol } from "@/utils/currencyFormater";
import { formatValue } from "@/utils/valueFormater";
import ProductsList from "@/components/productsList/productsList";
import { useGlobalContext } from "@/contexts/globalContext";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

const ProductsListPage = () => {
  const { productsData, setProductsData, searchText } = useGlobalContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(searchText);
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchText]);

  return (
    <div>
    
        <ProductsList products={productsData} />
     
    </div>
  );
};

export default ProductsListPage;
