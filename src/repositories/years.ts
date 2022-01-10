import { ISelectOptions } from "../components/SelectInput"

const currentYear = new Date().getFullYear()

const years: ISelectOptions[] = []

for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    years.push({
        value: year,
        label: `${year}`,
        selected: year === currentYear
    })
}

export { years }