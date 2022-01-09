import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItem
} from "./styles"
import {
    MdArrowDownward,
    MdArrowUpward,
    MdDashboard,
    MdExitToApp
} from "react-icons/md"
import logoImg from "../../assets/logo.svg"

interface IProps {}

export default function Aside({}: IProps) {
    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira"></LogoImg>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItem href="#">
                    <MdDashboard></MdDashboard>Dashboard
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowUpward></MdArrowUpward>Entradas
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowDownward></MdArrowDownward>Saídas
                </MenuItem>
                <MenuItem href="#">
                    <MdExitToApp></MdExitToApp>Sair
                </MenuItem>
            </MenuContainer>
        </Container>
    )
}
