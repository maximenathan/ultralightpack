'use strict';

var React = require("react");
var Core = require("@material-ui/core");

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(Core.AppBar, {
                  children: React.createElement(Core.Toolbar, {
                        children: React.createElement(Core.Typography, {
                              children: "Ultralight pack",
                              variant: "h6"
                            })
                      }),
                  position: "static"
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
