import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
import { Container } from "./styles"

interface IProps {}

export default function List({}: IProps) {
    const options = [
        { label: "Bruno", value: 1 },
        { label: "Ana", value: 2 },
        { label: "Bia", value: 2 }
    ]

    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#F7931B">
                <SelectInput options={options}></SelectInput>
                <SelectInput options={options}></SelectInput>
            </ContentHeader>
        </Container>
    )
}
