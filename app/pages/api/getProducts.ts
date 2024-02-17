import Product from "@/interfaces/productsInterface";

export const getProducts = async (searchText: string): Promise<Product[]> => {
  try {
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(
      searchText
    )}&limit=10`;
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
