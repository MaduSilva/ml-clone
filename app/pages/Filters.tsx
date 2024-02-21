import SortOrderBy from "../components/sortOrderBy/SortOrderBy";
import PriceFilter from "./PriceFilter";

export default function Filters() {
  return (
    <div>
      <PriceFilter filterId={"price"} />
      <SortOrderBy />
    </div>
  );
}
