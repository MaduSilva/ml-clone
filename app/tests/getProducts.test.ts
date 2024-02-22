import { getProducts } from "../services/api/getProducts";
import productMock from "./mocks/productMock.json";

describe("getProducts fetch", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock) = jest.fn();
  });

  it("should fetch all products with success", async () => {
    const mockResponse = {
      results: productMock,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const searchText = "Ipod";
    const sortBy = "relevance";
    const filterId = "";
    const filterSelected = "";

    const products = await getProducts(
      searchText,
      sortBy,
      filterId,
      filterSelected
    );

    expect(products).toEqual(mockResponse.results);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/sites/MLA/search?q=Ipod&sort=relevance&=&limit=10`
    );
  });

  it("should handle failed fetch request", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const searchText = "Apple";
    const sortBy = "relevance";
    const filterId = "";
    const filterSelected = "";

    const products = await getProducts(
      searchText,
      sortBy,
      filterId,
      filterSelected
    );

    expect(products).toEqual([]);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/sites/MLA/search?q=Apple&sort=relevance&=&limit=10`
    );
  });
});
