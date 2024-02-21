import { useEffect } from "react";
import ProductsItems from "@/components/productItems/ProductsItems";
import { fetchProducts } from "../redux/products/productsSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const ProductsList: React.FC = () => {
  const dispatch = useAppDispatch();

  const { productsData, searchText } = useAppSelector(
    (state) => state.products
  );
  const { sortBy, filterSelected, filterId } = useAppSelector(
    (state) => state.filters
  );

  useEffect(() => {
    const fetchProductsRequest = async () => {
      try {
        dispatch(
          fetchProducts({ searchText, sortBy, filterId, filterSelected })
        );
      } catch (error) {
        console.error("Error ProductsList:", error);
      }
    };

    fetchProductsRequest();
  }, [dispatch, sortBy, searchText, filterSelected]);

  return (
    <div>
      <ProductsItems products={productsData} />
    </div>
  );
};

export default ProductsList;
