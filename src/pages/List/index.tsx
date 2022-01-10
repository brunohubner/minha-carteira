import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import ContentHeader from "../../components/ContentHeader"
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import SelectInput from "../../components/SelectInput"
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import { months } from "../../repositories/months"
import { years } from "../../repositories/years"
import { Container, Content, Filters } from "./styles"

interface IPageTitle {
    label: string
    lineColor: string
}

interface IData {
    id: string
    description: string
    amountFormatted: string
    frequency: string
    dateFormatted: string
    tagColor: string
}

export default function List() {
    const [data, setData] = useState<IData[]>([])
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

    const listData = useMemo(() => {
        return type === "entry-balance" ? gains : expenses
    }, [type])

    function normalizeData() {
        setData(
            listData.map(item => ({
                id: String(Math.random() * listData.length),
                description: item.description,
                amountFormatted: String(item.amount),
                dateFormatted: item.date,
                frequency: item.frequency,
                tagColor: item.frequency === "recurrent" ? "#4E41F0" : "#E44C4E"
            }))
        )
    }

    useEffect(normalizeData, [listData])

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
                {data.map(item => (
                    <HistoryFinanceCard
                        key={item.id}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        tagColor={item.tagColor}
                        amount={item.amountFormatted}
                    ></HistoryFinanceCard>
                ))}
            </Content>
        </Container>
    )
}
