import ReactDom from "react-dom";
import App from "./components/App"

let rootClass = document.querySelector(".root");

ReactDom.render(<App />, rootClass);