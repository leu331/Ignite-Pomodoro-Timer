import styled from "styled-components";
export const CountDownContainer = styled.div`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    font-weight: bold;
        color: ${props => props.theme.title};
        display: flex;
        flex: 1;
        gap: 1.5rem;
        
        & span:nth-last-child(3){
            color: ${props => props.theme.green};
            background-color: none;
            background: transparent;
            padding: 0;
            width: 4rem;
            display: flex;
            justify-content: center;
        }
  
    span {
        background-color: ${props => props.theme["span-background"]};
        padding-inline: 1rem;
        border-radius: 0 .7rem;
    }
`

