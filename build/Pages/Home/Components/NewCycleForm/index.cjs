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

// src/Pages/Home/Components/NewCycleForm/index.tsx
var NewCycleForm_exports = {};
__export(NewCycleForm_exports, {
  NewCycleForm: () => NewCycleForm
});
module.exports = __toCommonJS(NewCycleForm_exports);

// src/Pages/Home/Components/NewCycleForm/styles.ts
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

// src/Pages/Home/Context/CyclesContext.tsx
var import_react = require("react");
var import_uuid = require("uuid");
var CyclesContext = (0, import_react.createContext)({});

// src/Pages/Home/Components/NewCycleForm/index.tsx
var import_react_hook_form = require("react-hook-form");
var import_react2 = require("react");
function NewCycleForm() {
  const { activeCycle } = (0, import_react2.useContext)(CyclesContext);
  const { register } = (0, import_react_hook_form.useFormContext)();
  return /* @__PURE__ */ React.createElement(FormContainer, null, /* @__PURE__ */ React.createElement("label", { htmlFor: "task" }, "Vou trabalhar em"), /* @__PURE__ */ React.createElement(
    TaskInput,
    {
      type: "text",
      id: "task",
      placeholder: "D\xEA um nome para o seu projeto",
      disabled: !!activeCycle,
      list: "taskSuggestions",
      ...register("task")
    }
  ), /* @__PURE__ */ React.createElement("datalist", { id: "taskSuggestions" }, /* @__PURE__ */ React.createElement("option", { value: "Estudar TypeScript" }), /* @__PURE__ */ React.createElement("option", { value: "Ler livro sobre fundamentos de NodeJS" }), /* @__PURE__ */ React.createElement("option", { value: "Tirar d\xFAvidas" }), /* @__PURE__ */ React.createElement("option", { value: "Continuar com o projeto X" })), /* @__PURE__ */ React.createElement("label", { htmlFor: "minutesForTask" }, "durante"), /* @__PURE__ */ React.createElement(
    MinutesForTask,
    {
      type: "number",
      disabled: !!activeCycle,
      id: "minutesForTask",
      step: 5,
      placeholder: "00",
      ...register("minutesForTask", { valueAsNumber: true })
    }
  ), /* @__PURE__ */ React.createElement("label", { htmlFor: "minutesForTask" }, "minutos."));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NewCycleForm
});
