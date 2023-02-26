import { App } from "./app.js";

//<nn>
// Create a local application instance
//</nn>
const LocApp = {} || LocApp;
//<nn>
// Add a member which is intance of the imported app class
//</nn>
LocApp.a = new App();
LocApp.tstArray = LocApp.a.range(12);

LocApp.d3Test = function () {
  const b = LocApp.a.d3SelectTest("body");
};

//<nn>
// Test if instance is working...
//</nn>
//document.onload = LocApp.a.tstFunc();

//<nn>
// Define a click handler, which usable from modules.
// We need this as modules runs only once...
//</nn>
const clickHandler = (event) => {
  LocApp.d3Test();
};
document.querySelector("#tstBtn").addEventListener("click", clickHandler);

//<nn>
// Expose the objct defned in teh module to global namespace, to enable
// module content usage "real-time"
//</nn>
//window.locApp = LocApp;
