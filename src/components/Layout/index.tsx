import Aside from "../Aside"
import Content from "../Content"
import MainHeader from "../MainHeader"
import { Grid } from "./styles"

interface IProps {}

export default function Layout({}: IProps) {
    return (
        <Grid>
            <MainHeader></MainHeader>
            <Aside></Aside>
            <Content></Content>
        </Grid>
    )
}
