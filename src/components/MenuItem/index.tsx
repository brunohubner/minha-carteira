import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Anchor } from "./styles"

interface IProps {
    href: string
    children?: ReactNode
}

export default function MenuItem({ href, children }: IProps) {
    return (
        <Link to={href}>
            <Anchor>{children}</Anchor>
        </Link>
    )
}
