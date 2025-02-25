import { screen, render } from "@testing-library/react";
import RestaurantCard from "../components/Restaurant-Card";
import { WithDiscountLabel} from "../components/Restaurant-Card"
import "@testing-library/jest-dom";
import MOCK_DATA from "../utils/MockData/RestaurantCardMock.json";

describe("Should write test cases for Restaurant Card", () => {
  it("Should render the component using data(props)", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    //   testing if the name of the restaturant is present or not
    const restName = screen.getByText("Dindigul Thalappakatti");
    expect(restName).toBeInTheDocument();
  });

  it("Should test the HOC with discounted label", ()=> {
    // Wrapping the RestCard with HOC
    
    const WrappedRestCard = WithDiscountLabel(RestaurantCard)
    render(<WrappedRestCard resData={MOCK_DATA}/>);
    const discountLabel = screen.getByText("20% OFF");
    expect(discountLabel).toBeInTheDocument();
  })
});
