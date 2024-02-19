import { render, screen } from "@testing-library/react";
import ScrollDownIcon from "./ScrollDownIcon";

describe("ScrollDownIcon", () => {
  test("renders without crashing", () => {
    render(<ScrollDownIcon />);
  });

  test("renders correct SVG elements", () => {
    render(<ScrollDownIcon />);
    const wheelPath = screen.getByTestId("wheel-path");
    const mousePath = screen.getByTestId("mouse-path");
    expect(wheelPath).toBeInTheDocument();
    expect(mousePath).toBeInTheDocument();
  });
});
