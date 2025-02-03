import styled from "styled-components";

export const HistoryContainer = styled.div`
    padding: 2.5rem 2.5rem 2rem 2.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.title} ;  
        margin-bottom: 0.5rem;
        }
`

export const HistoryList = styled.div`
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
        background-color: ${props => props.theme.divider};
        padding: 1rem;
        text-align: left;
        color: ${props => props.theme.title};
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
        background-color: ${props => props.theme["span-background"]};
        color: ${props => props.theme.text};

        border-top: 4px solid ${props => props.theme.elements};
        padding-inline: 1rem;
        padding-block: 1rem;

       }
       
    }
`

const STATUS_COLORS = {
    inProgress: "yellow",
    interrupted: "red",
    completed: "green"
} as const

interface StatusProps {
    status: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: .5rem;

    &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: ${props => props.theme[STATUS_COLORS[props.status]]};
    }
` 