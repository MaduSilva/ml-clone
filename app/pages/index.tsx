import Layout from "@/components/layout";
import ProductsList from "@/components/productsList/productsList";
import products from "@/data/products.json";

export default function Home() {
  return (
    <div>
      <Layout>
        <ProductsList products={products} />
      </Layout>
    </div>
  );
}
