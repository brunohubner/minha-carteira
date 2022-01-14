import { Container, Logo, FormContainer, FormTitle, Form } from "./styles"
import logoImg from "../../assets/logo.svg"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

export default function SignIn() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { signIn } = useAuth()

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>
            <FormContainer>
                <FormTitle>Entrar</FormTitle>
                <Form
                    onSubmit={e => {
                        e.preventDefault()
                        signIn(email, password)
                    }}
                >
                    <Input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    ></Input>
                    <Input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    ></Input>
                    <Button type="submit">Acessar</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}
