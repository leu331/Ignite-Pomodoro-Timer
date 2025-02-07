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

// src/Pages/Home/styles.ts
var styles_exports = {};
__export(styles_exports, {
  CloseDownContainer: () => CloseDownContainer,
  HomeContainer: () => HomeContainer,
  StartDownContainer: () => StartDownContainer
});
module.exports = __toCommonJS(styles_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CloseDownContainer,
  HomeContainer,
  StartDownContainer
});
