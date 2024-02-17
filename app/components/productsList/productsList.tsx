import styles from "./productsList.module.css";
import Image from "next/image";
import freeShippingIcon from "../../../resources/freeShipping.png";

interface Product {
  id: number;
  name: string;
  value: number;
  image: string;
  isFreeShipping: boolean;
  installmentsInfo: string;
  location: string;
}

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.productsListContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.productCardBox}>
            <div className={styles.productAndImageContainer}>
              <Image
                width={200}
                height={180}
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productInfos}>
                <div className={styles.shippingContainer}>
                  <p>${product.value.toFixed(2)}</p>
                  {product.isFreeShipping && (
                    <Image
                      width={15}
                      height={15}
                      src={freeShippingIcon}
                      alt={product.name}
                      className={styles.freeShippingIcon}
                    />
                  )}
                </div>

                <h3 className={styles.productName}>{product.name}</h3>

                <p className={styles.productInstallmentInfoText}>
                  {product.installmentsInfo}
                </p>
              </div>
            </div>
            <p className={styles.productLocation}>{product.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
