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

// src/Pages/Home/index.tsx
var Home_exports = {};
__export(Home_exports, {
  Home: () => Home
});
module.exports = __toCommonJS(Home_exports);
var import_react4 = require("@phosphor-icons/react");

// src/Pages/Home/styles.ts
var import_styled_components = __toESM(require("styled-components"), 1);
var HomeContainer = import_styled_components.default.div`
    
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            justify-content: center;
          
        }

    div#taskActive {

    & p {
        
        font-size: 1rem;
        color: ${(props) => props.theme.title};
        font-weight: bold;
        background-color: ${(props) => props.theme.green};
        padding: .7rem 1rem;
        border-radius: .75rem;
    }  
    }

    div#taskInActive {
height: 0;
        width: 0;
& p {
    font-size: 1rem;
    color: ${(props) => props.theme.title};
    font-weight: bold;
    padding: .7rem 1rem;
    border-radius: .75rem;
}  
}
`;
var StartDownContainer = import_styled_components.default.button`

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            background: ${(props) => props.theme["green"]};
            margin-bottom: 1rem;
            padding-block: .6rem ;
            border-radius: .5rem;
            border: none;
            cursor: pointer;
            font-weight: bold;
            color: ${(props) => props.theme.title};

            &:not(:disabled):hover {
                background-color: ${(props) => props.theme["dark-green"]};   
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
`;
var CloseDownContainer = import_styled_components.default.button`

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            background: ${(props) => props.theme["red"]};
            margin-bottom: 1rem;
            padding-block: .6rem ;
            border-radius: .5rem;
            border: none;
            cursor: pointer;
            font-weight: bold;
            color: ${(props) => props.theme.title};

            &:not(:disabled):hover {
                background-color: ${(props) => props.theme["dark-red"]};   
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
`;

// src/Pages/Home/index.tsx
var import_react5 = require("react");

// src/Pages/Home/Components/NewCycleForm/styles.ts
var import_styled_components2 = __toESM(require("styled-components"), 1);
var FormContainer = import_styled_components2.default.div`
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
var BaseInput = import_styled_components2.default.input`
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
var TaskInput = (0, import_styled_components2.default)(BaseInput)`
    width: 16.6rem;    

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;
var MinutesForTask = (0, import_styled_components2.default)(BaseInput)`
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

// src/Pages/Home/Components/Cowntdown/index.tsx
var import_date_fns = require("date-fns");

// src/Pages/Home/Components/Cowntdown/styles.ts
var import_styled_components3 = __toESM(require("styled-components"), 1);
var CountDownContainer = import_styled_components3.default.div`
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
var import_react3 = require("react");
function Cowntdown() {
  const { activeCycle, activeCycleId, markCycleAsFinished, amountSecondsPassed, setSecondsPassed } = (0, import_react3.useContext)(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle.minutesForTask * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const cycleMinutes = Math.floor(currentSeconds / 60);
  const cycleSeconds = currentSeconds % 60;
  const minutes = String(cycleMinutes).padStart(2, "0");
  const seconds = String(cycleSeconds).padStart(2, "0");
  (0, import_react3.useEffect)(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    } else {
      document.title = "Ignite Timer";
    }
  }, [minutes, seconds, activeCycle]);
  (0, import_react3.useEffect)(() => {
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

// src/Pages/Home/index.tsx
var import_react_hook_form2 = require("react-hook-form");
var zod = __toESM(require("zod"), 1);
var import_zod = require("@hookform/resolvers/zod");
var schema = zod.object({
  task: zod.string().min(1, "Informe a tarefa."),
  minutesForTask: zod.number().min(1, "O ciclo precisa ser de, no m\xEDnimo, 5 minutos").max(120, "O ciclo precisa ser de, no m\xE1ximo, 120 minutos")
});
function Home() {
  const { createNewCycle, handleStopCycle, activeCycle, activeCycleId } = (0, import_react5.useContext)(CyclesContext);
  function handleCreateNewCycle(data) {
    createNewCycle(data);
    reset();
  }
  const newCycleForm = (0, import_react_hook_form2.useForm)({
    defaultValues: {
      task: "",
      minutesForTask: 0
    },
    resolver: (0, import_zod.zodResolver)(schema)
  });
  const { handleSubmit, watch, reset } = newCycleForm;
  const task = watch("task");
  const minutesForTask = watch("minutesForTask");
  const isSubmitDisabled = !task || !minutesForTask;
  return /* @__PURE__ */ React.createElement(HomeContainer, null, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit(handleCreateNewCycle) }, /* @__PURE__ */ React.createElement(import_react_hook_form2.FormProvider, { ...newCycleForm }, /* @__PURE__ */ React.createElement(NewCycleForm, null)), activeCycle ? /* @__PURE__ */ React.createElement("div", { id: "taskActive" }, /* @__PURE__ */ React.createElement("p", null, `Tarefa atual: ${activeCycle.task}`)) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { id: "taskInActive" }, /* @__PURE__ */ React.createElement("p", null))), /* @__PURE__ */ React.createElement(Cowntdown, null), activeCycle ? /* @__PURE__ */ React.createElement(CloseDownContainer, { onClick: handleStopCycle, type: "button" }, /* @__PURE__ */ React.createElement(import_react4.HandPalm, null), /* @__PURE__ */ React.createElement("span", null, "Interromper")) : /* @__PURE__ */ React.createElement(StartDownContainer, { type: "submit", disabled: isSubmitDisabled }, /* @__PURE__ */ React.createElement(import_react4.Play, null), /* @__PURE__ */ React.createElement("span", null, "Come\xE7ar"))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Home
});
