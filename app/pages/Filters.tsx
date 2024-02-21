import SortOrderBy from "../components/sortOrderBy/SortOrderBy";
import PriceFilter from "./PriceFilter";
import styles from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={styles.container}>
      <PriceFilter filterId={"price"} />
      <SortOrderBy />
    </div>
  );
}
