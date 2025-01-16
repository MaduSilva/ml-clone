import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ProductsItems from "./ProductsItems";
import productMock from "../../tests/mocks/productMock.json";

describe("ProductsItems Component", () => {
  it("should render ProductsItems component", () => {
    const { getByText } = render(<ProductsItems products={productMock} />);

    expect(
      getByText(
        "Apple AirPods (segunda Generacion) Con Estuche De Carga - Blanco"
      )
    ).toBeInTheDocument();
  });
});
