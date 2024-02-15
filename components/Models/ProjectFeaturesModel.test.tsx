import { store } from "@/redux/store/store";
import ContactModel from "./ContactModel";
import { customRender, fireEvent, screen } from "@/test-utils";
import { openfeatureModel } from "@/redux/features/models/modelSlice";
import { act } from "react-dom/test-utils";
import { ProjectFeaturesModel } from "..";

const mockFeatureProps = {
  features: ["feature1", "feature2", "feature3"],
};

describe("Project features model", () => {
  it("contactModel must be renderd", () => {
    customRender(<ProjectFeaturesModel />);
    const divElement = screen.getByTestId("featuresModel");
    expect(divElement).toBeInTheDocument();
  });

  it("click on contactModel must close contactModel", async () => {
    customRender(<ProjectFeaturesModel />);
    expect(store.getState().models.featuresModel.isOpen).toBe(false);
    // opens contact model
    act(() => {
      store.dispatch(openfeatureModel({ ...mockFeatureProps }));
      expect(store.getState().models.featuresModel.isOpen).toBe(true);
      expect(store.getState().models.featuresModel.features).toHaveLength(3);
    });

    fireEvent.click(screen.getByTestId("featuresModel"));
    expect(store.getState().models.featuresModel.isOpen).toBe(false);
  });
});
