import { useState } from "react"
import { Container, ToggleLabel, ToggleSelector } from "./styles"

type Theme = "light" | "dark"

interface IProps {}

export default function Toggle({}: IProps) {
    const [theme, setTheme] = useState<Theme>("dark")

    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                uncheckedIcon={false}
                checkedIcon={false}
            ></ToggleSelector>
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}
