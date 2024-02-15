import { render } from "@testing-library/react";
import LoaderCube from "./LoaderCube";

describe("LoaderCube", () => {
  it("must be renderd", () => {
    render(<LoaderCube />);
    const loaderConDivElement = document.querySelector(".loader");
    expect(loaderConDivElement).toBeInTheDocument();
    expect(loaderConDivElement?.tagName).toBe("DIV");
  });

  it("must be renderd 7 div in loader div and all of them must be div tag", () => {
    render(<LoaderCube />);
    const loaderItemDivElement = document.querySelectorAll(".loader-square");
    expect(loaderItemDivElement).toHaveLength(7);
    expect(loaderItemDivElement[0].tagName).toBe("DIV");
    expect(loaderItemDivElement[1].tagName).toBe("DIV");
    expect(loaderItemDivElement[2].tagName).toBe("DIV");
    expect(loaderItemDivElement[3].tagName).toBe("DIV");
    expect(loaderItemDivElement[4].tagName).toBe("DIV");
    expect(loaderItemDivElement[5].tagName).toBe("DIV");
    expect(loaderItemDivElement[6].tagName).toBe("DIV");
  });
});
