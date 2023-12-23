import Input, { CheckBox } from "./Input";

const JobForm = () => {
     
  return (
    <form className="flex flex-col justify-center items-center">
      <h2 className="border-b border-b-red-700 my-2">Offer Form</h2>
      <Input type="text" label="position" />
      <div className="flex flex-col items-start w-ful">
        <p className="text-stepColor">type</p>
        <div className="flex gap-4">
          <CheckBox label="Part-time" />
          <CheckBox label="Full-time" />
          <CheckBox label="Contract" />
        </div>
        <div>
          <Input type="number" label="min-usd"/>
          <Input type="number" label="max-usd"/>
        </div>
      </div>
    </form>
  );
}

export default JobForm