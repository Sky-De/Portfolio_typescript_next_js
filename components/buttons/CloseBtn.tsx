type CloseBtnProps = {
    handleClick: () => void;
}
const CloseBtn = ({ handleClick }: CloseBtnProps) => {
  return (
    <button onClick={handleClick} className="apply__closeBtn px-2 py-1 my-1">
      X
    </button>
  );
}

export default CloseBtn