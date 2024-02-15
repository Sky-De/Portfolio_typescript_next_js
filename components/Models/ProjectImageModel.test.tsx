import { store } from "@/redux/store/store";
import { customRender, fireEvent, screen } from "@/test-utils";
import { openImageModel } from "@/redux/features/models/modelSlice";
import { act } from "react-dom/test-utils";
import { ProjectImageModel } from "..";

const mockProjectImageUrl = "sample Project Image Url";

describe("Project features model", () => {
  it("projectImageModel must be renderd", () => {
    customRender(<ProjectImageModel />);
    const divElement = screen.getByTestId("projectImageModel");
    expect(divElement).toBeInTheDocument();
  });

  it("click on projectImageModel must close projectImageModel", async () => {
    customRender(<ProjectImageModel />);
    expect(store.getState().models.imageModel.isOpen).toBe(false);
    // opens projectImageModel model
    act(() => {
      store.dispatch(openImageModel({ imageUrl: mockProjectImageUrl }));
      expect(store.getState().models.imageModel.isOpen).toBe(true);
      expect(store.getState().models.imageModel.imageUrl).toBe(
        mockProjectImageUrl
      );
    });

    fireEvent.click(screen.getByTestId("projectImageModel"));
    expect(store.getState().models.imageModel.isOpen).toBe(false);
  });

  it("image must be rendered", () => {
    customRender(<ProjectImageModel />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    act(() => {
      store.dispatch(openImageModel({ imageUrl: mockProjectImageUrl }));
    });
    expect(imageElement).toHaveAttribute("src", mockProjectImageUrl);
  });
});
