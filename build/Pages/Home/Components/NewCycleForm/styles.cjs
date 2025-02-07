var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Pages/Home/Components/NewCycleForm/styles.ts
var styles_exports = {};
__export(styles_exports, {
  FormContainer: () => FormContainer,
  MinutesForTask: () => MinutesForTask,
  TaskInput: () => TaskInput
});
module.exports = __toCommonJS(styles_exports);
var import_styled_components = __toESM(require("styled-components"), 1);
var FormContainer = import_styled_components.default.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .6rem;
        font-size: 1.125rem;
        font-weight: bold;
        flex-wrap: wrap;
        margin-top: 1rem;
`;
var BaseInput = import_styled_components.default.input`
    background: transparent;
    border: none;
    height: 2rem;
    font-weight: bold;
    font-size: 1.125rem;
    border-bottom: 2px solid ${(props) => props.theme.placeholder};
    padding-inline: .4rem;
    color: ${(props) => props.theme.placeholder};

    &::placeholder {
            text-align: center;
            }

    &:disabled {
        cursor: not-allowed;
    }
`;
var TaskInput = (0, import_styled_components.default)(BaseInput)`
    width: 16.6rem;    

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;
var MinutesForTask = (0, import_styled_components.default)(BaseInput)`
    width: 4.5rem;    
    text-align: center;
    
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormContainer,
  MinutesForTask,
  TaskInput
});
