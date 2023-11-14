export const buscarTodosAlunos = (req, res) => {
    return res.status(200).send({ message: "Todos alunos via controller!", status:"Ok!" });
};

export const buscarAlunoPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Aluno com ID ${id}!`, origem:"Controller!" });
};

export const criarAluno = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!" });
    }
    return res.status(201).send({ message: "Rota POST alunos!", origem:"Controller!" });
};

export const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!" });
    }

    return res.status(200).send({ message: `Rota PUT aluno com ID ${id}!`, origem:"Controller!" });
};

export const deletarAluno = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Rota DELETE aluno com ID ${id}!`, origem:"Controller!" });
}