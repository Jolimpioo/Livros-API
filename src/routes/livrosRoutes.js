// Importando dependências necessárias
import express from "express";
import LivroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

// Criando um roteador do Express
const router = express.Router();

// Definindo as rotas para o recurso "livros"

// Rota para listar todos os livros com paginação
// GET /livros
router
  .get("/livros", LivroController.listarLivros, paginar)

  // Rota para listar livros por filtro com paginação
  // GET /livros/busca
  .get("/livros/busca", LivroController.listarLivroPorFiltro, paginar)

  // Rota para listar um livro específico por ID
  // GET /livros/:id
  .get("/livros/:id", LivroController.listarLivroPorId)

  // Rota para cadastrar um novo livro
  // POST /livros
  .post("/livros", LivroController.cadastrarLivro)

  // Rota para atualizar um livro existente por ID
  // PUT /livros/:id
  .put("/livros/:id", LivroController.atualizarLivro)

  // Rota para excluir um livro existente por ID
  // DELETE /livros/:id
  .delete("/livros/:id", LivroController.excluirLivro);

// Exportando o roteador para ser usado em outras partes da aplicação
export default router;
