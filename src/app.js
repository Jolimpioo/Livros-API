import express from "express";
import db from "./config/dbConnect.js"; // Importa a configuração de conexão com o banco de dados
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js"; // Importa o middleware para tratamento de erros
import manipulador404 from "./middlewares/manipulador404.js"; // Importa o middleware para tratar erros 404
import routes from "./routes/index.js"; // Importa as rotas da aplicação

// Configura o evento de erro na conexão com o banco de dados
db.on("error", console.log.bind(console, "Erro de conexão"));

// Configura o evento quando a conexão com o banco de dados é estabelecida com sucesso
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

// Cria uma instância do aplicativo Express
const app = express();

// Configura o middleware para análise de JSON nas requisições
app.use(express.json());

// Configura as rotas da aplicação
routes(app);

// Configura o middleware para tratamento de erros 404 (não encontrados)
app.use(manipulador404);

// Configura o middleware para tratamento de erros gerais
app.use(manipuladorDeErros);

// Exporta a instância do aplicativo para ser usada em outros módulos
export default app;
