import { useEffect } from "react";
import PriceFilterItem from "../components/priceFilterItem/PriceFilterItem";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchFilters } from "@/redux/filters/filtersSlice";

const PriceFilter: React.FC<{ filterId: string }> = ({ filterId }) => {
  const dispatch = useAppDispatch();

  const { filtersData, sortBy, filterSelected } = useAppSelector(
    (state) => state.filters
  );

  const { searchText } = useAppSelector((state) => state.products);

  useEffect(() => {
    const fetchFiltersRequest = async () => {
      try {
        dispatch(
          fetchFilters({ searchText, sortBy, filterId, filterSelected })
        );
      } catch (error) {
        console.error("Error PriceFilter:", error);
      }
    };

    fetchFiltersRequest();
  }, [dispatch, searchText, sortBy, filterSelected]);

  return (
    <div>
      <PriceFilterItem filters={filtersData} filterId={filterId} />
    </div>
  );
};

export default PriceFilter;
