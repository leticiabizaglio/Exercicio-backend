import { Student } from "../moduls/students/Student.js";
import { studentsList } from "../moduls/students/StudentsList.js";

const list = new studentsList();


export const buscarTodosAlunos = (req, res) => {

    const students = list.getAllStudents();

    if(!students.length){
        return res.status(400).send({ message: "Alunos não cadastrados!", origem:"Not Found!" });
    }
    return res.status(200).send({ message: "Todos alunos via controller!", status:"Ok!", data: students});
};

export const buscarAlunoPorId = (req, res) => {
    const { id } = req.params;

    const student = list.getStudentById(id);

    if(!student) {
        return res.status(400).send({ message: "Nenhum aluno encontrado!", origem:"Controller!" });
    }
    return res.status(200).send({ message: `Aluno com ID ${id}!`, origem:"Controller!", data:student });
};

export const criarAluno = (req, res) => {
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!" });
    }
    
 const student = new Student(nome, email, idade);
    list.createStudent(student);

    return res.status(201).send({ message: "Rota POST alunos!", origem:"Controller!" , data: student});
};

export const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const {nome, email, idade} = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).send({ message: "Dados Inválidos!", origem:"Controller!" });
    }

    const student = list.updateStudent(id, nome, email, idade);

    if(!student) {
        return res.status(400).send({ message: "Nenhum aluno encontrado!", origem:"Controller!" });
    }

    return res.status(200).send({ message: `Rota PUT aluno com ID ${id}!`, origem:"Controller!", data: student });
};

export const deletarAluno = (req, res) => {
    const { id } = req.params;

    const student = list.removeStudent(id);

    if(!student) {
        return res.status(400).send({ message: "Nenhum aluno encontrado!", origem:"Controller!" });
    }

    list.removeStudent(id);
    return res.status(200).send({ message: `Rota DELETE aluno com ID ${id}!`, origem:"Controller!", data: student });
}