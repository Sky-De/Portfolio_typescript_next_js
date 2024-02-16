import { store } from "@/redux/store/store";
import BrainOfSkill from "./BrainOfSkills";
import { customRender, fireEvent, screen } from "@/test-utils";
import { setActiveSkill } from "@/redux/features/skill/skillSlice";
import { act } from "react-dom/test-utils";

describe("brainOfSkills", () => {
  afterEach(() => {
    act(() => {
      store.dispatch(setActiveSkill("SKY"));
    });
  });
  // container-SVG
  test("render of SVG con and it must has width=380.628 and height=361.182", () => {
    customRender(<BrainOfSkill />);
    const conSvgElement = screen.getByTestId("con-svg");
    expect(conSvgElement).toBeInTheDocument();
    expect(conSvgElement).toHaveAttribute("width", "380.628");
    expect(conSvgElement).toHaveAttribute("height", "361.182");
  });
  // container-circle
  test("render of js-circle and onClick it must change state of activeSkill to JS", () => {
    customRender(<BrainOfSkill />);
    const jsCircleElement = screen.getByTestId("js-circle");
    expect(jsCircleElement).toBeInTheDocument();
    fireEvent.click(jsCircleElement);
    expect(store.getState().skill.currentSkill).toBe("JS");
  });
  // webpack-circle
  test("render of webpack-circle and onClick it must change state of activeSkill to WEBPACK", () => {
    customRender(<BrainOfSkill />);
    const webpackCircleElement = screen.getByTestId("webpack-circle");
    expect(webpackCircleElement).toBeInTheDocument();
    fireEvent.click(webpackCircleElement);
    expect(store.getState().skill.currentSkill).toBe("WEBPACK");
  });

  test("render of react-circle and onClick it must change state of activeSkill to REACT", () => {
    customRender(<BrainOfSkill />);
    const reactCircleElement = screen.getByTestId("react-circle");
    expect(reactCircleElement).toBeInTheDocument();
    fireEvent.click(reactCircleElement);
    expect(store.getState().skill.currentSkill).toBe("REACT");
  });

  test("render of tailwind-circle and onClick it must change state of activeSkill to TAILWIND", () => {
    customRender(<BrainOfSkill />);
    const tailwindCircleElement = screen.getByTestId("tailwind-circle");
    expect(tailwindCircleElement).toBeInTheDocument();
    fireEvent.click(tailwindCircleElement);
    expect(store.getState().skill.currentSkill).toBe("TAILWIND");
  });

  test("render of ae-circle and onClick it must change state of activeSkill to AE", () => {
    customRender(<BrainOfSkill />);
    const aeCircleElement = screen.getByTestId("ae-circle");
    expect(aeCircleElement).toBeInTheDocument();
    fireEvent.click(aeCircleElement);
    expect(store.getState().skill.currentSkill).toBe("AE");
  });

  test("render of html-circle and onClick it must change state of activeSkill to HTML", () => {
    customRender(<BrainOfSkill />);
    const htmlCircleElement = screen.getByTestId("html-circle");
    expect(htmlCircleElement).toBeInTheDocument();
    fireEvent.click(htmlCircleElement);
    expect(store.getState().skill.currentSkill).toBe("HTML");
  });

  test("render of css-circle and onClick it must change state of activeSkill to CSS", () => {
    customRender(<BrainOfSkill />);
    const cssCircleElement = screen.getByTestId("css-circle");
    expect(cssCircleElement).toBeInTheDocument();
    fireEvent.click(cssCircleElement);
    expect(store.getState().skill.currentSkill).toBe("CSS");
  });

  test("render of jest-circle and onClick it must change state of activeSkill to JEST", () => {
    customRender(<BrainOfSkill />);
    const jestCircleElement = screen.getByTestId("jest-circle");
    expect(jestCircleElement).toBeInTheDocument();
    fireEvent.click(jestCircleElement);
    expect(store.getState().skill.currentSkill).toBe("JEST");
  });

  test("render of sass-circle and onClick it must change state of activeSkill to SASS", () => {
    customRender(<BrainOfSkill />);
    const sassCircleElement = screen.getByTestId("sass-circle");
    expect(sassCircleElement).toBeInTheDocument();
    fireEvent.click(sassCircleElement);
    expect(store.getState().skill.currentSkill).toBe("SASS");
  });

  test("render of ai-circle and onClick it must change state of activeSkill to AI", () => {
    customRender(<BrainOfSkill />);
    const aiCircleElement = screen.getByTestId("ai-circle");
    expect(aiCircleElement).toBeInTheDocument();
    fireEvent.click(aiCircleElement);
    expect(store.getState().skill.currentSkill).toBe("AI");
  });

  test("render of xd-circle and onClick it must change state of activeSkill to XD", () => {
    customRender(<BrainOfSkill />);
    const xdCircleElement = screen.getByTestId("xd-circle");
    expect(xdCircleElement).toBeInTheDocument();
    fireEvent.click(xdCircleElement);
    expect(store.getState().skill.currentSkill).toBe("XD");
  });

  test("render of node-circle and onClick it must change state of activeSkill to NODE", () => {
    customRender(<BrainOfSkill />);
    const nodeCircleElement = screen.getByTestId("node-circle");
    expect(nodeCircleElement).toBeInTheDocument();
    fireEvent.click(nodeCircleElement);
    expect(store.getState().skill.currentSkill).toBe("NODE");
  });

  test("render of mongodb-circle and onClick it must change state of activeSkill to MONGODB", () => {
    customRender(<BrainOfSkill />);
    const mongodbCircleElement = screen.getByTestId("mongodb-circle");
    expect(mongodbCircleElement).toBeInTheDocument();
    fireEvent.click(mongodbCircleElement);
    expect(store.getState().skill.currentSkill).toBe("MONGODB");
  });

  test("render of express-circle and onClick it must change state of activeSkill to EXPRESS", () => {
    customRender(<BrainOfSkill />);
    const expressCircleElement = screen.getByTestId("express-circle");
    expect(expressCircleElement).toBeInTheDocument();
    fireEvent.click(expressCircleElement);
    expect(store.getState().skill.currentSkill).toBe("EXPRESS");
  });

  test("render of mui-circle and onClick it must change state of activeSkill to MUI", () => {
    customRender(<BrainOfSkill />);
    const muiCircleElement = screen.getByTestId("mui-circle");
    expect(muiCircleElement).toBeInTheDocument();
    fireEvent.click(muiCircleElement);
    expect(store.getState().skill.currentSkill).toBe("MUI");
  });

  test("render of redux-circle and onClick it must change state of activeSkill to REDUX", () => {
    customRender(<BrainOfSkill />);
    const reduxCircleElement = screen.getByTestId("redux-circle");
    expect(reduxCircleElement).toBeInTheDocument();
    fireEvent.click(reduxCircleElement);
    expect(store.getState().skill.currentSkill).toBe("REDUX");
  });

  test("render of redux-circle and onClick it must change state of activeSkill to REDUX", () => {
    customRender(<BrainOfSkill />);
    const reduxCircleElement = screen.getByTestId("redux-circle");
    expect(reduxCircleElement).toBeInTheDocument();
    fireEvent.click(reduxCircleElement);
    expect(store.getState().skill.currentSkill).toBe("REDUX");
  });

  test("render of git-circle and onClick it must change state of activeSkill to GIT", () => {
    customRender(<BrainOfSkill />);
    const gitCircleElement = screen.getByTestId("git-circle");
    expect(gitCircleElement).toBeInTheDocument();
    fireEvent.click(gitCircleElement);
    expect(store.getState().skill.currentSkill).toBe("GIT");
  });

  test("render of ts-circle and onClick it must change state of activeSkill to TS", () => {
    customRender(<BrainOfSkill />);
    const tsCircleElement = screen.getByTestId("ts-circle");
    expect(tsCircleElement).toBeInTheDocument();
    fireEvent.click(tsCircleElement);
    expect(store.getState().skill.currentSkill).toBe("TS");
  });
});
