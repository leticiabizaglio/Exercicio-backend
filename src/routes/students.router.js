import {Router} from "express";
import {buscarTodosAlunos} from "../controllers/students.controller.js";
import {buscarAlunoPorId} from "../controllers/students.controller.js";
import {criarAluno} from "../controllers/students.controller.js";
import {atualizarAluno} from "../controllers/students.controller.js";
import {deletarAluno} from "../controllers/students.controller.js";

const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos);

rotasAlunos.get("/:id", buscarAlunoPorId);

rotasAlunos.post("/", criarAluno);

rotasAlunos.put("/:id", atualizarAluno);

rotasAlunos.delete("/:id", deletarAluno);

export default rotasAlunos;