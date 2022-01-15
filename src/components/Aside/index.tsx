import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    ToggleMenu,
    ToggleContainer
} from "./styles"
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDashboard,
    MdExitToApp,
    MdMenu,
    MdClose
} from "react-icons/md"
import logoImg from "../../assets/logo.svg"
import MenuItem from "../MenuItem"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react"
import Toggle from "../Toggle"
import { useTheme } from "../../context/ThemeContext"

export default function Aside() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { signOut } = useAuth()
    const { isDarkTheme, toggleTheme } = useTheme()

    return (
        <Container menuIsOpen={menuIsOpen}>
            <Header>
                <ToggleMenu onClick={() => setMenuIsOpen(old => !old)}>
                    {menuIsOpen ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <LogoImg src={logoImg} alt="Logo Minha Carteira"></LogoImg>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItem href="/">
                    <MdDashboard></MdDashboard>Dashboard
                </MenuItem>
                <MenuItem href="/list/entry-balance">
                    <MdArrowUpward></MdArrowUpward>Entradas
                </MenuItem>
                <MenuItem href="/list/exit-balance">
                    <MdArrowDownward></MdArrowDownward>Saídas
                </MenuItem>
                <MenuItem onClick={signOut} href="#">
                    <MdExitToApp></MdExitToApp>Sair
                </MenuItem>
            </MenuContainer>
            <ToggleContainer menuIsOpen={menuIsOpen}>
                <span>Alterar Tema</span>
                <Toggle checked={isDarkTheme} onChange={toggleTheme}></Toggle>
            </ToggleContainer>
        </Container>
    )
}
