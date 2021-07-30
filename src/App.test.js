import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // generally what you use
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
