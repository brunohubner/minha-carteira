import styled from "styled-components"

export const Container = styled.div`
    width: 48%;
    height: 280px;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 8px;
    margin: 10px 0;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        width: 35px;
        margin-left: 8px;
    }

    > header p {
        font-size: 1.1rem;
    }
`
