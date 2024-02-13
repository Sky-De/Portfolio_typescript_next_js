import { customRender } from "@/test-utils";
import ContactFormAction from "./ContactFormAction";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("ContactFormAction", () => {
  const handlePreStep = jest.fn();
  const handleNextStep = jest.fn();
  const handleSubmit = jest.fn();

  describe("BackBtn", () => {
    const mockPropsBackBtn = {
      handlePreStep: handlePreStep,
      handleNextStep: handleNextStep,
      handleSubmit: handleSubmit,
      isLoading: false,
    };
    test("render of backButton", () => {
      customRender(
        <ContactFormAction {...mockPropsBackBtn} captcha={undefined} step={1} />
      );
      const backButton = screen.getByRole("button", { name: "Back" });
      expect(backButton).toBeInTheDocument();
    });

    test("calls handlePreStep function when Back button is clicked", () => {
      customRender(
        <ContactFormAction {...mockPropsBackBtn} captcha={undefined} step={2} />
      );
      const backButton = screen.getByRole("button", { name: "Back" });
      fireEvent.click(backButton);
      expect(handlePreStep).toHaveBeenCalledTimes(1);
    });

    test("disabled backButton when step is 1", () => {
      customRender(
        <ContactFormAction {...mockPropsBackBtn} captcha={undefined} step={1} />
      );
      const backButton = screen.getByText("Back");
      expect(backButton).toBeDisabled();
    });

    test("disabled backButton when captcha exist", () => {
      customRender(
        <ContactFormAction {...mockPropsBackBtn} captcha="done" step={3} />
      );
      const backButton = screen.getByText("Back");
      expect(backButton).toBeDisabled();
    });

    test("backButton should not exist when step is 4", () => {
      customRender(
        <ContactFormAction {...mockPropsBackBtn} captcha="done" step={4} />
      );
      const backButton = screen.queryByText("Back");
      expect(backButton).not.toBeInTheDocument();
    });
  });

  describe("NextBtn", () => {
    const mockPropsNextBtn = {
      handlePreStep: handlePreStep,
      handleNextStep: handleNextStep,
      handleSubmit: handleSubmit,
      isLoading: false,
      captcha: undefined,
    };

    test("render of nextButton", () => {
      customRender(
        <ContactFormAction {...mockPropsNextBtn} step={1} captcha="done" />
      );
      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeInTheDocument();
    });

    test("calls handleNextStep function when Back button is clicked", () => {
      customRender(
        <ContactFormAction {...mockPropsNextBtn} captcha={undefined} step={2} />
      );
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.click(nextButton);
      expect(handleNextStep).toHaveBeenCalledTimes(1);
    });

    test("NextButton must not exist when step is 4", () => {
      customRender(
        <ContactFormAction {...mockPropsNextBtn} captcha="done" step={4} />
      );
      const nextButton = screen.queryByText("Next");
      expect(nextButton).not.toBeInTheDocument();
    });
  });

  describe("SendBtn", () => {
    const mockPropsSendBtn = {
      handlePreStep: handlePreStep,
      handleNextStep: handleNextStep,
      handleSubmit: handleSubmit,
      isLoading: false,
      captcha: undefined,
    };

    test("render of nextButton (should not exist before step 3)", () => {
      customRender(
        <ContactFormAction {...mockPropsSendBtn} step={1} captcha="done" />
      );
      const sendButton = screen.queryByRole("button", { name: "Send" });
      expect(sendButton).not.toBeInTheDocument();
    });

    test("render of nextButton (should exist on step 3) and if captcha={undefined} should be disabled ", () => {
      customRender(
        <ContactFormAction {...mockPropsSendBtn} step={3} captcha={undefined} />
      );
      const sendButton = screen.queryByRole("button", { name: "Send" });
      expect(sendButton).toBeInTheDocument();
      expect(sendButton).toBeDisabled();
    });

    test("calls handleSubmit function when Send button is clicked", () => {
      customRender(
        <ContactFormAction {...mockPropsSendBtn} captcha="done" step={3} />
      );
      const sendButton = screen.getByRole("button", { name: "Send" });
      fireEvent.click(sendButton);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    test("SendButton should not exist when step is > 3", () => {
      customRender(
        <ContactFormAction {...mockPropsSendBtn} captcha="done" step={2} />
      );
      const sendButton = screen.queryByRole("button", { name: "Send" });
      expect(sendButton).not.toBeInTheDocument();
    });
  });

  describe("CloseBtn", () => {
    const mockPropsCloseBtn = {
      handlePreStep: handlePreStep,
      handleNextStep: handleNextStep,
      handleSubmit: handleSubmit,
      isLoading: false,
      captcha: undefined,
    };

    test("render of close Button (should not exist before step 4)", () => {
      customRender(
        <ContactFormAction {...mockPropsCloseBtn} step={3} captcha="done" />
      );
      const sendButton = screen.queryByRole("button", { name: "Close" });
      expect(sendButton).not.toBeInTheDocument();
    });

    test("render of close Button (must exist when step is 4)", () => {
      customRender(
        <ContactFormAction {...mockPropsCloseBtn} step={4} captcha="done" />
      );
      const sendButton = screen.queryByRole("button", { name: "close" });
      expect(sendButton).toBeInTheDocument();
    });
  });
});
