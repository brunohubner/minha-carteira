import { Container, Header, LogoImg, Title, MenuContainer } from "./styles"
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDashboard,
    MdExitToApp
} from "react-icons/md"
import logoImg from "../../assets/logo.svg"
import MenuItem from "../MenuItem"
import { useAuth } from "../../context/AuthContext"

export default function Aside() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Header>
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
        </Container>
    )
}
