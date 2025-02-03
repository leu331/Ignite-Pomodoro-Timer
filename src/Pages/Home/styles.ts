import styled from "styled-components";

export const HomeContainer = styled.div`
    
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
        color: ${props => props.theme.title};
        font-weight: bold;
        background-color: ${props => props.theme.green};
        padding: .7rem 1rem;
        border-radius: .75rem;
    }  
    }

    div#taskInActive {
height: 0;
        width: 0;
& p {
    font-size: 1rem;
    color: ${props => props.theme.title};
    font-weight: bold;
    padding: .7rem 1rem;
    border-radius: .75rem;
}  
}
`

export const StartDownContainer = styled.button`

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            background: ${props => props.theme["green"]};
            margin-bottom: 1rem;
            padding-block: .6rem ;
            border-radius: .5rem;
            border: none;
            cursor: pointer;
            font-weight: bold;
            color: ${props => props.theme.title};

            &:not(:disabled):hover {
                background-color: ${props => props.theme["dark-green"]};   
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
`

export const CloseDownContainer = styled.button`

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;
            background: ${props => props.theme["red"]};
            margin-bottom: 1rem;
            padding-block: .6rem ;
            border-radius: .5rem;
            border: none;
            cursor: pointer;
            font-weight: bold;
            color: ${props => props.theme.title};

            &:not(:disabled):hover {
                background-color: ${props => props.theme["dark-red"]};   
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
`