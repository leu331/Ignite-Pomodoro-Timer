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

// src/Pages/History/styles.ts
var styles_exports = {};
__export(styles_exports, {
  HistoryContainer: () => HistoryContainer,
  HistoryList: () => HistoryList,
  Status: () => Status
});
module.exports = __toCommonJS(styles_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HistoryContainer,
  HistoryList,
  Status
});
