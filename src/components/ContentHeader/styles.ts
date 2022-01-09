import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    > h1::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`

export const Controllers = styled.div``
