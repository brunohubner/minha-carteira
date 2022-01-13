import { Container, Logo, FormContainer, FormTitle, Form } from "./styles"
import logoImg from "../../assets/logo.svg"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function SignIn() {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>
            <FormContainer>
                <FormTitle>Entrar</FormTitle>
                <Form onSubmit={e => e.preventDefault()}>
                    <Input type="text" placeholder="Email" required></Input>
                    <Input type="password" placeholder="Senha" required></Input>
                    <Button type="submit">Acessar</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}
