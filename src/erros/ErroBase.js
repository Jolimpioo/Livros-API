// Classe base para erros personalizados
class ErroBase extends Error {
    // Construtor da classe ErroBase
    constructor(mensagem = "Erro interno do servidor", status = 500) {
        // Chama o construtor da classe Error
        super();
        
        // Define a mensagem do erro
        this.message = mensagem;
        
        // Define o status HTTP do erro
        this.status = status;
    }

    // Método para enviar a resposta de erro ao cliente
    enviarResposta(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    }
};

export default ErroBase;
