import React from "react";
import { render, screen } from "@testing-library/react";
import SortOrderBy from "../components/sortOrderBy/SortOrderBy";
import { Provider } from "react-redux";
import { mockStore } from "./mocks/mockStore";

describe("SortOrderBy Component", () => {
  it("should render SortOrderBy component with initial state", () => {
    render(
      <Provider store={mockStore}>
        <SortOrderBy />
      </Provider>
    );

    expect(screen.getByText("Ordenar por")).toBeInTheDocument();

    expect(screen.getByText("Más relevantes")).toBeInTheDocument();
  });
});
