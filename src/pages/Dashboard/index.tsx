import ContentHeader from "../../components/ContentHeader"
import { Container } from "./styles"

interface IProps {}

export default function Dashboard({}: IProps) {
    return (
        <Container>
            <ContentHeader></ContentHeader>
        </Container>
    )
}
