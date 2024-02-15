import Mockup from "./Mockup";
import { MockupProps } from "@/types/allTypes";
import { customRender, fireEvent, screen } from "@/test-utils";
import { store } from "@/redux/store/store";
import { closeImageModel } from "@/redux/features/models/modelSlice";

const mockMockupProps: MockupProps = {
  laptopCoverUrl: "laptop image url",
  mobileCoverUrl: "mobile image url",
  tableCoverUrl: "tablet mobile url",
};

describe("Mockup", () => {
  // it closes model after each test
  beforeEach(() => {
    store.dispatch(closeImageModel());
  });

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
    const tabletSvgElement = screen.getByTestId("svg-tablet");
    expect(tabletSvgElement).toBeInTheDocument();
    expect(tabletSvgElement).toHaveAttribute("width", "820");
    expect(tabletSvgElement).toHaveAttribute("height", "1180");
  });

  it("svg-laptop should render and has width=1920px height=869px", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const laptopSvgElement = screen.getByTestId("svg-laptop");
    expect(laptopSvgElement).toBeInTheDocument();
    expect(laptopSvgElement).toHaveAttribute("width", "1920");
    expect(laptopSvgElement).toHaveAttribute("height", "869");
  });

  it("click on mobile svg must open ImageModel with relevent url", () => {
    customRender(<Mockup {...mockMockupProps} />);
    const mobileSvgElement = screen.getByTestId("svg-mobile");
    expect(store.getState().models.imageModel.isOpen).toBe(false);
    fireEvent.click(mobileSvgElement);
    expect(store.getState().models.imageModel.isOpen).toBe(true);
    expect(store.getState().models.imageModel.imageUrl).toBe(
      mockMockupProps.mobileCoverUrl
    );
  });

  it("click on tablet svg must open ImageModel with relevent url", () => {
    customRender(<Mockup {...mockMockupProps} />);

    const tabletSvgElement = screen.getByTestId("svg-tablet");
    expect(store.getState().models.imageModel.isOpen).toBe(false);
    fireEvent.click(tabletSvgElement);
    expect(store.getState().models.imageModel.isOpen).toBe(true);
    expect(store.getState().models.imageModel.imageUrl).toBe(
      mockMockupProps.tableCoverUrl
    );
  });
  it("click on tablet svg must open ImageModel with relevent url", () => {
    customRender(<Mockup {...mockMockupProps} />);

    const laptopSvgElement = screen.getByTestId("svg-laptop");
    expect(store.getState().models.imageModel.isOpen).toBe(false);
    fireEvent.click(laptopSvgElement);
    expect(store.getState().models.imageModel.isOpen).toBe(true);
    expect(store.getState().models.imageModel.imageUrl).toBe(
      mockMockupProps.laptopCoverUrl
    );
  });
});
