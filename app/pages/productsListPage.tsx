import { useEffect } from "react";
import ProductsList from "@/components/productsList/productsList";
import { fetchProducts } from "../redux/products/productsSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const ProductsListPage: React.FC = () => {
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
        console.error("Error productsListPage:", error);
      }
    };

    fetchProductsRequest();
  }, [dispatch, sortBy, searchText, filterSelected]);

  return (
    <div>
      <ProductsList products={productsData} />
    </div>
  );
};

export default ProductsListPage;
