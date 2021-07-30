import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error boundary component", () => {
  const error = {};
  const reset = jest.fn();

  beforeEach(() => {
    render(<Error />);
  });

  it("should display the text something has gone wrong", () => {
    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("should have an element with a Main role", () => {
    expect(screen.getByRole("main")).toHaveClass("main-class");
  });

  it("should alert the user there", async () => {
    expect(await screen.findByText("Return to main site")).toBeInTheDocument();
  });
});
