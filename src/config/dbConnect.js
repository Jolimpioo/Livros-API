import mongoose from "mongoose";

// Estabelece a conexão com o banco de dados MongoDB usando a string de conexão armazenada na variável de ambiente STRING_CONEXAO_DB
mongoose.connect(process.env.STRING_CONEXAO_DB);

// Obtém a instância de conexão do Mongoose
let db = mongoose.connection;

// Exporta a instância de conexão para ser utilizada em outras partes da aplicação
export default db;
