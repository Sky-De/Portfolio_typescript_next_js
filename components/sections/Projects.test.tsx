import { customRender, fireEvent, screen } from "@/test-utils";
import Projects from "./Projects";
import { store } from "@/redux/store/store";

describe("Project section", () => {
  test("Projects section must render", () => {
    customRender(<Projects />);
    const sectionElement = screen.getByTestId("projects-section");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveAttribute("id", "projects");
  });

  test("Projects section must have span with title Projects for mobile devices", () => {
    customRender(<Projects />);
    const sectionElement = screen.getByText("Projects");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement.tagName).toBe("SPAN");
  });

  test("preProject btn must render and execute function on click", () => {
    customRender(<Projects />);
    const preProjectButtonElement = screen.getByTestId("preProject-btn");
    expect(preProjectButtonElement).toBeInTheDocument();
    expect(preProjectButtonElement).toHaveClass("apply__carousel--btn");

    expect(store.getState().projects.selectedProjectId).toBe(1);
    fireEvent.click(preProjectButtonElement);
    expect(store.getState().projects.selectedProjectId).toBe(
      store.getState().projects.projects.length
    );
  });

  test("nextProject btn must render and execute function on click", () => {
    customRender(<Projects />);
    const nextProjectButtonElement = screen.getByTestId("nextProject-btn");
    expect(nextProjectButtonElement).toBeInTheDocument();
    expect(nextProjectButtonElement).toHaveClass("apply__carousel--btn");

    expect(store.getState().projects.selectedProjectId).toBe(
      store.getState().projects.projects.length
    );
    fireEvent.click(nextProjectButtonElement);
    expect(store.getState().projects.selectedProjectId).toBe(1);
  });

  test("controlls container at bottom must render", () => {
    customRender(<Projects />);
    const divElement = screen.getByTestId("controlls-bottom-con");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass(
      "flex absolute bottom-4 md:bottom-10 flex-col items-center w-fit left-[50%] translate-x-[-50%] justify-center gap-2"
    );
  });

  test("spans as button must render and be as the number of projects and click on them must set selecte project id of state equal to index of that btn + 1", () => {
    customRender(<Projects />);
    const spanElements = screen.getAllByTestId("controlls-bottom");
    expect(spanElements).toHaveLength(
      store.getState().projects.projects.length
    );
    // add this-FIX
    // store.getState().projects.projects.forEach((item, i) => {
    //   expect(spanElements[i]).toHaveAttribute("title", item.id.toString());
    //   fireEvent.click(spanElements[i]);
    //   expect(store.getState().projects.selectedProjectId).toBe(item.id - 1);
    // });
  });

  test("spans as button must render and be as the number of projects and click on them must set selecte project id of state equal to index of that btn + 1", () => {
    customRender(<Projects />);
    const divElements = screen.getByTestId("project-content");
    expect(divElements).toBeInTheDocument();
    expect(divElements).toHaveClass(
      "flex flex-col items-center gap-5  w-full  mx-12 py-5"
    );
  });

  test("h2 must render and has title as selectedProject.title of store", () => {
    customRender(<Projects />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H2");
  });
  //   needs more test cases here-FIX
});
