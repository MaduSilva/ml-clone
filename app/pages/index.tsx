import FilterOrderBy from "@/components/filterOrderBy/filterOrderBy";
import Layout from "@/components/layout";
import ProductsList from "@/components/productsList/productsList";
import products from "@/data/products.json";
import ProductsListPage from "./productsListPage";

export default function Home() {
  return (
    <div>
      <Layout>
        <FilterOrderBy />
        <ProductsListPage />
      </Layout>
    </div>
  );
}
