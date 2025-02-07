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

// src/Styles/Themes/darkTheme.ts
var darkTheme_exports = {};
__export(darkTheme_exports, {
  darkTheme: () => darkTheme
});
module.exports = __toCommonJS(darkTheme_exports);
var darkTheme = {
  "white": "#FFF",
  "title": "#e1e1e6",
  "text": "#C4C4CC",
  "label": "#8D8D99",
  "placeholder": "#7C7C8A",
  "divider": "#323238",
  "elements": "#202024",
  "background": "#121214",
  "span-background": "#29292e",
  "light-green": "#00B37E",
  "green": "#00875F",
  "dark-green": "#015F43",
  "red": "#AB222E",
  "dark-red": "#7A1921",
  "yellow": "#FBA94C"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  darkTheme
});
