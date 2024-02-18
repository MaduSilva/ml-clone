import { useEffect, useState } from "react";
import { getFilters } from "./api/getProducts";
import { useGlobalContext } from "@/contexts/globalContext";
import FilterPrice from "@/components/filterPrice/filterPrice";

const FiltersPage: React.FC<{ filterId: string }> = ({ filterId }) => {
  const { filtersData, setFiltersData, searchText, sortBy, filterSelected } =
    useGlobalContext();

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const data = await getFilters(
          searchText,
          sortBy,
          filterId,
          filterSelected
        );
        setFiltersData(data);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, [searchText, sortBy, filterSelected]);

  return (
    <div>
      <FilterPrice filters={filtersData} filterId={filterId} />
    </div>
  );
};

export default FiltersPage;
