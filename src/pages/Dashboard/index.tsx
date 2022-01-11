import { useMemo, useState } from "react"
import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
import WalletBox from "../../components/WalletBox"
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import { IResponseData } from "../../repositories/IResponseData"
import { months } from "../../repositories/months"
import { Container, Content } from "./styles"

export default function Dashboard() {
    const [monthSelected, setMonthSelected] = useState(
        new Date().getMonth() + 1
    )
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear())

    const years = useMemo(() => {
        let uniqueYears: number[] = []
        const responseData: IResponseData[] = [...gains, ...expenses]

        responseData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => ({
            value: year,
            label: String(year)
        }))
    }, [])

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    defaultValue={monthSelected}
                    onChange={e => setMonthSelected(+e.target.value)}
                    options={months}
                ></SelectInput>
                <SelectInput
                    defaultValue={yearSelected}
                    onChange={e => setYearSelected(+e.target.value)}
                    options={years}
                ></SelectInput>
            </ContentHeader>
            <Content>
                <WalletBox
                    title="Saldo"
                    amount={150.0}
                    color="#4E41F0"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="dolar"
                ></WalletBox>
                <WalletBox
                    title="Entradas"
                    amount={5000.0}
                    color="#F7931B"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="arrowUp"
                ></WalletBox>
                <WalletBox
                    title="Saídas"
                    amount={4650.0}
                    color="#E44C4E"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="arrowDown"
                ></WalletBox>
            </Content>
        </Container>
    )
}
