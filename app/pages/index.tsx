import SortOrderBy from "@/components/sortOrderBy/sortOrderBy";
import Layout from "@/components/layout";
import ProductsListPage from "./productsListPage";
import FiltersPage from "./filtersPage";
import { Provider } from "react-redux";

import { store } from "../redux/store";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <SortOrderBy />
          <FiltersPage filterId={"price"} />
          <ProductsListPage />
        </Layout>
      </Provider>
    </div>
  );
}
