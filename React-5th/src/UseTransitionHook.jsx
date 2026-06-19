import { useState, useTransition } from "react";

function UseTransitionHook() {
  // const [pending, setPending] = useState(false);

  // const handleBtn = async ()=>{
  //     setPending(true);
  //     await new Promise(res => setTimeout(res, 2000));
  //     setPending(false)
  // }

  const [pending, startTransition] = useTransition();
  const handleBtnTrans = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <>
      <h2>UseTransition Hook in React</h2>
      {pending ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      ) : (
        ""
      )}
      <button disabled={pending} onClick={handleBtnTrans}>
        Submit
      </button>
    </>
  );
}
export default UseTransitionHook;
