import styled from "styled-components"

export const Container = styled.main`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    padding: 24px;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`
