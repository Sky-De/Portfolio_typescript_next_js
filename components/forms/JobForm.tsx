import Input, { CheckBox } from "./Input";

const JobForm = () => {
     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       console.log("submited");
     };
  return (
    <form
      className="border border-red-600 flex flex-col justify-center items-center h-full"
      onSubmit={handleSubmit}
    >
      <div className="offer__type flex gap-4">
        <h2>Offer type</h2>
        <Input type="checkbox" label="Part-time" />
        <Input type="checkbox" label="Full-time" />
        <Input type="checkbox" label="Contract" />
      </div>
      <CheckBox label="sdf" />
      <Input type="email" label="email" />
      <Input type="checkbox" label="test" />
      <textarea name="" id=""></textarea>

      <button type="submit" className="border px-3 py-2">
        Send
      </button>
    </form>
  );
}

export default JobForm