import { customRender, screen } from "@/test-utils";
import Learn from "./Learn";

describe("Learn section", () => {
  test("Contact section must render", () => {
    customRender(<Learn />);
    const contactSectionElement = screen.getByTestId("learn-section");
    expect(contactSectionElement).toBeInTheDocument();
  });
  test("Learn section must have span for mobile device with text Learn", () => {
    customRender(<Learn />);
    const learntSpanlement = screen.getByText("Learn");
    expect(learntSpanlement).toHaveClass("section__title");
    expect(learntSpanlement).toBeInTheDocument();
    expect(learntSpanlement.tagName).toBe("SPAN");
  });

  test("Learn section must have h2 heading with text A Journey of Continuous Learning", () => {
    customRender(<Learn />);
    const learntheadingElement = screen.getByRole("heading", { level: 2 });
    expect(learntheadingElement).toBeInTheDocument();
    expect(learntheadingElement).toHaveTextContent(
      "A Journey of Continuous Learning"
    );
  });

  test("Learn section must have P tag with mockLearnSectionDescription text", () => {
    customRender(<Learn />);
    const learnPElement = screen.getByTestId("learn-description");
    expect(learnPElement).toBeInTheDocument();
    expect(learnPElement).toHaveClass("apply__body hidden");
  });

  test("Learn section must have 3x H3 tag", () => {
    customRender(<Learn />);
    const learnListElements = screen.getAllByRole("heading", { level: 3 });
    expect(learnListElements).toHaveLength(3);
    expect(learnListElements[0]).toBeInTheDocument();
    expect(learnListElements[0]).toHaveTextContent("Explore");
    expect(learnListElements[1]).toBeInTheDocument();
    expect(learnListElements[1]).toHaveTextContent("Deepen");
    expect(learnListElements[2]).toBeInTheDocument();
    expect(learnListElements[2]).toHaveTextContent("Master");
  });

  test("Learn section must have div as learnLists con", () => {
    customRender(<Learn />);
    const learnListsConElement = screen.getByTestId("learnLists-con");
    expect(learnListsConElement).toBeInTheDocument();
    expect(learnListsConElement.tagName).toBe("DIV");
  });
});
