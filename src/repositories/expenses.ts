const expenses = [
    {
        description: "Energia elétrica",
        amount: 150.55,
        type: "exit",
        frequency: "recurrent",
        date: "2020-01-10"
    },
    {
        description: "Água",
        amount: 75.55,
        type: "exit",
        frequency: "recurrent",
        date: "2020-01-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-01-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-01-23"
    },
    {
        description: "Compras do mês",
        amount: 625.78,
        type: "exit",
        frequency: "recurrent",
        date: "2020-01-23"
    },
    {
        description: "Lanche",
        amount: 45.7,
        type: "exit",
        frequency: "eventual",
        date: "2020-01-23"
    },
    {
        description: "Blusa",
        amount: 95.7,
        type: "exit",
        frequency: "eventual",
        date: "2020-01-23"
    },
    {
        description: "Energia elétrica",
        amount: 125.55,
        type: "exit",
        frequency: "recurrent",
        date: "2020-02-10"
    },
    {
        description: "Água",
        amount: 90.15,
        type: "exit",
        frequency: "recurrent",
        date: "2020-02-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-02-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-02-23"
    },
    {
        description: "Compras do mês",
        amount: 540.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-02-25"
    },
    {
        description: "Parcela do Celular 1/5",
        amount: 150.99,
        type: "exit",
        frequency: "eventual",
        date: "2020-02-26"
    },
    {
        description: "Cinema",
        amount: 45.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-02-23"
    },
    {
        description: "Energia elétrica",
        amount: 97.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-03-10"
    },
    {
        description: "Água",
        amount: 100.1,
        type: "exit",
        frequency: "recurrent",
        date: "2020-03-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-03-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-03-23"
    },
    {
        description: "Compras do mês",
        amount: 800.5,
        type: "exit",
        frequency: "recurrent",
        date: "2020-03-17"
    },
    {
        description: "Parcela do Celular 2/5",
        amount: 150.99,
        type: "exit",
        frequency: "eventual",
        date: "2020-03-18"
    },
    {
        description: "Troca de Oléo do carro",
        amount: 90.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-03-23"
    },
    {
        description: "Energia elétrica",
        amount: 75.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-04-10"
    },
    {
        description: "Água",
        amount: 80.33,
        type: "exit",
        frequency: "recurrent",
        date: "2020-04-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-04-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-04-23"
    },
    {
        description: "Compras do mês",
        amount: 600.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-04-25"
    },
    {
        description: "Parcela do Celular 3/5",
        amount: 150.99,
        type: "exit",
        frequency: "eventual",
        date: "2020-04-26"
    },
    {
        description: "Ebook de React Js",
        amount: 85.95,
        type: "exit",
        frequency: "eventual",
        date: "2020-04-13"
    },
    {
        description: "Energia elétrica",
        amount: 125.55,
        type: "exit",
        frequency: "recurrent",
        date: "2020-05-10"
    },
    {
        description: "Água",
        amount: 90.15,
        type: "exit",
        frequency: "recurrent",
        date: "2020-05-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-05-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-05-23"
    },
    {
        description: "Compras do mês",
        amount: 540.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-05-25"
    },
    {
        description: "Parcela do Celular 4/5",
        amount: 150.99,
        type: "exit",
        frequency: "eventual",
        date: "2020-05-26"
    },
    {
        description: "Blusa Iron Man",
        amount: 150.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-01-23"
    },
    {
        description: "Energia elétrica",
        amount: 200.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-06-10"
    },
    {
        description: "Água",
        amount: 150.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-06-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-06-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-06-23"
    },
    {
        description: "Compras do mês",
        amount: 559.15,
        type: "exit",
        frequency: "recurrent",
        date: "2020-06-25"
    },
    {
        description: "Parcela do Celular 5/5",
        amount: 150.99,
        type: "exit",
        frequency: "eventual",
        date: "2020-06-26"
    },
    {
        description: "Perfume",
        amount: 250.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-06-21"
    },
    {
        description: "Energia elétrica",
        amount: 250.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-07-10"
    },
    {
        description: "Água",
        amount: 90.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-07-15"
    },
    {
        description: "Telefone",
        amount: 99.99,
        type: "exit",
        frequency: "recurrent",
        date: "2020-07-23"
    },
    {
        description: "Plano de Saúde",
        amount: 300.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-07-23"
    },
    {
        description: "Compras do mês",
        amount: 700.0,
        type: "exit",
        frequency: "recurrent",
        date: "2020-07-25"
    },
    {
        description: "Cafeteira",
        amount: 250.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-07-26"
    },
    {
        description: "Pizza",
        amount: 60.0,
        type: "exit",
        frequency: "eventual",
        date: "2020-07-19"
    },
    {
        description: "Pizza",
        amount: 750.01,
        type: "exit",
        frequency: "eventual",
        date: "2020-07-19"
    }
]

export default expenses
