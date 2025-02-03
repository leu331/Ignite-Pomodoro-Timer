import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 74rem;
   max-height: calc(100vh - 5rem);
    margin: 3rem auto;
    padding: 2.5rem;
    overflow-y: auto;
    

    background-color: ${props => props.theme.elements};
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
            color: ${props => props.theme.title};
          
            &:hover{
               border-bottom: 3px solid ${props => props.theme.green};
               height: 2.5rem;
            }

            &:active {
                color: ${props => props.theme.green};
                outline: none;
                border: none;
            }
        }

        & button#switchTheme {
            background: transparent;
            border: none;
            color: ${props => props.theme.title};
            font-size: 2.1rem;
            height: 2.5rem;
            margin-bottom: .1rem;
        

            &:hover{
                border-bottom: 3px solid ${props => props.theme.green};
              
            }

            &:active {
                color: ${props => props.theme.green};
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
`