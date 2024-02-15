import Mockup from "./Mockup";
import { MockupProps } from "@/types/allTypes";
import { customRender, screen } from "@/test-utils";

const mockMockupProps: MockupProps = {
  laptopCoverUrl: "url1",
  mobileCoverUrl: "url2",
  tableCoverUrl: "url3",
};

describe("Mockup", () => {
  it("section should render", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const sectionElement = screen.getByTestId("section");
    expect(sectionElement).toBeInTheDocument();
  });

  it("svg-mobile should render and has width=375px height=667px", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const mobileSvgElement = screen.getByTestId("svg-mobile");
    expect(mobileSvgElement).toBeInTheDocument();
    expect(mobileSvgElement).toHaveAttribute("width", "375");
    expect(mobileSvgElement).toHaveAttribute("height", "667");
  });

  it("svg-tablet should render and has width=820px height=1180px", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const mobileSvgElement = screen.getByTestId("svg-tablet");
    expect(mobileSvgElement).toBeInTheDocument();
    expect(mobileSvgElement).toHaveAttribute("width", "820");
    expect(mobileSvgElement).toHaveAttribute("height", "1180");
  });

  it("svg-laptop should render and has width=1920px height=869px", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const mobileSvgElement = screen.getByTestId("svg-laptop");
    expect(mobileSvgElement).toBeInTheDocument();
    expect(mobileSvgElement).toHaveAttribute("width", "1920");
    expect(mobileSvgElement).toHaveAttribute("height", "869");
  });
});
