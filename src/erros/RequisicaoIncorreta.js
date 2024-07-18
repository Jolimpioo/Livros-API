// Importando a classe base para erros personalizados
import ErroBase from "./ErroBase.js";

// Classe para representar erros de requisição incorreta (400)
class RequisicaoIncorreta extends ErroBase {
    // Construtor da classe RequisicaoIncorreta
    constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
        // Chama o construtor da classe ErroBase com a mensagem e o status 400
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;
