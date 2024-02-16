import { render, screen } from "@testing-library/react";
import ScrollDownIcon from "./ScrollDownIcon";

describe("ScrollDownIcon", () => {
  test("renders without crashing", () => {
    render(<ScrollDownIcon color="#000" />);
  });

  test("renders correct SVG elements", () => {
    render(<ScrollDownIcon color="#000" />);
    const wheelPath = screen.getByTestId("wheel-path");
    const mousePath = screen.getByTestId("mouse-path");
    expect(wheelPath).toBeInTheDocument();
    expect(mousePath).toBeInTheDocument();
  });

  test("applies correct color based on the color prop", () => {
    render(<ScrollDownIcon color="#000" />);
    const wheelPath = screen.getByTestId("wheel-path");
    const mousePath = screen.getByTestId("mouse-path");
    expect(wheelPath.style[1]).toBe("stroke");
    expect(mousePath.style[1]).toBe("stroke");
  });
});
