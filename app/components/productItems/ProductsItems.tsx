import styles from "./ProductsItems.module.css";
import Image from "next/image";
import freeShippingIcon from "../../../resources/freeShipping.png";
import Product from "@/interfaces/Products";
import { getCurrencySymbol } from "@/utils/currencyFormater";
import { formatValue } from "@/utils/valueFormater";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ProductsItems = ({ products }: { products: Product[] }) => {

  const goToProductUrl =  (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.productsListContainer}>
      {products.length !== 0 ? (
        products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productCardBox}>
              <div className={styles.productAndImageContainer}>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.productImage}
                  onClick={() => goToProductUrl(product.permalink)}
                />
                <div className={styles.productInfos}>
                  <div onClick={() => goToProductUrl(product.permalink)} className={styles.shippingContainer}>
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

                  <h3 onClick={() => goToProductUrl(product.permalink)} className={styles.productName}>{product.title}</h3>
                  {product.installments && product.installments.quantity && (
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
                  )}
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

export default ProductsItems;
