import { store } from "@/redux/store/store";
import ContactModel from "./ContactModel";
import { customRender, fireEvent, screen, waitFor } from "@/test-utils";
import {
  closeImageModel,
  openContatctModel,
} from "@/redux/features/models/modelSlice";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("ContactModel", () => {
  it("contactModel must be renderd", async () => {
    customRender(<ContactModel />);
    const divElement = screen.getByTestId("contactModel");
    expect(store.getState().models.contactModel.isOpen).toBe(false);
    expect(divElement).toBeInTheDocument();
    // opens contact model
    act(() => {
      store.dispatch(openContatctModel());
      expect(store.getState().models.contactModel.isOpen).toBe(true);
    });

    fireEvent.click(screen.getByTestId("contactModel"));
    expect(store.getState().models.contactModel.isOpen).toBe(false);
  });
});
