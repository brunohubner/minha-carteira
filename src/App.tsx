import Dashboard from "./pages/Dashboard"
import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"
import Layout from "./components/Layout"

export default function App() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles></GlobalStyles>
            <Layout>
                <Dashboard></Dashboard>
            </Layout>
        </ThemeProvider>
    )
}
