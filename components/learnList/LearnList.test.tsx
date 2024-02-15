import { render, screen } from "@testing-library/react";
import LearnList from "./LearnList";

const mockLearnListProps = {
  title: "master",
  learnListItems: [],
};
describe("Learn list", () => {
  it("must be render as secton to wrap all other elements", () => {
    render(<LearnList {...mockLearnListProps} />);
    const sectionElement = screen.getByTestId("learnListSection");
    expect(sectionElement).toBeInTheDocument();
  });
  it("must be render as unorderd list", () => {
    render(<LearnList {...mockLearnListProps} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("list must have h3 tag with title equal with title of props", () => {
    render(<LearnList {...mockLearnListProps} />);
    const h3Element = screen.getByRole("heading");
    expect(h3Element).toBeInTheDocument();
    expect(h3Element).toHaveTextContent(mockLearnListProps.title);
    expect(h3Element.tagName).toBe("H3");
  });
});
