import { render, screen } from "@testing-library/react";
import GoogleReCAPTCHA from "./GoogleReCAPTCHA";

test("GoogleReCAPTCHA must have p as descripton and render", () => {
  render(<GoogleReCAPTCHA setCaptcha={() => {}} />);
  const pElement = screen.getByTestId("GoogleReCAPTCHA-description");
  expect(pElement).toBeInTheDocument();
  expect(pElement).toHaveTextContent(
    "Before submitting the form, make sure to verify your information. You will not be able to edit after the verification process."
  );
});
