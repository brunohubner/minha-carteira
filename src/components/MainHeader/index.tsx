import { useMemo } from "react"
import { useTheme } from "../../context/ThemeContext"
import emojis from "../../utils/emojis"
import Toggle from "../Toggle"
import { Container, Profile, Username, Wellcome } from "./styles"

export default function MainHeader() {
    const { isDarkTheme, toggleTheme } = useTheme()

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={isDarkTheme}
                onChange={toggleTheme}
            ></Toggle>
            <Profile>
                <Wellcome>Olá, </Wellcome>
                <Username>Bruno Hubner {emoji}</Username>
            </Profile>
        </Container>
    )
}
