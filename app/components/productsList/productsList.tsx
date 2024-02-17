import styles from "./productsList.module.css";
import Image from "next/image";
import freeShippingIcon from "../../../resources/freeShipping.png";
import Product from "@/interfaces/productsInterface";
import { getCurrencySymbol } from "@/utils/currencyFormater";
import { formatValue } from "@/utils/valueFormater";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.productsListContainer}>
      {products.length !== 0 ? (
        products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productCardBox}>
              <div className={styles.productAndImageContainer}>
                <Image
                  width={200}
                  height={180}
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.productImage}
                />
                <div className={styles.productInfos}>
                  <div className={styles.shippingContainer}>
                    <p>
                      {" "}
                      {getCurrencySymbol(product.currency_id)}{" "}
                      {formatValue(product.price)}
                    </p>
                    {product.shipping.free_shipping && (
                      <Image
                        width={15}
                        height={15}
                        src={freeShippingIcon}
                        alt={product.title}
                        className={styles.freeShippingIcon}
                      />
                    )}
                  </div>

                  <h3 className={styles.productName}>{product.title}</h3>

                  <p className={styles.productInstallmentInfoText}>
                    En{" "}
                    {product.installments
                      ? product.installments.quantity
                      : null}{" "}
                    cuotas de ${" "}
                    {formatValue(
                      product.installments ? product.installments.amount : 0
                    )}
                  </p>
                </div>
              </div>
              <p className={styles.productLocation}>Location</p>
            </div>
          </div>
        ))
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};

export default ProductsList;
