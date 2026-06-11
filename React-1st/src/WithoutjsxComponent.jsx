import { createElement } from "react";

function WithoutJsxComponent(){
    // return createElement("div",{id:"rootDiv"},"hello div without JSX");

    return createElement("div",{id:"rootDiv"},createElement,("h3",{class:'h1Tag'},"heading Tag"),"hello div without JSX");
}
export default WithoutJsxComponent;