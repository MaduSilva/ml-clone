import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchInput from "@/components/searchInput/SearchInput";
import { mockStore } from "./mocks/mockStore";

describe("searchInput Component", () => {
  it("should renders searchInput component with initial state", () => {
    render(
      <Provider store={mockStore}>
        <SearchInput />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("Nunca dejes de buscar")
    ).toBeInTheDocument();
  });
});
