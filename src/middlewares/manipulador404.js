// Importando a classe de erro personalizada NaoEncontrado
import NaoEncontrado from "../erros/NaoEncontrado.js";

// Middleware para manipular erros 404
function manipulador404(req, res, next) {
    // Criando uma instância do erro NaoEncontrado
    const erro404 = new NaoEncontrado();
    
    // Passando o erro para o próximo middleware de tratamento de erros
    next(erro404);
}

// Exportando o middleware para ser utilizado em outras partes da aplicação
export default manipulador404;
