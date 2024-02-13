import CallToActionBtn from "./CallToActionBtn";
import { store } from "../../redux/store/store";
import { fireEvent } from "@testing-library/react";
import { customRender, screen } from "@/test-utils";

describe("callToActionBtn", () => {
  test("click on callToActionBtn must change state of store(isOpen to true)", () => {
    customRender(<CallToActionBtn label="contact" />);

    const callToActionBtn = screen.getByRole("button");
    fireEvent.click(callToActionBtn);
    expect(store.getState().models.contactModel.isOpen).toBe(true);
  });

  test("button displays correct label", () => {
    const label = "contact";
    customRender(<CallToActionBtn label={label} />);
    const callToActionBtn = screen.getByRole("button");
    expect(callToActionBtn).toHaveTextContent(label.toUpperCase());
  });
});
