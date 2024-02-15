import { render, screen } from "@testing-library/react";
import LearnItem from "./LearnItem";

const learnItem = "sql";
const mockLearnItemProps = {
  item: "sql",
  index: 2,
};

describe("LearnItem", () => {
  test("learn item must render as li", () => {
    render(<LearnItem {...mockLearnItemProps} />);
    const learnItemElement = screen.getByTestId("learnItem");
    expect(learnItemElement).toBeInTheDocument();
    expect(learnItemElement.tagName).toBe("LI");
  });

  test("learn item must have as item that accepts within props", () => {
    render(<LearnItem {...mockLearnItemProps} />);
    const learnItemElement = screen.getByTestId("learnItem");
    expect(learnItemElement).toHaveTextContent(mockLearnItemProps.item);
  });
});
