import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
import { Container } from "./styles"

interface IProps {}

export default function Dashboard({}: IProps) {
    const options = [
        { label: "Bruno", value: 1 },
        { label: "Ana", value: 2 },
        { label: "Bia", value: 2 }
    ]
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#E44C4E">
                <SelectInput options={options}></SelectInput>
                <SelectInput options={options}></SelectInput>
            </ContentHeader>
        </Container>
    )
}
