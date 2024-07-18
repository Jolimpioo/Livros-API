import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

// Controlador para operações relacionadas a autores
class AutorController {

  // Método estático para listar todos os autores
  static listarAutores = async (req, res, next) => {
    try {
      // Busca todos os autores
      const autoresResultado = autores.find();

      req.resultado = autoresResultado;
      next();
    } catch (erro) {
      // Em caso de erro, retorna uma resposta com status 500
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  // Método estático para listar um autor pelo ID
  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Busca o autor pelo ID
      const autorResultado = await autores.findById(id);
      
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para cadastrar um novo autor
  static cadastrarAutor = async (req, res, next) => {
    try {
      // Cria uma nova instância de Autor com os dados fornecidos
      let autor = new autores(req.body);

      // Salva o autor no banco de dados
      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para atualizar um autor existente
  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Atualiza o autor pelo ID
      const autorResultado = await autores.findByIdAndUpdate(id, {$set: req.body});

      if (autorResultado !== null) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Método estático para excluir um autor existente
  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      // Remove o autor pelo ID
      const autorResultado = await autores.findByIdAndDelete(id);

      if (autorResultado !== null) {
        res.status(200).send({message: "Autor removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
