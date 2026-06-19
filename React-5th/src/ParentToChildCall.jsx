import User from "./User";

function FunctionCallPtOC() {

  const displayName = (name) => {
    alert(name);
  };

  return (
    <>
      <User displayName={displayName} name="Gayatri"/>
    </>
  );
}
export default FunctionCallPtOC;
