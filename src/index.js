// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../src/global.css";
import App from "./components/App";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <App/>, container
);
