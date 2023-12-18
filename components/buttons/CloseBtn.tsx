type CloseBtnProps = {
    handleClick: () => void;
}
const CloseBtn = ({ handleClick }: CloseBtnProps) => {
  return (
    <button onClick={handleClick} className="bg-bg-primary-dark dark:bg-bg-primary-light text-heading-dark dark:text-heading-light px-2 py-1 my-1">X</button>
  )
}

export default CloseBtn