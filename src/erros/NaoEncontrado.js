// Importando a classe base para erros personalizados
import ErroBase from "./ErroBase.js";

// Classe para representar erros de página não encontrada (404)
class NaoEncontrado extends ErroBase {
    // Construtor da classe NaoEncontrado
    constructor(mensagem = "Página não encontrada") {
        // Chama o construtor da classe ErroBase com a mensagem e o status 404
        super(mensagem, 404);
    }
}

export default NaoEncontrado;
