import Product from "@/interfaces/productsInterface";

export const getProducts = async (
  searchText: string,
  sortBy: string = "relevance"
): Promise<Product[]> => {
  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      searchText
    )}&sort=${sortBy}&limit=10`;
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
