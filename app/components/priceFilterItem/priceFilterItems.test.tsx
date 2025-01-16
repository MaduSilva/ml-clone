import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import PriceFilterItems from "./PriceFilterItem";
import { mockStore } from "../../tests/mocks/mockStore";
import filterMock from "../../tests/mocks/filterMock.json";

describe("PriceFilterItems Component", () => {
  it("should renders PriceFilterItems component", () => {
    render(
      <Provider store={mockStore}>
        <PriceFilterItems filters={filterMock} filterId={"price"} />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Mínimo")).toBeInTheDocument();
  });
});
