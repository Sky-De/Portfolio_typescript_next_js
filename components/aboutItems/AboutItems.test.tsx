import { render, screen } from "@testing-library/react";
import AboutItems from "./AboutItems";

test("web development journey H3 title render", () => {
  render(<AboutItems />);

  const aboutTitle1 = screen.getByRole("heading", {
    name: /web development journey/i,
  });
  expect(aboutTitle1).toBeInTheDocument();
  expect(aboutTitle1.tagName).toBe("H3");
});

test("online work H3 title render", async () => {
  render(<AboutItems />);

  const aboutTitle2 = screen.getByRole("heading", { name: /online work/i });
  expect(aboutTitle2).toBeInTheDocument();
  expect(aboutTitle2.tagName).toBe("H3");
});

test("abilities H3 title render", () => {
  render(<AboutItems />);

  const aboutTitle3 = screen.getByRole("heading", { name: /abilities/i });
  expect(aboutTitle3).toBeInTheDocument();
  expect(aboutTitle3.tagName).toBe("H3");
});
