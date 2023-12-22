type CloseBtnProps = {
    handleClick: () => void;
}
const CloseBtn = ({ handleClick }: CloseBtnProps) => {
  return (
    <button onClick={handleClick} className="apply__closeBtn px-4 py-2 my-1 rounded-full absolute left-[50%] translate-x-[-50%] top-4">
      X
    </button>
  );
}

export default CloseBtn

// React.FunctionComponent<
//   React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > & {
//     title: string;
//   }
// > = ({ title, ...props }) => <button {...props}>{title}</button>;