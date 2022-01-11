import dolar from "../../assets/dolar.svg"
import arrowDown from "../../assets/arrow-down.svg"
import arrowUp from "../../assets/arrow-up.svg"
import { Container } from "./styles"
import CountUp from "react-countup"

interface IProps {
    title: string
    amount: number
    footerLabel: string
    color: string
    icon: "dolar" | "arrowUp" | "arrowDown"
}

export default function WalletBox({
    amount,
    color,
    footerLabel,
    icon,
    title
}: IProps) {
    function iconSelected() {
        switch (icon) {
            case "dolar":
                return dolar
            case "arrowUp":
                return arrowUp
            case "arrowDown":
                return arrowDown
        }
    }

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix="R$ "
                    separator="."
                    decimal=","
                    decimals={2}
                    duration={2}
                ></CountUp>
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected()} alt={title} />
        </Container>
    )
}
