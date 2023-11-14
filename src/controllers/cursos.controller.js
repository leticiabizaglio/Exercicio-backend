export const buscarTodosCursos = (req, res) => {
    return res.status(200).send({ message: "Todos os cursos via controller!", status:"Ok!" });
};

export const buscarAlunoPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Curso por ID ${id}!`, origem:"Controller!" });
};

export const criarCurso = (req, res) => {
    const {nome, descricao, limiteVagas} = req.body;

    if(!nome || !descricao || !limiteVagas) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!"  });
    }
    return res.status(201).send({ message2: "Rota POST cursos!", origem:"Controller!",message: `nome: ${nome}, descrição: ${descricao}, limiteVagas: ${limiteVagas}`});
};

export const atualizarCurso = (req, res) => {
    const { id } = req.params;
    const {nome, descricao, limiteVagas} = req.body;

    if(!nome || !descricao || !limiteVagas) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!" });
    }

    return res.status(200).send({ message: `Rota PUT curso com ID ${id}!`, origem:"Controller!" });
}

export const deletarCurso = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Rota DELETE curso com ID ${id}!`, origem:"Controller!" });
}