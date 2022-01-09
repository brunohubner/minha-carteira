import { Container, Controllers, TitleContainer } from "./styles"

interface IProps {}

export default function ContentHeader({}: IProps) {
    return (
        <Container>
            <TitleContainer>
                <h1>Dashboard</h1>
            </TitleContainer>
            <Controllers>
                <button type="submit">Button A</button>
                <button type="submit">Button B</button>
            </Controllers>
        </Container>
    )
}
