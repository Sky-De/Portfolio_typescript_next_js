import { render, screen } from "@testing-library/react";
import TextMarker from "./TextMarker";

describe("TextMarker", () => {
  test("renders without crashing", () => {
    render(<TextMarker text="Test text" />);
  });

  test("renders text correctly", () => {
    render(<TextMarker text="Test text" />);
    expect(screen.getAllByTestId("textMarkerSpan")[0]).toBeInTheDocument();
  });

  test("renders words starting with '@' as strong elements", () => {
    render(<TextMarker text="@Important word" />);
    expect(screen.getAllByTestId("textMarkerStrong")[0].tagName).toBe("STRONG");
  });
});
