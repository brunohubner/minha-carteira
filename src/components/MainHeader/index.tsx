import { useMemo } from "react"
import emojis from "../../utils/emojis"
import Toggle from "../Toggle"
import { Container, Profile, Username, Wellcome } from "./styles"

interface IProps {}

export default function MainHeader({}: IProps) {
    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <Toggle></Toggle>
            <Profile>
                <Wellcome>Olá, </Wellcome>
                <Username>Bruno Hubner {emoji}</Username>
            </Profile>
        </Container>
    )
}