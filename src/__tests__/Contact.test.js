import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Component Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    // Testing if the heading is there or not
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should button inside the contact component", () => {
    render(<Contact />);
    // Testing if the button is there or not
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should check if the Submit text is there in contact component", () => {
    render(<Contact />);
    // Testing if the Text Submit is there or not is there or not
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });

  describe("Input Boxes test cases", () => {
    // Here it is used insted of test , both test and it are correct it is just and alias of test
    it("Should check if the placeholder name is there in the contact component", () => {
      render(<Contact />);
      const placeholder = screen.getByPlaceholderText("message");
      expect(placeholder).toBeInTheDocument();
    });

    it("Should load two input boxes on the contact compact", () => {
      render(<Contact />);
      const inputBox = screen.getAllByRole("textbox");
      // console.log(inputBox);
      expect(inputBox.length).toBe(2);
    });
  });
});
