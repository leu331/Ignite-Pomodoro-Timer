var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/main.tsx
var import_react8 = require("react");
var import_client = require("react-dom/client");

// src/App.tsx
var import_styled_components8 = require("styled-components");

// src/Styles/Themes/darkTheme.ts
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

// src/Styles/Global/global.ts
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

// src/Router.tsx
var import_react_router2 = require("react-router");

// src/Pages/Home/index.tsx
var import_react4 = require("@phosphor-icons/react");

// src/Pages/Home/styles.ts
var import_styled_components2 = __toESM(require("styled-components"), 1);
var HomeContainer = import_styled_components2.default.div`
    
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
var StartDownContainer = import_styled_components2.default.button`

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
var CloseDownContainer = import_styled_components2.default.button`

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
var import_styled_components3 = __toESM(require("styled-components"), 1);
var FormContainer = import_styled_components3.default.div`
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
var BaseInput = import_styled_components3.default.input`
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
var TaskInput = (0, import_styled_components3.default)(BaseInput)`
    width: 16.6rem;    

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;
var MinutesForTask = (0, import_styled_components3.default)(BaseInput)`
    width: 4.5rem;    
    text-align: center;
    
`;

// src/Pages/Home/Context/CyclesContext.tsx
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
var import_styled_components4 = __toESM(require("styled-components"), 1);
var CountDownContainer = import_styled_components4.default.div`
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

// src/Pages/History/index.tsx
var import_react6 = require("react");

// src/Pages/History/styles.ts
var import_styled_components5 = __toESM(require("styled-components"), 1);
var HistoryContainer = import_styled_components5.default.div`
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
var HistoryList = import_styled_components5.default.div`
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
var Status = import_styled_components5.default.span`
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

// src/Pages/History/index.tsx
var import_date_fns2 = require("date-fns");
var import_locale = require("date-fns/locale");
function History() {
  const { cycles } = (0, import_react6.useContext)(CyclesContext);
  return /* @__PURE__ */ React.createElement(HistoryContainer, null, /* @__PURE__ */ React.createElement("h1", null, "Meu hist\xF3rico"), /* @__PURE__ */ React.createElement(HistoryList, null, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Tarefa"), /* @__PURE__ */ React.createElement("th", null, "Dura\xE7\xE3o"), /* @__PURE__ */ React.createElement("th", null, "Inicio"), /* @__PURE__ */ React.createElement("th", null, "Status"))), /* @__PURE__ */ React.createElement("tbody", null, cycles.map((cycles2) => {
    console.log("Ciclo:", cycles2);
    return /* @__PURE__ */ React.createElement("tr", { key: cycles2.id }, /* @__PURE__ */ React.createElement("td", null, cycles2.task), /* @__PURE__ */ React.createElement("td", null, cycles2.minutesForTask, " minutos"), /* @__PURE__ */ React.createElement("td", null, (0, import_date_fns2.formatDistanceToNow)(cycles2.startDate, {
      addSuffix: true,
      locale: import_locale.ptBR
    })), /* @__PURE__ */ React.createElement("td", null, cycles2.finishedDate && /* @__PURE__ */ React.createElement(Status, { status: "completed" }, "Conclu\xEDdo"), cycles2.interruptedDate && /* @__PURE__ */ React.createElement(Status, { status: "interrupted" }, "Interrompido"), !cycles2.finishedDate && !cycles2.interruptedDate && /* @__PURE__ */ React.createElement(Status, { status: "inProgress" }, "Em andamento")));
  })))));
}

// src/Pages/Not Found/styles.ts
var import_styled_components6 = __toESM(require("styled-components"), 1);
var NotFoundContainer = import_styled_components6.default.div`
    
`;

// src/Pages/Not Found/Index.tsx
function NotFound() {
  return /* @__PURE__ */ React.createElement(NotFoundContainer, null);
}

// src/Layouts/DefaultLayout/index.tsx
var import_react_router = require("react-router");

// src/Layouts/DefaultLayout/styles.ts
var import_styled_components7 = __toESM(require("styled-components"), 1);
var LayoutContainer = import_styled_components7.default.div`
    max-width: 74rem;
   max-height: calc(100vh - 5rem);
    margin: 3rem auto;
    padding: 2.5rem;
    overflow-y: auto;
    

    background-color: ${(props) => props.theme.elements};
    border-radius: 5px;

    display: flex;
    flex-direction: column;

    header {
        display: flex;
        justify-content: space-between;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: .7rem;
}

        & a {
            font-size: 1.8rem;
            height: 2.5rem;
            color: ${(props) => props.theme.title};
          
            &:hover{
               border-bottom: 3px solid ${(props) => props.theme.green};
               height: 2.5rem;
            }

            &:active {
                color: ${(props) => props.theme.green};
                outline: none;
                border: none;
            }
        }

        & button#switchTheme {
            background: transparent;
            border: none;
            color: ${(props) => props.theme.title};
            font-size: 2.1rem;
            height: 2.5rem;
            margin-bottom: .1rem;
        

            &:hover{
                border-bottom: 3px solid ${(props) => props.theme.green};
              
            }

            &:active {
                color: ${(props) => props.theme.green};
            }
       
        }
    

    footer { 
        margin-top: 1rem;

        & div {
            display: flex;
            justify-content: center;
        }
        & span {
            display: flex;
            justify-content: center;
        }
    }

    main {
        flex-grow: 1;
    }

    .logo {
     
    }

    .buttons {
        display: flex;
        justify-content: end;
    }
`;

// src/assets/DarkLogo.svg
var DarkLogo_default = "./DarkLogo-YHR3Y37E.svg";

// src/Layouts/DefaultLayout/index.tsx
var import_react7 = require("@phosphor-icons/react");
function Layout() {
  return /* @__PURE__ */ React.createElement(LayoutContainer, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { className: "logo" }, /* @__PURE__ */ React.createElement("img", { src: DarkLogo_default, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "buttons" }, /* @__PURE__ */ React.createElement(import_react_router.NavLink, { to: "/", title: "Timer" }, " ", /* @__PURE__ */ React.createElement(import_react7.Timer, null), " "), /* @__PURE__ */ React.createElement(import_react_router.NavLink, { to: "/history", title: "Hist\xF3rico" }, " ", /* @__PURE__ */ React.createElement(import_react7.Scroll, null), " "), /* @__PURE__ */ React.createElement("button", { id: "switchTheme", type: "button", title: "Trocar Tema" }, /* @__PURE__ */ React.createElement(import_react7.SunDim, null)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react_router.Outlet, null)), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", null, " Apenas por divers\xE3o,"), /* @__PURE__ */ React.createElement("span", null, "Todos os direitos reservados"))));
}

// src/Router.tsx
function AppRoutes() {
  return /* @__PURE__ */ React.createElement(CyclesContextProvider, null, /* @__PURE__ */ React.createElement(import_react_router2.Routes, null, /* @__PURE__ */ React.createElement(import_react_router2.Route, { path: "/", element: /* @__PURE__ */ React.createElement(Layout, null) }, /* @__PURE__ */ React.createElement(import_react_router2.Route, { index: true, element: /* @__PURE__ */ React.createElement(Home, null) }), /* @__PURE__ */ React.createElement(import_react_router2.Route, { path: "/history", element: /* @__PURE__ */ React.createElement(History, null) }), /* @__PURE__ */ React.createElement(import_react_router2.Route, { path: "*", element: /* @__PURE__ */ React.createElement(NotFound, null) }))));
}

// src/App.tsx
function App() {
  return /* @__PURE__ */ React.createElement(import_styled_components8.ThemeProvider, { theme: darkTheme }, /* @__PURE__ */ React.createElement(GlobalStyles, null), /* @__PURE__ */ React.createElement(AppRoutes, null), " ");
}
var App_default = App;

// src/main.tsx
var import_react_router3 = require("react-router");
(0, import_client.createRoot)(document.getElementById("root")).render(
  /* @__PURE__ */ React.createElement(import_react8.StrictMode, null, /* @__PURE__ */ React.createElement(import_react_router3.BrowserRouter, null, /* @__PURE__ */ React.createElement(App_default, null)))
);
