import { getFilters } from "../services/api/getFilters";
import filterMock from "./mocks/filterMock.json";

describe("getFilters fetch", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock) = jest.fn();
  });

  it("should fetch all filters with success", async () => {
    const mockResponse = {
      available_filters: filterMock,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const searchText = "Samsung";
    const sortBy = "price_asc";
    const filterId = "price";
    const filterSelected = "1222-12500";

    const filters = await getFilters(
      searchText,
      sortBy,
      filterId,
      filterSelected
    );

    expect(filters).toEqual(mockResponse.available_filters);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/sites/MLA/search?q=Samsung&sort=price_asc&price=1222-12500&limit=10`
    );
  });

  it("should handle failed fetch request", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const searchText = "Samsung";
    const sortBy = "price_asc";
    const filterId = "price";
    const filterSelected = "1222-12500";

    const filters = await getFilters(
      searchText,
      sortBy,
      filterId,
      filterSelected
    );

    expect(filters).toEqual([]);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.mercadolibre.com/sites/MLA/search?q=Samsung&sort=price_asc&price=1222-12500&limit=10`
    );
  });
});
