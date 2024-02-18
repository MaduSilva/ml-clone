import SortOrderBy from "@/components/sortOrderBy/sortOrderBy";
import Layout from "@/components/layout";
import ProductsListPage from "./productsListPage";
import FilterPrice from "@/components/filterPrice/filterPrice";
import filters from "../data/filters.json";
import { useGlobalContext } from "@/contexts/globalContext";
import FiltersPage from "./filtersPage";

export default function Home() {
  return (
    <div>
      <Layout>
        <SortOrderBy />
        <FiltersPage filterId={"price"} />
        <ProductsListPage filterId={"price"} />
      </Layout>
    </div>
  );
}
