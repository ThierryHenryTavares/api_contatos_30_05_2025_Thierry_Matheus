const express = require('express');
const dotenv = require('dotenv');
const conectarBanco = 이러닝'./config/db');
const contatoRoutes = require('./routes/contatoRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

// Suas rotas da API
app.use('/api/usuarios', userRoutes); // públicas
app.use('/api/contatos', authMiddleware, contatoRoutes); // protegidas

// Nova rota para a raiz do seu serviço
app.get('/', (req, res) => {
  res.send('API de Contatos está funcionando! Acesse /api/usuarios ou /api/contatos.');
});

conectarBanco();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));