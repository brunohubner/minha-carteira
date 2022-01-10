import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
import { Container } from "./styles"

export default function Dashboard() {
    const options = [
        { label: "Bruno", value: 1 },
        { label: "Ana", value: 2 },
        { label: "Bia", value: 2 }
    ]
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#E44C4E">
                <SelectInput
                    defaultValue={""}
                    onChange={() => {}}
                    options={options}
                ></SelectInput>
                <SelectInput
                    defaultValue={""}
                    onChange={() => {}}
                    options={options}
                ></SelectInput>
            </ContentHeader>
        </Container>
    )
}
