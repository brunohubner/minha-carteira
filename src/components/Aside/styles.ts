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

export const MenuItem = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: ${props => props.theme.colors.info};

    > svg {
        font-size: 1.5rem;
        margin-right: 10px;
    }

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`
