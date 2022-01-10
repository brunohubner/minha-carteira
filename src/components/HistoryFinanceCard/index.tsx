import { Container, Tag } from "./styles"

interface IProps {
    title: string
    subtitle: string
    tagColor: string
    cardColor: string
    amount: string
}

export default function HistoryFinanceCard({
    amount,
    cardColor,
    subtitle,
    tagColor,
    title
}: IProps) {
    return (
        <Container color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}
