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

// src/Pages/Home/Context/CyclesContext.tsx
var CyclesContext_exports = {};
__export(CyclesContext_exports, {
  CyclesContext: () => CyclesContext,
  CyclesContextProvider: () => CyclesContextProvider
});
module.exports = __toCommonJS(CyclesContext_exports);
var import_react = require("react");
var import_uuid = require("uuid");
var CyclesContext = (0, import_react.createContext)({});
function CyclesContextProvider({ children }) {
  const [cycles, setCycles] = (0, import_react.useState)([]);
  const [activeCycleId, setActiveCycleId] = (0, import_react.useState)(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = (0, import_react.useState)(0);
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  function markCycleAsFinished() {
    setCycles(
      (state) => state.map((cycle) => {
        if (cycle.id === (activeCycle == null ? void 0 : activeCycle.id)) {
          return { ...cycle, finishedDate: /* @__PURE__ */ new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }
  function createNewCycle(data) {
    if (data.minutesForTask > 60) {
      window.alert("Ao realizar uma tarefa de mais de 60 minutos, busque reservar outros 15 minutos para descanso! :)");
    }
    const newCycle = {
      id: (0, import_uuid.v4)(),
      task: data.task,
      minutesForTask: data.minutesForTask,
      startDate: /* @__PURE__ */ new Date()
    };
    setCycles((state) => [...cycles, newCycle]);
    setActiveCycleId(newCycle.id);
  }
  function handleStopCycle() {
    console.log("Parando ciclo:", activeCycle);
    setCycles((state) => state.map((cycle) => {
      if (cycle.id === (activeCycle == null ? void 0 : activeCycle.id)) {
        return { ...cycle, interruptedDate: /* @__PURE__ */ new Date() };
      } else {
        return cycle;
      }
    }));
    setActiveCycleId(null);
    setAmountSecondsPassed(0);
  }
  function setSecondsPassed(seconds) {
    setAmountSecondsPassed(seconds);
  }
  return /* @__PURE__ */ React.createElement(CyclesContext.Provider, { value: {
    cycles,
    activeCycle,
    activeCycleId,
    markCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
    createNewCycle,
    handleStopCycle
  } }, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CyclesContext,
  CyclesContextProvider
});
