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

// src/Pages/History/index.tsx
var History_exports = {};
__export(History_exports, {
  History: () => History
});
module.exports = __toCommonJS(History_exports);
var import_react2 = require("react");

// src/Pages/History/styles.ts
var import_styled_components = __toESM(require("styled-components"), 1);
var HistoryContainer = import_styled_components.default.div`
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme.title} ;  
        margin-bottom: 0.5rem;
        }
`;
var HistoryList = import_styled_components.default.div`
    flex: 1;
    overflow: auto;
    max-height: 21.2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
     
        min-height: 150px;

        thead {
            position: sticky;
            top: 0;
        }
        

       th {
        background-color: ${(props) => props.theme.divider};
        padding: 1rem;
        text-align: left;
        color: ${(props) => props.theme.title};
        font-size: 0.875rem;
        line-height: 1.6;

        &:first-child {
            border-top-left-radius: 8px;
            padding-left: 1.5rem;
        }

        &:last-child {
            border-top-right-radius: 8px;
            padding-right: 1.5rem;
        }

       }

       td {
        background-color: ${(props) => props.theme["span-background"]};
        color: ${(props) => props.theme.text};

        border-top: 4px solid ${(props) => props.theme.elements};
        padding-inline: 1rem;
        padding-block: 1rem;

       }
       
    }
`;
var STATUS_COLORS = {
  inProgress: "yellow",
  interrupted: "red",
  completed: "green"
};
var Status = import_styled_components.default.span`
    display: flex;
    align-items: center;
    gap: .5rem;

    &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${(props) => props.theme[STATUS_COLORS[props.status]]};
    }
`;

// src/Pages/Home/Context/CyclesContext.tsx
var import_react = require("react");
var import_uuid = require("uuid");
var CyclesContext = (0, import_react.createContext)({});

// src/Pages/History/index.tsx
var import_date_fns = require("date-fns");
var import_locale = require("date-fns/locale");
function History() {
  const { cycles } = (0, import_react2.useContext)(CyclesContext);
  return /* @__PURE__ */ React.createElement(HistoryContainer, null, /* @__PURE__ */ React.createElement("h1", null, "Meu hist\xF3rico"), /* @__PURE__ */ React.createElement(HistoryList, null, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Tarefa"), /* @__PURE__ */ React.createElement("th", null, "Dura\xE7\xE3o"), /* @__PURE__ */ React.createElement("th", null, "Inicio"), /* @__PURE__ */ React.createElement("th", null, "Status"))), /* @__PURE__ */ React.createElement("tbody", null, cycles.map((cycles2) => {
    console.log("Ciclo:", cycles2);
    return /* @__PURE__ */ React.createElement("tr", { key: cycles2.id }, /* @__PURE__ */ React.createElement("td", null, cycles2.task), /* @__PURE__ */ React.createElement("td", null, cycles2.minutesForTask, " minutos"), /* @__PURE__ */ React.createElement("td", null, (0, import_date_fns.formatDistanceToNow)(cycles2.startDate, {
      addSuffix: true,
      locale: import_locale.ptBR
    })), /* @__PURE__ */ React.createElement("td", null, cycles2.finishedDate && /* @__PURE__ */ React.createElement(Status, { status: "completed" }, "Conclu\xEDdo"), cycles2.interruptedDate && /* @__PURE__ */ React.createElement(Status, { status: "interrupted" }, "Interrompido"), !cycles2.finishedDate && !cycles2.interruptedDate && /* @__PURE__ */ React.createElement(Status, { status: "inProgress" }, "Em andamento")));
  })))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  History
});
