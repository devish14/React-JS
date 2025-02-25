import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/Restaurant-Menu";
import HeaderComponent from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../utils/MockData/RestaurantMenuMock.json";
import { Provider } from "react-redux";
import AppStore from "../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should render test cases for Restaurant-Menu component", () => {
  it("Should render Restaurant-Menu component", async () => {
    await act(async () =>
      render(
        <Provider store={AppStore}>
          <RestaurantMenu />
        </Provider>
      )
    );
    const findAccordianHeader = screen.getByText("Breakfast (10)");
    expect(findAccordianHeader).toBeInTheDocument();
  });

  it("Should render the length of the food items on click of the accrdian", async () => {
    await act(async () =>
      render(
        <Provider store={AppStore}>
          <RestaurantMenu />
        </Provider>
      )
    );
    const findAccordianHeader = screen.getByText("Breakfast (10)");
    fireEvent.click(findAccordianHeader);

    const itemLength = screen.getAllByTestId("foodItems");
    expect(itemLength.length).toBe(10);
  });

  it("Should render the length of the Add button", async () => {
    await act(async () =>
      render(
        <Provider store={AppStore}>
          <RestaurantMenu />
        </Provider>
      )
    );
    const findAccordianHeader = screen.getByText("Breakfast (10)");
    fireEvent.click(findAccordianHeader);

    const itemLength = screen.getAllByTestId("foodItems");
    const buttonLength = screen.getAllByRole("button", { name: "Add" });
    expect(buttonLength.length).toBe(10);
  });

  it("Should render the rest menu and BEFORE the click of Add the header component must render the header cart text", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={AppStore}>
            <HeaderComponent />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const findAccordianHeader = screen.getByText("Breakfast (10)");
    fireEvent.click(findAccordianHeader);

    const itemLength = screen.getAllByTestId("foodItems");
    const buttonLength = screen.getAllByRole("button", { name: "Add" });

    const cartItems = screen.getByText("Cart (0 Items)");
    expect(cartItems).toBeInTheDocument();

    // fireEvent.click(buttonLength[0]); before the fireevent is triggered what value occurs
  });

  it("Should render the rest menu and on the click of Add the header component must render the changes", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={AppStore}>
            <HeaderComponent />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const findAccordianHeader = screen.getByText("Breakfast (10)");
    fireEvent.click(findAccordianHeader);

    const itemLength = screen.getAllByTestId("foodItems");
    const buttonLength = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(buttonLength[0]);

    const cartItems = screen.getByText("Cart (1 Items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render the rest menu and on the click of Add the header component must render the changes for two", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={AppStore}>
            <HeaderComponent />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const findAccordianHeader = screen.getByText("Breakfast (10)");
    fireEvent.click(findAccordianHeader);

    const itemLength = screen.getAllByTestId("foodItems");
    const buttonLength = screen.getAllByRole("button", { name: "Add" });
    fireEvent.click(buttonLength[1]);

    const cartItems = screen.getByText("Cart (2 Items)");
    expect(cartItems).toBeInTheDocument();
  });

});
