import styled from "styled-components"

interface ITitleContainer {
    lineColor: string
}

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const TitleContainer = styled.div<ITitleContainer>`
    > h1::after {
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }
`

export const Controllers = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`
