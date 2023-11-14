import {Router} from "express";
import rotasAlunos from "./students.router.js";
import rotasCurso from "./cursos.router.js";

const rotas = Router();

rotas.use("/alunos", rotasAlunos);
rotas.use("/cursos", rotasCurso);

rotas.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor OK!" });
});

export default rotas;