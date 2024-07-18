// Importando a classe de erro personalizada RequisicaoIncorreta
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// Middleware para realizar paginação de resultados
async function paginar(req, res, next) {
   try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

    // Separando o campo de ordenação e a ordem (ascendente ou descendente)
    let [campoOrdenacao, ordem] = ordenacao.split(":");
    
    // Convertendo os parâmetros para números inteiros
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;

    // Verificando se os parâmetros de paginação são válidos
    if (limite > 0 && pagina > 0) {
      // Realizando a consulta paginada
      const resultadoPaginado = await resultado.find()
        .sort({ [campoOrdenacao]: ordem })
        .skip((pagina - 1) * limite)
        .limit(limite)
        .exec();

      // Retornando os resultados paginados como resposta
      res.status(200).json(resultadoPaginado);
    } else {
      // Caso os parâmetros sejam inválidos, gerando um erro de requisição incorreta
      next(new RequisicaoIncorreta());
    }
    
   } catch (erro) {
     // Passando qualquer erro capturado para o próximo middleware de erro
     next(erro);
   } 
}

// Exportando o middleware para ser utilizado em outras partes da aplicação
export default paginar;
