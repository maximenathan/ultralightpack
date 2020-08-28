'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$Ultralightpack = require("./App.bs.js");

var body = document.createElement("div");

document.body.appendChild(body);

function makeContainer(text) {
  var container = document.createElement("article");
  container.className = "center mw9 ph3-ns";
  var title = document.createElement("h1");
  title.className = "f4 bg-near-white mv0 pv2 ph3";
  title.innerText = text;
  body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(App$Ultralightpack.make, {}), makeContainer("Main"));

exports.body = body;
exports.makeContainer = makeContainer;
/* body Not a pure module */
