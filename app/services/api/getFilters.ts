import Filter from "@/interfaces/Filter";

export const getFilters = async (
    searchText: string,
    sortBy: string = "relevance",
    filterId: string = "",
    filterSelected: string = ""
  ): Promise<Filter[]> => {
    try {
      const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
        searchText
      )}&sort=${sortBy}&${filterId}=${filterSelected}&limit=10`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch filters");
      }
      const data = await response.json();
      return data.available_filters;
    } catch (error) {
      console.error("Error fetching filters:", error);
      return [];
    }
  };
  