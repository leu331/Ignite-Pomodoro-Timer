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

// src/Layouts/DefaultLayout/index.tsx
var DefaultLayout_exports = {};
__export(DefaultLayout_exports, {
  Layout: () => Layout
});
module.exports = __toCommonJS(DefaultLayout_exports);
var import_react_router = require("react-router");

// src/Layouts/DefaultLayout/styles.ts
var import_styled_components = __toESM(require("styled-components"), 1);
var LayoutContainer = import_styled_components.default.div`
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
var DarkLogo_default = "../../DarkLogo-YHR3Y37E.svg";

// src/Layouts/DefaultLayout/index.tsx
var import_react = require("@phosphor-icons/react");
function Layout() {
  return /* @__PURE__ */ React.createElement(LayoutContainer, null, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { className: "logo" }, /* @__PURE__ */ React.createElement("img", { src: DarkLogo_default, alt: "" })), /* @__PURE__ */ React.createElement("div", { className: "buttons" }, /* @__PURE__ */ React.createElement(import_react_router.NavLink, { to: "/", title: "Timer" }, " ", /* @__PURE__ */ React.createElement(import_react.Timer, null), " "), /* @__PURE__ */ React.createElement(import_react_router.NavLink, { to: "/history", title: "Hist\xF3rico" }, " ", /* @__PURE__ */ React.createElement(import_react.Scroll, null), " "), /* @__PURE__ */ React.createElement("button", { id: "switchTheme", type: "button", title: "Trocar Tema" }, /* @__PURE__ */ React.createElement(import_react.SunDim, null)))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react_router.Outlet, null)), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", null, " Apenas por divers\xE3o,"), /* @__PURE__ */ React.createElement("span", null, "Todos os direitos reservados"))));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Layout
});
