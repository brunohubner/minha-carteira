import { Container } from "./styles"

interface IOptions {
    value: string | number
    label: string
}

interface IProps {
    options: IOptions[]
}

export default function SelectInput({ options }: IProps) {
    return (
        <Container>
            <select>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </Container>
    )
}
