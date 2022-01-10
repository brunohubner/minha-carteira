import { Container, Header, LogoImg, Title, MenuContainer } from "./styles"
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDashboard,
    MdExitToApp
} from "react-icons/md"
import logoImg from "../../assets/logo.svg"
import MenuItem from "../MenuItem"

interface IProps {}

export default function Aside({}: IProps) {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira"></LogoImg>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItem href="/dashboard">
                    <MdDashboard></MdDashboard>Dashboard
                </MenuItem>
                <MenuItem href="/list/entry-balance">
                    <MdArrowUpward></MdArrowUpward>Entradas
                </MenuItem>
                <MenuItem href="/list/exit-balance">
                    <MdArrowDownward></MdArrowDownward>Saídas
                </MenuItem>
                <MenuItem href="#">
                    <MdExitToApp></MdExitToApp>Sair
                </MenuItem>
            </MenuContainer>
        </Container>
    )
}
