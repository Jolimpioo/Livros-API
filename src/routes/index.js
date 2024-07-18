// Importando dependências necessárias
import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

// Função para configurar as rotas principais da aplicação
const routes = (app) => {
  // Definindo a rota raiz que retorna uma mensagem de boas-vindas
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" });
  });

  // Usando middleware express.json() para parsear JSON e importando rotas de livros e autores
  app.use(
    express.json(),
    livros,
    autores
  );
};

// Exportando a função de configuração de rotas
export default routes;
