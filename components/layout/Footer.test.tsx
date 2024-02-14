import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should render footer", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("should render links to LinkedIn, email, and GitHub", () => {
    render(<Footer />);

    const footerItemElements = screen.queryAllByRole("link");

    expect(footerItemElements[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/sky-de-763248228"
    );
    expect(footerItemElements[0]).toHaveAttribute(
      "aria-label",
      "linkedin-link"
    );

    expect(footerItemElements[1]).toHaveAttribute(
      "href",
      "mailto:sky.de1991@gmail.com"
    );
    expect(footerItemElements[1]).toHaveAttribute("aria-label", "email-link");

    expect(footerItemElements[2]).toHaveAttribute(
      "href",
      "https://github.com/Sky-De"
    );
    expect(footerItemElements[2]).toHaveAttribute("aria-label", "github-link");
  });

  it("should render icons of LinkedIn, email, and GitHub", () => {
    render(<Footer />);

    const footerItemElements = screen.queryAllByTestId("footer-icon");
    expect(footerItemElements[0]).toHaveClass(
      "apply__footer--item bx bxl-linkedin-square"
    );
    expect(footerItemElements[1]).toHaveClass(
      "apply__footer--item bx bxl-google"
    );
    expect(footerItemElements[2]).toHaveClass(
      "apply__footer--item bx bxl-github"
    );
  });
});
