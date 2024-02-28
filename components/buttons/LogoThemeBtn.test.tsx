import { store } from "@/redux/store/store";
import { LogoThemeBtn } from "./LogoThemeBtn";
import { customRender, fireEvent, renderHook, screen } from "@/test-utils";
import { ThemeProvider, useTheme } from "next-themes";

// logo changed/ add new tests but do not remove this test / just comment them out for the case
// that we backed to pre design

describe("LogoThemeBtn", () => {
  test("render of H1 element", () => {
    customRender(<LogoThemeBtn type="desktop" />);
    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent(/de signvelop/i);
  });

  test("render of themeIcon element and toggle classes after clicked on h1 element", () => {
    customRender(<LogoThemeBtn type="desktop" />);
    const themeIcon = screen.getByTestId("theme-icon");
    const h1Element = screen.getByRole("heading", { level: 1 });

    expect(themeIcon).toBeInTheDocument();
    expect(themeIcon).toHaveClass("animate-moonAnimation bxs-moon");

    fireEvent.click(h1Element);
    fireEvent.click(h1Element);
    expect(themeIcon).toHaveClass(" animate-sunAnimation bx-sun");
  });

  //   test("theme initially must be system", async () => {
  //     const { result } = renderHook(() => useTheme(), {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider themes={["light", "dark", "system"]}>
  //           {children}
  //         </ThemeProvider>
  //       ),
  //     });
  //     expect(result.current.theme).toBe("system");
  //   });
  //   ***Add tests for change theme after click and use afterEach...***
});
