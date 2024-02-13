import { fireEvent, render, screen } from "@testing-library/react";
import CloseBtn from "./CloseBtn";

describe("CloseBtn", () => {
  test("CloseBtn presentation", () => {
    render(<CloseBtn handleClick={() => {}} />);

    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent("X");
  });

  test("calls handleClick function when clicked", () => {
    const handleClick = jest.fn();

    render(<CloseBtn handleClick={handleClick} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
