import styled from "styled-components"

interface IContainerProps {
    color: string
}

export const Container = styled.section<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 150px;
    margin: 10px 0;
    border-radius: 8px;
    padding: 20px 30px;
    position: relative;
    overflow: hidden;

    > img {
        position: absolute;
        height: 110%;
        top: -10px;
        right: -30px;
        opacity: 0.3;
    }

    > span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    > small {
        position: absolute;
        bottom: 10px;
        z-index: 10;
    }
`
