import "dotenv/config"; // Importa e carrega variáveis de ambiente do arquivo .env
import app from "./src/app.js"; // Importa a instância do aplicativo Express

// Define a porta do servidor, usando a variável de ambiente PORT ou 3000 como padrão
const port = process.env.PORT || 3000;

// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`); // Mensagem de sucesso quando o servidor estiver escutando
});
