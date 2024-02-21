import Layout from "@/components/layout";
import ProductsList from "./ProductsList";
import Filters from "./Filters";
import { Provider } from "react-redux";

import { store } from "../redux/store";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Filters />
          <ProductsList />
        </Layout>
      </Provider>
    </div>
  );
}
