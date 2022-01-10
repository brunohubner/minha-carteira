import styled from "styled-components"

interface IContainerProps {
    color: string
}

interface ITagProps {
    color: string
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s;
    position: relative;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    &:hover {
        opacity: 0.8;
        transform: translateX(10px);
    }
`

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    position: absolute;
    width: 10px;
    height: 60%;
    left: 0;
`