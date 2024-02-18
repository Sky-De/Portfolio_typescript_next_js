import { customRender, screen } from "@/test-utils";
import QuickIntro from "./QuickIntro";
import { QI_VIDEO_URL } from "@/constants/videos";

describe("QuickIntro secton", () => {
  test("quick intro section must render", () => {
    customRender(<QuickIntro />);
    const qaSectionElement = screen.getByTestId("quickIntro-section");
    expect(qaSectionElement).toBeInTheDocument();
    expect(qaSectionElement.tagName).toBe("SECTION");
  });

  test("Q-intro section must have span with title Projects for mobile devices", () => {
    customRender(<QuickIntro />);
    const spanElement = screen.getByText("Q-Intro");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement.tagName).toBe("SPAN");
  });

  test("Q-intro section must have H3", () => {
    customRender(<QuickIntro />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H3");
  });

  test("Q-intro section must have video element with QI_VIDEO_URL", () => {
    customRender(<QuickIntro />);
    const videoElement = screen.getByTestId("qIntro-video");
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute("src", QI_VIDEO_URL);
    expect(videoElement).toHaveAttribute("controls");
    expect(videoElement).toHaveAttribute("poster", "./vidPoster.png");
  });
});
