import { render, screen } from "@testing-library/react";
import AboutItems from "./AboutItems";

test("H3 title must be in document", () => {
  render(<AboutItems />);
  const aboutTitle = screen.getByRole("heading", {
    name: /web development journey/i,
  });
  expect(aboutTitle).toBeInTheDocument();
});
