import { render, screen, waitFor } from "@testing-library/react";
import AboutItems from "./AboutItems";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("AboutItem titles", () => {
  test("web development journey H3 title render and onClick on that must change classes", async () => {
    render(<AboutItems />);

    const aboutTitle1 = screen.getByRole("heading", {
      name: /web development journey/i,
    });

    expect(aboutTitle1).toBeInTheDocument();
    expect(aboutTitle1.tagName).toBe("H3");
    expect(aboutTitle1).toHaveClass(
      "text-stepColor border-b-stepColor font-bold"
    );
  });

  test("online work H3 title render and onClick on that must change classes", async () => {
    render(<AboutItems />);

    const aboutTitle2 = screen.getByRole("heading", { name: /online work/i });
    expect(aboutTitle2).toBeInTheDocument();
    expect(aboutTitle2.tagName).toBe("H3");

    // onClick test
    await act(async () => {
      userEvent.click(aboutTitle2);
    });

    await waitFor(() => {
      const aboutTitle2_afterClick = screen.getByRole("heading", {
        name: /online work/i,
      });
      expect(aboutTitle2_afterClick).toHaveClass(
        "text-stepColor border-b-stepColor font-bold"
      );
    });
  });

  test("abilities H3 title render and onClick on that must change classes", async () => {
    render(<AboutItems />);

    const aboutTitle3 = screen.getByRole("heading", { name: /abilities/i });
    expect(aboutTitle3).toBeInTheDocument();
    expect(aboutTitle3.tagName).toBe("H3");

    // onClick test
    await act(async () => {
      userEvent.click(aboutTitle3);
    });

    await waitFor(() => {
      const aboutTitle3_afterClick = screen.getByRole("heading", {
        name: /abilities/i,
      });
      expect(aboutTitle3_afterClick).toHaveClass(
        "text-stepColor border-b-stepColor font-bold"
      );
    });
  });
});

describe("AboutItem list", () => {
  test("Ul render ", async () => {
    render(<AboutItems />);
    const aboutItemList = screen.getByRole("list");

    expect(aboutItemList).toBeInTheDocument();
    expect(aboutItemList.tagName).toBe("UL");
    expect(aboutItemList).toHaveClass(
      "list-disc flex flex-col gap-[1px] md:gap-3 sm:my-1 lg:my-3 h-[40svh] tall:mt-8"
    );

    const aboutItemListItems = screen.queryAllByRole("listitem");
    expect(aboutItemListItems.length).toBeGreaterThan(3);
  });
});
