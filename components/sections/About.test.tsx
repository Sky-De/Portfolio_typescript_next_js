import "framer-motion";
import { About } from "..";
import { customRender, screen } from "@/test-utils";

describe("About section", () => {
  test("About section must render", () => {
    customRender(<About />);
    const aboutSectionElement = screen.getByTestId("about-section");
    expect(aboutSectionElement).toBeInTheDocument();
  });

  test("About section must have span for mobile device with text About", () => {
    customRender(<About />);
    const aboutSpanlement = screen.getByText(/about/i);
    expect(aboutSpanlement).toHaveClass("section__title");
    expect(aboutSpanlement).toBeInTheDocument();
  });

  test("Image must render and as expected", () => {
    customRender(<About />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("width", "150");
    expect(imgElement).toHaveAttribute("height", "150");
  });

  test("About items container must render", () => {
    customRender(<About />);
    const aboutItemsConDivElement = screen.getByTestId("about-items-con");
    expect(aboutItemsConDivElement).toBeInTheDocument();
    expect(aboutItemsConDivElement).toBeInTheDocument();
  });
});
