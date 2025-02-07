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

// src/Pages/Home/Components/Cowntdown/index.tsx
var Cowntdown_exports = {};
__export(Cowntdown_exports, {
  Cowntdown: () => Cowntdown
});
module.exports = __toCommonJS(Cowntdown_exports);
var import_date_fns = require("date-fns");

// src/Pages/Home/Components/Cowntdown/styles.ts
var import_styled_components = __toESM(require("styled-components"), 1);
var CountDownContainer = import_styled_components.default.div`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    font-weight: bold;
        color: ${(props) => props.theme.title};
        display: flex;
        flex: 1;
        gap: 1.5rem;
        
        & span:nth-last-child(3){
            color: ${(props) => props.theme.green};
            background-color: none;
            background: transparent;
            padding: 0;
            width: 4rem;
            display: flex;
            justify-content: center;
        }
  
    span {
        background-color: ${(props) => props.theme["span-background"]};
        padding-inline: 1rem;
        border-radius: 0 .7rem;
    }
`;

// src/Pages/Home/Components/Cowntdown/index.tsx
var import_react2 = require("react");

// src/Pages/Home/Context/CyclesContext.tsx
var import_react = require("react");
var import_uuid = require("uuid");
var CyclesContext = (0, import_react.createContext)({});

// src/Pages/Home/Components/Cowntdown/index.tsx
function Cowntdown() {
  const { activeCycle, activeCycleId, markCycleAsFinished, amountSecondsPassed, setSecondsPassed } = (0, import_react2.useContext)(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle.minutesForTask * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const cycleMinutes = Math.floor(currentSeconds / 60);
  const cycleSeconds = currentSeconds % 60;
  const minutes = String(cycleMinutes).padStart(2, "0");
  const seconds = String(cycleSeconds).padStart(2, "0");
  (0, import_react2.useEffect)(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    } else {
      document.title = "Ignite Timer";
    }
  }, [minutes, seconds, activeCycle]);
  (0, import_react2.useEffect)(() => {
    let interval;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = (0, import_date_fns.differenceInSeconds)(/* @__PURE__ */ new Date(), activeCycle.startDate);
        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished();
          setSecondsPassed(totalSeconds);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1e3);
      return () => clearInterval(interval);
    }
  }, [activeCycle, totalSeconds, activeCycleId]);
  return /* @__PURE__ */ React.createElement(CountDownContainer, null, /* @__PURE__ */ React.createElement("span", null, minutes[0]), /* @__PURE__ */ React.createElement("span", null, minutes[1]), /* @__PURE__ */ React.createElement("span", null, ":"), /* @__PURE__ */ React.createElement("span", null, seconds[0]), /* @__PURE__ */ React.createElement("span", null, seconds[1]));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Cowntdown
});
