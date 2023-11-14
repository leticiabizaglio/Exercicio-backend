import {Router} from "express";
import {buscarTodosCursos} from "../controllers/cursos.controller.js";
import {buscarAlunoPorId} from "../controllers/cursos.controller.js";
import {criarCurso} from "../controllers/cursos.controller.js";
import {atualizarCurso} from "../controllers/cursos.controller.js";
import {deletarCurso} from "../controllers/cursos.controller.js";

const rotasCurso = Router();

rotasCurso.get("/", buscarTodosCursos);

rotasCurso.get("/:id", buscarAlunoPorId);

rotasCurso.post("/", criarCurso);

rotasCurso.put("/:id", atualizarCurso);

rotasCurso.delete("/:id", deletarCurso);

export default rotasCurso;