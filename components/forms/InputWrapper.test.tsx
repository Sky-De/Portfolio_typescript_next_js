import React from "react";
import { render } from "@testing-library/react";
import InputWrapper from "./InputWrapper";

describe("InputWrapper component", () => {
  const mockTitle = "Test Title";
  it("should render correctly with title", () => {
    const { getByText } = render(
      <InputWrapper title={mockTitle}>
        <div>Test Content</div>
      </InputWrapper>
    );

    const titleElement = getByText(mockTitle);
    const contentElement = getByText("Test Content");

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  it("should render correctly with icon", () => {
    const { getByTestId } = render(
      <InputWrapper title="Test Title" iconClass="bx-icon">
        {/* Replace input with div or span */}
        <div>Test Content</div>
      </InputWrapper>
    );

    const iconElement = getByTestId("input-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("should apply extra styles when provided", () => {
    const { container } = render(
      <InputWrapper title="Test Title" exteraStyle="custom-style">
        <div>Test Content</div>
      </InputWrapper>
    );

    const wrapperElement = container.firstChild;

    expect(wrapperElement).toHaveClass("custom-style");
    expect(wrapperElement).toBeInTheDocument();
  });
});
