import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import HeaderComponent from "../components/Header";
import AppStore from "../utils/appStore";
import "@testing-library/jest-dom";

describe("Header Component test cases", () => {
  it("Should load a header component with login button ", () => {
    render(
      //  To identify the link from header comp using BrowserRouter so the test can understand

      // As i have a redux selector in header component jest is not able to understand that as its not react ,
      // so to identify that selecor we are wrapping it in provider and adding the store used for this selector

      <BrowserRouter>
        <Provider store={AppStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    // name - login is given to get the specific button name if there are more than one button

    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
  });

  it("Should check if the login button is there on by using text", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const buttonName = screen.getByText("Login");
    expect(buttonName).toBeInTheDocument();
  });

  it("Should check the cartItems in the header component", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart (0 Items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should check the cart items with any dynamic value using Regex", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart \(\d+ Items\)/i);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should check the logout button on click of login", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    // To make the click functionality work i am using a fire eveny which turns the login to logout on click button

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
