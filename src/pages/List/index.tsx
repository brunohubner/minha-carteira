import ContentHeader from "../../components/ContentHeader"
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import SelectInput from "../../components/SelectInput"
import { Container, Content } from "./styles"

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
            <Content>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
                <HistoryFinanceCard
                    title="Conta de Luz"
                    subtitle="10/01/2022"
                    tagColor="#E44C4E"
                    amount="R$ 200,00"
                ></HistoryFinanceCard>
            </Content>
        </Container>
    )
}
