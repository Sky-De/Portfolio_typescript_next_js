import { customRender, screen } from "@/test-utils";
import Skills from "./Skills";
import { store } from "@/redux/store/store";
import { setActiveSkill } from "@/redux/features/skill/skillSlice";
import { act } from "react-dom/test-utils";

describe("Skills section", () => {
  test("skill section must render", () => {
    customRender(<Skills />);
    const sectionElement = screen.getByTestId("skill-secion");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement.tagName).toBe("SECTION");
  });
  test("Q-intro section must have span with title Skills for mobile devices", () => {
    customRender(<Skills />);
    const spanElement = screen.getByText("Skills");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("section__title");
    expect(spanElement.tagName).toBe("SPAN");
  });
  test("BrainOfSkills-con must render", () => {
    customRender(<Skills />);
    const divElement = screen.getByTestId("BrainOfSkills-con");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(
      "skills flex flex-col lg:flex-row-reverse tall:flex-col items-center px-4 w-full pt-6 lg:pt-0 gap-2"
    );
    expect(divElement.tagName).toBe("DIV");
  });
  test("skillShow-con must render", () => {
    customRender(<Skills />);
    const divElement = screen.getByTestId("skillShow");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(
      "skillShow w-full h-[250px] lg:h-auto my-auto"
    );
    expect(divElement.tagName).toBe("DIV");
  });

  test("skills show case must render after clicking on other skill", () => {
    customRender(<Skills />);

    expect(store.getState().skill.currentSkill).toBe("SKY");
    act(() => {
      store.dispatch(setActiveSkill("JEST"));
    });
    expect(store.getState().skill.currentSkill).toBe("JEST");
    const headingElement = screen.getByTestId("skillTitle");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H2");
    expect(headingElement).toHaveTextContent(
      store.getState().skill.currentSkillData.title
    );
  });

  test("skills show case must render ul", () => {
    customRender(<Skills />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    expect(listElement.tagName).toBe("UL");
  });

  test("ul of skills show case must have list items with number of current skill features lenght", () => {
    customRender(<Skills />);
    const listitemElements = screen.getAllByRole("listitem");
    listitemElements.forEach((item, index) => {
      expect(listitemElements[index]).toBeInTheDocument();
    });
    store.getState().skill.currentSkillData.features.forEach((item, index) => {
      expect(listitemElements[index]).toHaveTextContent(item);
    });
    expect(listitemElements).toHaveLength(
      store.getState().skill.currentSkillData.features.length
    );
  });
});
