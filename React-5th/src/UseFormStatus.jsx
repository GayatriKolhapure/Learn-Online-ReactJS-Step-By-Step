import { useFormStatus } from "react-dom";

const UseFormStatus = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  };
  function CustomForm() {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
      </>
    );
  }
  return (
    <>
      <h2>useFormStatus Hook in React JS 19</h2>
      <form action={handleSubmit}>
        <CustomForm />
      </form>
    </>
  );
};
export default UseFormStatus;
