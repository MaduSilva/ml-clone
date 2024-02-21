import { useEffect } from "react";
import FilterPrice from "@/components/filterPrice/filterPrice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchFilters } from "@/redux/filters/filtersSlice";

const FiltersPage: React.FC<{ filterId: string }> = ({ filterId }) => {
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
        console.error("Error filtersPage:", error);
      }
    };

    fetchFiltersRequest();
  }, [dispatch, searchText, sortBy, filterSelected]);

  console.log(filtersData);
  return (
    <div>
      <FilterPrice filters={filtersData} filterId={filterId} />
    </div>
  );
};

export default FiltersPage;
