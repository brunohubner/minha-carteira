import { Container } from "./styles"

export interface ISelectOptions {
    value: string | number
    label: string
    selected?: boolean
}

interface IProps {
    options: ISelectOptions[]
}

export default function SelectInput({ options }: IProps) {
    return (
        <Container>
            <select>
                {options.map((option, i) => (
                    <option
                        key={`${i}_${option.value}`}
                        selected={option?.selected}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    )
}
