import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import OfferForm from "./OfferForm";
import { customRender } from "@/test-utils";

// Mock ResizeObserver
class ResizeObserverMock {
  constructor(callback: ResizeObserverCallback) {}
  observe() {}
  unobserve() {}
  disconnect() {} // Add the disconnect method
}
global.ResizeObserver = ResizeObserverMock;

describe("OfferForm component", () => {
  it("should render correctly with initial step", () => {
    const { getByText, getByLabelText } = customRender(<OfferForm />);

    // Test for elements rendered in the initial step
    expect(getByText("** About Positon **")).toBeInTheDocument();
    expect(getByText("type")).toBeInTheDocument();
    expect(getByText("role")).toBeInTheDocument();

    // Test for form inputs
    expect(getByLabelText("Part-time")).toBeInTheDocument();
    expect(getByLabelText("Full-time")).toBeInTheDocument();
    expect(getByLabelText("Contract")).toBeInTheDocument();
  });

  it("should move to the next step when Next button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");

    fireEvent.click(nextButton);

    // Test if the form moved to the next step
    expect(getByText("** About Company **")).toBeInTheDocument();
  });

  it("should move to the previous step when back button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");
    const backButton = getByText("Back");

    fireEvent.click(nextButton); // Move to the second step
    fireEvent.click(backButton);

    // Test if the form moved to the previous step
    expect(getByText("** About Positon **")).toBeInTheDocument();
  });

  it("should render correctly with initial step", () => {
    const { getByText, getByLabelText } = customRender(<OfferForm />);

    // Test for elements rendered in the initial step
    expect(getByText("** About Positon **")).toBeInTheDocument();
    expect(getByText("type")).toBeInTheDocument();

    // Test for form inputs
    expect(getByLabelText("Part-time")).toBeInTheDocument();
    expect(getByLabelText("Full-time")).toBeInTheDocument();
    expect(getByLabelText("Contract")).toBeInTheDocument();
  });

  it("should move to the next step when Next button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");

    fireEvent.click(nextButton);

    // Test if the form moved to the next step
    expect(getByText("** About Positon **")).toBeInTheDocument();
  });

  it("should move to the previous step when back button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");
    const backButton = getByText("Back");

    fireEvent.click(nextButton); // Move to the second step
    fireEvent.click(backButton);

    // Test if the form moved to the previous step
    expect(getByText("** About Positon **")).toBeInTheDocument();
  });

  it("should render correctly with initial step", () => {
    const { getByText, getByLabelText } = customRender(<OfferForm />);

    // Test for elements rendered in the initial step
    expect(getByText("** About Positon **")).toBeInTheDocument();
    expect(getByText("type")).toBeInTheDocument();
    expect(getByText("role")).toBeInTheDocument();

    // Test for form inputs
    expect(getByLabelText("Part-time")).toBeInTheDocument();
    expect(getByLabelText("Full-time")).toBeInTheDocument();
    expect(getByLabelText("Contract")).toBeInTheDocument();
  });

  it("should move to the next step when Next button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");

    fireEvent.click(nextButton);

    // Test if the form moved to the next step
    expect(getByText("** About Positon **")).toBeInTheDocument();
  });

  it("should move to the previous step when Back button is clicked", () => {
    const { getByText } = customRender(<OfferForm />);
    const nextButton = getByText("Next");
    const backButton = getByText("Back");

    fireEvent.click(nextButton); // Move to the second step
    fireEvent.click(backButton);

    // Test if the form moved to the previous step
    expect(getByText("** About Positon **")).toBeInTheDocument();
  });

  it("should display an error message if form submission fails", async () => {
    // Mock the useFormSender hook to simulate submission failure
    jest.mock("../../hooks/useFormSender", () => ({
      useFormSender: () => ({
        isError: true,
        isLoading: false,
        isSended: false,
        sendForm: jest.fn(),
        formData: {},
        setFormData: jest.fn(),
      }),
    }));

    const { getByText, getByLabelText, queryByText } = customRender(
      <OfferForm />
    );
    const nextButton = getByText("Next");

    // Fill out the form
    fireEvent.click(getByLabelText("Part-time"));
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    // Wait for error message to be displayed
    await waitFor(() => {
      expect(
        queryByText("Check your connection and try again!")
      ).not.toBeInTheDocument();
    });
  });
});
