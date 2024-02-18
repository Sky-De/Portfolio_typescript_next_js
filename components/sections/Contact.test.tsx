import { customRender, screen } from "@/test-utils";
import { Contact } from "..";

describe("Contact section", () => {
  test("Contact section must render", () => {
    customRender(<Contact />);
    const contactSectionElement = screen.getByTestId("contact-section");
    expect(contactSectionElement).toBeInTheDocument();
  });

  test("Contact section must have span for mobile device with text Contact", () => {
    customRender(<Contact />);
    const contactSpanlement = screen.getByText(/contact/i);
    expect(contactSpanlement).toHaveClass("section__title");
    expect(contactSpanlement).toBeInTheDocument();
    expect(contactSpanlement.tagName).toBe("SPAN");
  });

  test("Image must render and as expected", () => {
    customRender(<Contact />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("width", "200");
    expect(imgElement).toHaveAttribute("height", "200");
    expect(imgElement).toHaveClass("hidden lg:block w-2/3 mx-auto");
  });
});
