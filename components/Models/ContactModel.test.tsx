import { store } from "@/redux/store/store";
import ContactModel from "./ContactModel";
import { customRender, fireEvent, screen, waitFor } from "@/test-utils";
import { openContatctModel } from "@/redux/features/models/modelSlice";
import { act } from "react-dom/test-utils";

describe("ContactModel", () => {
  it("contactModel must be renderd", () => {
    customRender(<ContactModel />);
    const divElement = screen.getByTestId("contactModel");
    expect(divElement).toBeInTheDocument();
  });

  it("click on contactModel must close contactModel", async () => {
    customRender(<ContactModel />);
    expect(store.getState().models.contactModel.isOpen).toBe(false);
    // opens contact model
    act(() => {
      store.dispatch(openContatctModel());
      expect(store.getState().models.contactModel.isOpen).toBe(true);
    });

    fireEvent.click(screen.getByTestId("contactModel"));
    expect(store.getState().models.contactModel.isOpen).toBe(false);
  });
});
