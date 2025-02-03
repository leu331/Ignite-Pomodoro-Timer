import styled from "styled-components"
export const FormContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .6rem;
        font-size: 1.125rem;
        font-weight: bold;
        flex-wrap: wrap;
        margin-top: 1rem;
`

const BaseInput = styled.input`
    background: transparent;
    border: none;
    height: 2rem;
    font-weight: bold;
    font-size: 1.125rem;
    border-bottom: 2px solid ${props => props.theme.placeholder};
    padding-inline: .4rem;
    color: ${props => props.theme.placeholder};

    &::placeholder {
            text-align: center;
            }

    &:disabled {
        cursor: not-allowed;
    }
`

export const TaskInput = styled(BaseInput)`
    width: 16.6rem;    

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesForTask = styled(BaseInput)`
    width: 4.5rem;    
    text-align: center;
    
`