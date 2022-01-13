import styled from "styled-components"

interface ILegendProps {
    color: string
}

export const Container = styled.div`
    width: 100%;
    height: 340px;
    background-color: ${props => props.theme.colors.tertiary};
    margin: 10px 0;
    padding: 30px 30px 40px 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`
export const Header = styled.header`
    width: 100%;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;

    > h2 {
        font-size: 1.4rem;
    }
`

export const LegendContainer = styled.ul`
    display: flex;
    gap: 16px;
`

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    > div {
        background-color: ${props => props.color};
        font-size: 1.03rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 8px;
    }
`

export const ChartContainer = styled.div`
    flex: 1;
`
