
type MessageType = {
    type: "error" | "success";
    messagge: string;
}
const Message = (props: MessageType) => {
  return (
    <div
      className={`bg-bg-primary-light message rounded-sm w-2/3 lg:w-1/2 flex items-center justify-center p-2 gap-2 m-auto border-2 ${
        props.type === "success"
          ? "text-green-500 border-green-500 success"
          : "text-red-500 border-red-500 error"
      }`}
    >
      <i
        className={`bx ${
          props.type === "success" ? "bx-check" : "bxs-error-alt"  
        }`}
      ></i>
      <p className={``}>{props.messagge}</p>
    </div>
  );
}

export default Message;