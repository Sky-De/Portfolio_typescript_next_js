import { render, screen } from "@testing-library/react";
import ContactItem from "./ContactItem";
import { customRender } from "@/test-utils";

const mockData = {
  iconClass: "bx",
  title: "item",
  link: "url",
  delay: 1,
  areaTitle: "item",
};

describe("ContactItem", () => {
  test("List item must be rendered", () => {
    customRender(<ContactItem {...mockData} />);
    const listItemElement = screen.getByRole("listitem");
    expect(listItemElement).toBeInTheDocument();
  });

  test("Link of contact must be rendered and have href attribute and name and title ", () => {
    customRender(<ContactItem {...mockData} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockData.link);
    expect(linkElement).toHaveAttribute("title", mockData.areaTitle);
    expect(linkElement.textContent).toBe(mockData.title);
  });

  test("i element must render and have iconClass as class", () => {
    customRender(<ContactItem {...mockData} />);
    const iElement = screen.getByTestId("contact-item-icon");
    expect(iElement).toBeInTheDocument();
    expect(iElement).toHaveClass(mockData.iconClass);
  });
});
