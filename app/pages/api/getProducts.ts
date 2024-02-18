import Filter from "@/interfaces/filterInterface";
import Product from "@/interfaces/productsInterface";

export const getProducts = async (
  searchText: string,
  sortBy: string = "relevance",
  filterId: string = '',
  valuesId: string = ''
): Promise<Product[]> => {
  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      searchText
    )}&sort=${sortBy}&${filterId}=${valuesId}&limit=10`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getFilters = async (
  searchText: string,
  sortBy: string = "relevance",
  filterId: string = '',
  valuesId: string = ''
): Promise<Filter[]> => {
  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      searchText
    )}&sort=${sortBy}&${filterId}=${valuesId}&limit=10`;
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