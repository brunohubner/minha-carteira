import styled from "styled-components"

export const Container = styled.aside`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.header`
    display: flex;
    padding-left: 24px;
    align-items: center;
    height: 70px;
`

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`

export const Title = styled.h3`
    margin-left: 10px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
`
