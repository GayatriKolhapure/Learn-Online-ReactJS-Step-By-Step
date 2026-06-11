import "./App.css";
import Header from "./Header";
import Component, {SecComponent} from "./Components";
import JsxComponent from "./JsxComponent";
import WithoutJsxComponent from "./WithoutjsxComponent";

function App() {
  return (
    <>
      <h2>Code Step by Step</h2>
      <h3>Hello React</h3>
      <Header/>
      <h1>Code flow to run react js project</h1>
      <ul>
        <h3>
          <li>index.html</li>
          <li>main.jsx</li>
          <li>App.jsx</li>
        </h3>
      </ul>

      <Component/>
      <SecComponent/>

      <JsxComponent/>
      <WithoutJsxComponent/>
      {/* <sum/> */}
    </>
  );
}

export default App;
