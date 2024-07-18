// Importando a biblioteca mongoose para trabalhar com o MongoDB
import mongoose from "mongoose";

// Importando classes de erro personalizadas
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// Middleware para manipular diferentes tipos de erros
function manipuladorDeErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        // Lida com erros de tipo CastError do Mongoose
        new RequisicaoIncorreta().enviarResposta(res);
        
    } else if (erro instanceof mongoose.Error.ValidationError) {
        // Lida com erros de validação do Mongoose
        new ErroValidacao(erro).enviarResposta(res);

    } else if (erro instanceof ErroBase) {
        // Lida com erros que são instâncias de ErroBase
        erro.enviarResposta(res);
    
    } else {
        // Lida com todos os outros tipos de erro
        new ErroBase().enviarResposta(res);
    }
};

// Exportando o middleware para ser utilizado em outras partes da aplicação
export default manipuladorDeErros;
