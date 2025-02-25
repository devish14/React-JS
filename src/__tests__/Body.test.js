import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { BodyComponent } from "../components/Body";
import MOCK_DATA from "../utils/MockData/RestaurantListMock.json";

// Adding mock function for fetch and async

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should write test cases for Body Component", () => {
  //   Since i using state and fetch in my comp i using act and async and wrapping render into it

//   beforeAll(() => {
//     console.log(
//       "This is a callback functions this runs before all the test cases"
//     );
//   });

//   beforeEach(() => {
//     console.log("This is a before each");
//   });

//   afterEach(() => {
//     console.log("This is a after each");
//   });

//   afterAll(() => {
//     console.log("This is a after all");
//   });

  it("Should render the Body Component", async () => {
    await act(async () =>
      render(
        //as using Link i am wrapping it in browser router
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      )
    );

    const buttonType = screen.getByRole("button", { name: "Search" });
    expect(buttonType).toBeInTheDocument();
  });

  it("Should check the input box values", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyComponent></BodyComponent>
        </BrowserRouter>
      )
    );
    const searchValue = screen.getByTestId("searchInput");
    expect(searchValue).toBeInTheDocument();
  });

  it("Should check the resto cards length before clicking the search onload value", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyComponent></BodyComponent>
        </BrowserRouter>
      )
    );

    // expecting the total cards length to be rendered
    const cardsBeforeSearch = screen.getAllByTestId("restCard");
    expect(cardsBeforeSearch.length).toBe(7);
  });

  //    Here i am giving a search value and checking how many resto cards are loaded on the click of serach

  it("Should check the input box values and trigger the change event on button click of search and display the resto cards after search button click", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyComponent></BodyComponent>
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchValue = screen.getByTestId("searchInput");
    fireEvent.change(searchValue, { target: { value: "restaurant" } });
    fireEvent.click(searchBtn);

    // screen should load all the cards displayed on the body

    const cards = screen.getAllByTestId("restCard");
    expect(cards.length).toBe(2);
  });

  it("Should filter my top rated restaurant after show the length of cards after the button click", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      )
    );
    const buttonName = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });
    fireEvent.click(buttonName);

    const cardsAfterFilter = screen.getAllByTestId("restCard");
    expect(cardsAfterFilter.length).toBe(4);
  });
});
