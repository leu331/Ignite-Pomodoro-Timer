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

// src/Layouts/DefaultLayout/styles.ts
var styles_exports = {};
__export(styles_exports, {
  LayoutContainer: () => LayoutContainer
});
module.exports = __toCommonJS(styles_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LayoutContainer
});
