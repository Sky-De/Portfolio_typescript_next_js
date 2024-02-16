import { getAllByTestId, render, screen } from "@testing-library/react";
import Stepper from "./Stepper";

describe("Stepper", () => {
  test("renders without crashing", () => {
    render(<Stepper isDone={false} step={1} />);
    const divStepperConElement = screen.getByTestId("stepper");
    expect(divStepperConElement).toBeInTheDocument();
    expect(divStepperConElement).toHaveClass(
      "steps stepper pb-6 apply__dashBorder--bot"
    );
  });

  test("renders correct step numbers", () => {
    render(<Stepper step={1} isDone={false} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders correct step icons", () => {
    render(<Stepper step={4} isDone={true} />);
    const iconsArr = screen.getAllByTestId("check-icon");

    expect(iconsArr[0]).toBeInTheDocument();
    expect(iconsArr[1]).toBeInTheDocument();
    expect(iconsArr[2]).toBeInTheDocument();
  });

  test("renders correct apply__stepperTitle", () => {
    render(<Stepper step={3} isDone={false} />);
    expect(screen.getByText("POSITION")).toHaveClass("apply__stepperTitle");
    expect(screen.getByText("COMPANY")).toHaveClass("apply__stepperTitle");
  });

  test("renders correct stepper titles", () => {
    render(<Stepper step={1} isDone={false} />);
    expect(screen.getByText("POSITION")).toBeInTheDocument();
    expect(screen.getByText("COMPANY")).toBeInTheDocument();
    expect(screen.getByText("SUBMIT")).toBeInTheDocument();
  });

  test("renders correct check icon color for completed steps", () => {
    render(<Stepper step={3} isDone={true} />);
    const iconsArr = screen.getAllByTestId("check-icon");

    expect(iconsArr[0]).toHaveClass("bx bx-check");
    expect(iconsArr[1]).toHaveClass("bx bx-check");
  });
});
