// Importando a classe de erro personalizada RequisicaoIncorreta
import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

// Classe para representar erros de validação
class ErroValidacao extends RequisicaoIncorreta {
    // Construtor da classe ErroValidacao
    constructor(erro) {
        // Obtém todas as mensagens de erro do objeto de erro fornecido
        const mensagensErro = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");
        
        // Chama o construtor da classe RequisicaoIncorreta com a mensagem de erro formatada
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
};

export default ErroValidacao;
