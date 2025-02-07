var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Styles/Global/global.ts
var global_exports = {};
__export(global_exports, {
  GlobalStyles: () => GlobalStyles
});
module.exports = __toCommonJS(global_exports);
var import_styled_components = require("styled-components");
var GlobalStyles = import_styled_components.createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

}

:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.green};
    border: none;
}

body, input, textarea, button {
    font-family: "Roboto", sans-serif;

    font-weight: 400;
    font-size: 1rem;
   
}

body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
}

button {
    cursor: pointer;
}

`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GlobalStyles
});
