import { render, screen, waitFor } from "@testing-library/react";
import AboutItems from "./AboutItems";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("web development journey H3 title render", async () => {
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

  await act(async () => {
    userEvent.click(aboutTitle2);
  });

  // Wait for the next update of the component
  await waitFor(() => {
    const aboutTitle2_afterClick = screen.getByRole("heading", {
      name: /online work/i,
    });
    // Ensure the class is applied after state update
    expect(aboutTitle2_afterClick).toHaveClass(
      "text-stepColor border-b-stepColor font-bold"
    );
  });
});

test("abilities H3 title render", () => {
  render(<AboutItems />);

  const aboutTitle3 = screen.getByRole("heading", { name: /abilities/i });
  expect(aboutTitle3).toBeInTheDocument();
  expect(aboutTitle3.tagName).toBe("H3");
});
