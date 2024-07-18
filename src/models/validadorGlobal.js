// Importando a biblioteca mongoose para trabalhar com o MongoDB
import mongoose from "mongoose";

// Definindo uma validação global para campos do tipo String no Mongoose
mongoose.Schema.Types.String.set("validate", {
  // Validador que verifica se o valor da string não é vazio ou apenas espaços em branco
  validator: (valor) => valor.trim() !== "",
  
  // Mensagem de erro personalizada que inclui o nome do campo
  message: ({ path }) => `O campo ${path} foi fornecido em branco.`
});
