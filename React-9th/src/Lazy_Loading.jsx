import { lazy, Suspense, useState } from "react";
//  import User from "./User";
const User = lazy(() => import("./User"));

const LazyLoadingFun = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <h1>lazy Loading</h1>
      {load ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />{" "}
        </Suspense>
        // <User/>
      ) : null}
      <button onClick={() => setLoad(true)}>Load User</button>
    </>
  );
};
export default LazyLoadingFun;
