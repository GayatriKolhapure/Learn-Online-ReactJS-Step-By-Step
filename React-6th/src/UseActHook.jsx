import { useActionState } from "react";

const UseActHook = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let pwd = formData.get("password");
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    // console.log("Handle submit called", name , pwd);

    if (name && pwd) {
      return { message: "Data Submitted", name, pwd };
    } else {
      return { error: "Failed to submit, Enter proper data", name, pwd };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <>
      <h2>UseActionState Hook in React js</h2>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input defaultValue={data?.pwd} type="password" placeholder="enter password" name="password" />
        <br />
        <br />
        <button disabled={pending}>Submit </button>
        <br /> <br />
      </form>
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      
      <h3>
        Name: {data?.name} <br />
        <br /> Password: {data?.pwd}
      </h3>
    </>
  );
};
export default UseActHook;
