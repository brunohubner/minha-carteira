import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"
import List from "./pages/List"
import Routes from "./routes"

export default function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles></GlobalStyles>
            <Routes></Routes>
        </ThemeProvider>
    )
}
