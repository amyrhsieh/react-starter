import App from "./App";

import style from "./main.scss";

console.log(`Entry point`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
