import { render, screen } from "@testing-library/react";
import Message from "./Message";
import { MessageType } from "@/types/allTypes";
const mockErrorMessageProps: MessageType = {
  messagge: "this is error",
  type: "error",
};
const mockSuccessMessageProps: MessageType = {
  messagge: "this is success",
  type: "success",
};

describe("LoaderCube", () => {
  // erorr
  it("must be renderd as error with mockErrorMessageProps", () => {
    render(<Message {...mockErrorMessageProps} />);
    // div
    const messageDivElement = screen.getByTestId("messageCon");
    expect(messageDivElement).toBeInTheDocument();
    expect(messageDivElement.tagName).toBe("DIV");
    expect(messageDivElement).toHaveClass("bg-red-500 border-red-500 error");
    // i
    const messageIElement = screen.getByTestId("messageIcon");
    expect(messageIElement).toBeInTheDocument();
    expect(messageIElement.tagName).toBe("I");
    expect(messageIElement).toHaveClass("bx bxs-error-alt");
    // p
    const messagePElement = screen.getByTestId("p-message");
    expect(messagePElement).toBeInTheDocument();
    expect(messagePElement.tagName).toBe("P");
    expect(messagePElement).toHaveTextContent(mockErrorMessageProps.messagge);
  });

  // success
  it("must be renderd as success with mockSuccessMessageProps", () => {
    render(<Message {...mockSuccessMessageProps} />);
    // div
    const messageDivElement = screen.getByTestId("messageCon");
    expect(messageDivElement).toBeInTheDocument();
    expect(messageDivElement.tagName).toBe("DIV");
    expect(messageDivElement).toHaveClass(
      "bg-green-500 border-green-500 success"
    );
    // i
    const messageIElement = screen.getByTestId("messageIcon");
    expect(messageIElement).toBeInTheDocument();
    expect(messageIElement.tagName).toBe("I");
    expect(messageIElement).toHaveClass("bx bx-check");
    // p
    const messagePElement = screen.getByTestId("p-message");
    expect(messagePElement).toBeInTheDocument();
    expect(messagePElement.tagName).toBe("P");
    expect(messagePElement).toHaveTextContent(mockSuccessMessageProps.messagge);
  });
});
