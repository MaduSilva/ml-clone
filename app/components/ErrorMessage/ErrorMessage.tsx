import Link from "next/link";
import styles from "./ErrorMessage.module.css";
import Image from "next/image";
import lupa from "../../../resources/404.png";

const ErrorMessage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={lupa} alt="Lupa" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>
          No hay publicaciones que coincidan con tu búsqueda
        </h3>
        <ul className={styles.list}>
          <li>Revisá la ortografía de la palabra</li>
          <li>Utilizá palabras más genéricas o menos palabras.</li>
          <li>
            <Link
              href="https://www.mercadolibre.com.ar/categorias"
              className={styles.link}
            >
              Navegá por las categorías
            </Link>{" "}
            para encontrar un producto similar:&nbsp;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorMessage;
