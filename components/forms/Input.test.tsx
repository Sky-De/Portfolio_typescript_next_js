import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CheckBox } from "./Input";

describe("CheckBox component", () => {
  it("should render correctly", () => {
    const { getByText, getByRole } = render(
      <CheckBox label="Test Checkbox" checkBoxChangeHandler={() => {}} />
    );

    const labelElement = getByText("Test Checkbox");
    const checkboxElement = getByRole("checkbox");

    expect(labelElement).toBeInTheDocument();
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).not.toBeChecked();
  });

  it("should call checkBoxChangeHandler when checkbox is clicked", () => {
    const mockChangeHandler = jest.fn();
    const { getByRole } = render(
      <CheckBox
        label="Test Checkbox"
        checkBoxChangeHandler={mockChangeHandler}
      />
    );

    const checkboxElement = getByRole("checkbox");

    fireEvent.click(checkboxElement);

    expect(mockChangeHandler).toHaveBeenCalledTimes(1);
  });

  it("should toggle checkbox state when clicked", () => {
    const { getByRole } = render(
      <CheckBox label="Test Checkbox" checkBoxChangeHandler={() => {}} />
    );

    const checkboxElement = getByRole("checkbox");

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).not.toBeChecked();
  });
});
