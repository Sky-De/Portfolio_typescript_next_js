type CloseBtnProps = {
    handleClick: () => void;
}
const CloseBtn = ({ handleClick }: CloseBtnProps) => {
  return (
    <button onClick={handleClick} className="apply__closeBtn px-2 py-1 my-1 absolute right-4 top-4">
      X
    </button>
  );
}

export default CloseBtn