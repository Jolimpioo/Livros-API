// Importando a biblioteca mongoose para trabalhar com o MongoDB
import mongoose from "mongoose";

// Definindo o schema para o modelo "livros"
const livroSchema = new mongoose.Schema(
  {
    // Campo "id" do livro
    id: { type: String },
    
    // Campo "titulo" do livro, é obrigatório
    titulo: {
      type: String,
      required: [true, "O titulo do livro é obrigatório"]
    },
    
    // Campo "autor" do livro, é obrigatório e faz referência ao modelo "autores"
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    
    // Campo "editora" do livro, é obrigatório e deve ser uma das editoras permitidas
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    
    // Campo "numeroPaginas" do livro, com validação customizada para o número de páginas
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
      // Validações nativas do mongoose comentadas para referência
      // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      // max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    }
  }
);

// Criando o modelo "livros" baseado no schema definido
const livros = mongoose.model("livros", livroSchema);

// Exportando o modelo para ser utilizado em outras partes da aplicação
export default livros;
