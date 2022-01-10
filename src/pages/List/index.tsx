import { useMemo } from "react"
import { useParams } from "react-router-dom"
import ContentHeader from "../../components/ContentHeader"
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import SelectInput, { ISelectOptions } from "../../components/SelectInput"
import { Container, Content, Filters } from "./styles"

interface IPageTitle {
    label: string
    lineColor: string
}

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1

const baseMonths = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" }
]

const months = baseMonths.map(month => ({
    ...month,
    selected: month.value === currentMonth
}))

const years: ISelectOptions[] = []

for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    years.push({
        value: year,
        label: `${year}`,
        selected: year === currentYear
    })
}

export default function List() {
    const { type } = useParams()

    const title = useMemo(() => {
        const pageTitle: IPageTitle =
            type === "entry-balance"
                ? {
                      label: "Entradas",
                      lineColor: "#F7931B"
                  }
                : {
                      label: "Saídas",
                      lineColor: "#4E41F0"
                  }
        return pageTitle
    }, [type])

    return (
        <Container>
            <ContentHeader title={title.label} lineColor={title.lineColor}>
                <SelectInput options={months}></SelectInput>
                <SelectInput options={years}></SelectInput>
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
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
