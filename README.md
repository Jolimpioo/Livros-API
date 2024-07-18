# Livros API

## Visão Geral

Esta API é construída com Node.js e Express, utilizando MongoDB para armazenamento de dados. O projeto é uma API RESTful que gerencia informações sobre livros e autores. Ele foi projetado para fornecer operações CRUD (Create, Read, Update, Delete) para ambos os recursos e inclui funcionalidades de paginação e filtragem.

## Estrutura do Projeto

1. **Configuração do Servidor (`src/server.js`):**
   - **Carregamento de Variáveis de Ambiente:** Utiliza o módulo `dotenv` para carregar variáveis de ambiente do arquivo `.env`.
   - **Inicialização do Servidor:** Configura e inicia o servidor Express na porta definida pela variável de ambiente `PORT` ou na porta padrão 3000.

2. **Conexão com o Banco de Dados (`src/config/dbConnect.js`):**
   - **Conexão com MongoDB:** Configura a conexão com o banco de dados MongoDB usando Mongoose. Define eventos para logar erros de conexão e confirmar sucesso.

3. **Rotas e Controladores:**
   - **Rotas (`src/routes/index.js`, `src/routes/livrosRoutes.js`, `src/routes/autoresRoutes.js`):**
     - Define as rotas para operações CRUD em livros e autores.
     - Utiliza os controladores para lidar com a lógica de negócio.
   - **Controladores (`src/controllers/livrosController.js`, `src/controllers/autoresController.js`):**
     - Implementa a lógica para listar, criar, atualizar e excluir livros e autores.
     - Inclui funcionalidades para buscar livros por filtros e realizar operações associadas aos autores.

4. **Modelos (`src/models/Livro.js`, `src/models/Autor.js`):**
   - **Modelos Mongoose:** Define esquemas para livros e autores, incluindo validações e tipos de dados.

5. **Middlewares:**
   - **Paginação (`src/middlewares/paginar.js`):**
     - Implementa a funcionalidade de paginação para listas de livros e autores.
   - **Tratamento de Erros (`src/middlewares/manipuladorDeErros.js`, `src/middlewares/manipulador404.js`):**
     - Define middlewares para tratamento de erros gerais e erros 404.
   - **Validação Global (`src/validadorGlobal.js`):**
     - Adiciona validações globais para strings em modelos Mongoose.

6. **Erros Personalizados (`src/erros/ErroBase.js`, `src/erros/RequisicaoIncorreta.js`, `src/erros/ErroValidacao.js`, `src/erros/NaoEncontrado.js`):**
   - **Erros Personalizados:** Define classes de erros personalizados para erros de validação, não encontrados, e requisições incorretas.

## Funcionalidades

- **Gerenciamento de Livros e Autores:**
  - **Livros:** CRUD completo, busca por filtros (editora, título, número de páginas, autor).
  - **Autores:** CRUD completo.
- **Paginação:** Suporta paginação em respostas de listas de livros e autores.
- **Tratamento de Erros:** Inclui tratamento de erros específicos e genéricos, com mensagens claras e códigos de status apropriados.
