// Importando a biblioteca mongoose para trabalhar com o MongoDB
import mongoose from "mongoose";

// Definindo o schema para o modelo "autor"
const autorSchema = new mongoose.Schema(
  {
    // Campo "id" do autor
    id: { type: String },
    
    // Campo "nome" do autor, é obrigatório
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    
    // Campo "nacionalidade" do autor
    nacionalidade: { type: String }
  },
  {
    // Desativando a chave de versão (__v)
    versionKey: false
  }
);

// Criando o modelo "autores" baseado no schema definido
const autores = mongoose.model("autores", autorSchema);

// Exportando o modelo para ser utilizado em outras partes da aplicação
export default autores;
