import { useEffect} from "react";

const ThirdCounter = ({cnt, data}) => {

  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [cnt]);

  useEffect(() => {
    return()=>{
        console.log("unmount phase only");
    }
  }, []);

  return (
    <>
      <h3>Counter value: {cnt}</h3>
      <h3>Data Value: {data}</h3>
    </>
  );
};
export default ThirdCounter;
