// Importando dependências necessárias
import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";

// Criando um roteador do Express
const router = express.Router();

// Definindo as rotas para o recurso "autores"

// Rota para listar todos os autores
// GET /autores
// Middleware "paginar" é aplicado para paginar os resultados
router
  .get("/autores", AutorController.listarAutores, paginar)

  // Rota para listar um autor específico por ID
  // GET /autores/:id
  .get("/autores/:id", AutorController.listarAutorPorId)

  // Rota para cadastrar um novo autor
  // POST /autores
  .post("/autores", AutorController.cadastrarAutor)

  // Rota para atualizar um autor existente por ID
  // PUT /autores/:id
  .put("/autores/:id", AutorController.atualizarAutor)

  // Rota para excluir um autor existente por ID
  // DELETE /autores/:id
  .delete("/autores/:id", AutorController.excluirAutor);

// Exportando o roteador para ser usado em outras partes da aplicação
export default router;
