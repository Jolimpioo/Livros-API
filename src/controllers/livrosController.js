import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores, livros } from "../models/index.js";

// Controlador para operações relacionadas a livros
class LivroController {

  // Método estático para listar todos os livros
  static listarLivros = async (req, res, next) => {
    try {
      // Busca todos os livros
      const buscaLivros = livros.find();

      req.resultado = buscaLivros;
      next();
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para listar um livro pelo ID
  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Busca o livro pelo ID e popula o campo "autor" com o nome
      const livroResultado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do Livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para cadastrar um novo livro
  static cadastrarLivro = async (req, res, next) => {
    try {
      // Cria uma nova instância de Livro com os dados fornecidos
      let livro = new livros(req.body);

      // Salva o livro no banco de dados
      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para atualizar um livro existente
  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Atualiza o livro pelo ID
      const livroResultado = await livros.findByIdAndUpdate(id, {$set: req.body});

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para excluir um livro existente
  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Remove o livro pelo ID
      const livroResultado = await livros.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para listar livros com base em filtros
  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        // Aplica filtros e popula o campo "autor"
        const livrosResultado = livros
          .find(busca)
          .populate("autor");

        req.resultado = livrosResultado;
        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };
};

// Função auxiliar para processar parâmetros de busca
async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};

  // Configura filtros de número de páginas
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autores.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
};

export default LivroController;
