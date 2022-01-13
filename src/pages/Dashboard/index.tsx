import { useMemo, useState } from "react"
import ContentHeader from "../../components/ContentHeader"
import MessageBox from "../../components/MessageBox"
import SelectInput from "../../components/SelectInput"
import WalletBox from "../../components/WalletBox"
import expenses from "../../repositories/expenses"
import gains from "../../repositories/gains"
import { IResponseData } from "../../repositories/IResponseData"
import { months } from "../../repositories/months"
import { Container, Content } from "./styles"
import happyImg from "../../assets/happy.svg"
import sadImg from "../../assets/sad.svg"
import grinningImg from "../../assets/grinning.svg"
import opsImg from "../../assets/ops.svg"
import PieChart from "../../components/PieChart"
import HistoryBox from "../../components/HistoryBox"
import BarChartBox from "../../components/BarChartBox"

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

    function getTotalBalances(collection: IResponseData[]): number {
        return collection.reduce((total, item) => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if (month === monthSelected && year === yearSelected) {
                return total + item.amount
            }
            return total
        }, 0)
    }

    const totalExpenses = useMemo(() => {
        return getTotalBalances(expenses)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        return getTotalBalances(gains)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected])

    const balance = useMemo(() => {
        return totalGains - totalExpenses
    }, [totalGains, totalExpenses])

    const relationExpensesVesusGains = useMemo(() => {
        const total = totalGains + totalExpenses
        const percentGains = (totalGains / total) * 100 || 0
        const percentExpenses = (totalExpenses / total) * 100 || 0

        return [
            {
                name: "Entradas",
                value: totalGains,
                percent: Math.round(percentGains),
                color: "#F7931B"
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: Math.round(percentExpenses),
                color: "#E44C4E"
            }
        ]
    }, [totalGains, totalExpenses])

    const message = useMemo(() => {
        if (balance > 0) {
            return {
                title: "Muito bem",
                description: "Sua carteira está positiva",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }
        if (balance < 0) {
            return {
                title: "Que triste!",
                description: "Neste mês você gastou mais do que deveria!",
                footerText:
                    "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }
        if (balance === 0 && totalExpenses === 0) {
            return {
                title: "Ops!",
                description: "Neste mês não há registros!",
                footerText: "Não há resgitros para exibir este mês",
                icon: opsImg
            }
        }
        return {
            title: "Ufa!",
            description: "Neste mês você gastou exatamente o que ganhou!",
            footerText:
                "Tenha cuidado! Tente poupar seu dinheiro no próximo mês!",
            icon: grinningImg
        }
    }, [balance, totalExpenses])

    function getHistoryData(collection: IResponseData[], month: number) {
        return collection.reduce((total, item) => {
            const date = new Date(item.date)
            const collectionMonth = date.getMonth()
            const collectionYear = date.getFullYear()

            if (collectionMonth === month && collectionYear === yearSelected) {
                return total + item.amount
            }
            return total
        }, 0)
    }

    const historyData = useMemo(() => {
        return months.map((_, month) => {
            const amountEntry = getHistoryData(gains, month)
            const amountOutput = getHistoryData(expenses, month)

            const result = {
                monthNumber: month,
                month: months[month].label.substring(0, 3),
                amountEntry: +amountEntry.toFixed(2),
                amountOutput: +amountOutput.toFixed(2)
            }
            return result
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yearSelected])

    function relationRecurrentVersusEventual(collection: IResponseData[]) {
        let amountRecurrent = 0
        let amountEventual = 0

        collection
            .filter(item => {
                const date = new Date(item.date)
                const year = date.getFullYear()
                const month = date.getMonth() + 1

                return month === monthSelected && year === yearSelected
            })
            .forEach(item => {
                if (item.frequency === "recurrent") {
                    return (amountRecurrent += item.amount)
                }
                if (item.frequency === "eventual") {
                    return (amountEventual += item.amount)
                }
            })

        const total = amountEventual + amountRecurrent

        return [
            {
                name: "Recorrentes",
                amount: amountRecurrent,
                percent: Math.round((amountRecurrent / total) * 100 || 0),
                color: "#4E41F0"
            },
            {
                name: "Eventuais",
                amount: amountEventual,
                percent: Math.round((amountEventual / total) * 100 || 0),
                color: "#E44C4E"
            }
        ]
    }

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {
        return relationRecurrentVersusEventual(expenses)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        return relationRecurrentVersusEventual(gains)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [monthSelected, yearSelected])

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
                    amount={balance}
                    color="#4E41F0"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="dolar"
                ></WalletBox>
                <WalletBox
                    title="Entradas"
                    amount={totalGains}
                    color="#F7931B"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="arrowUp"
                ></WalletBox>
                <WalletBox
                    title="Saídas"
                    amount={totalExpenses}
                    color="#E44C4E"
                    footerLabel="atualizados com base nas entradas e saídas"
                    icon="arrowDown"
                ></WalletBox>
                <MessageBox {...message}></MessageBox>
                <PieChart data={relationExpensesVesusGains}></PieChart>
                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                ></HistoryBox>
                <BarChartBox
                    title="Entradas"
                    data={relationGainsRecurrentVersusEventual}
                ></BarChartBox>
                <BarChartBox
                    title="Saídas"
                    data={relationExpensevesRecurrentVersusEventual}
                ></BarChartBox>
            </Content>
        </Container>
    )
}
