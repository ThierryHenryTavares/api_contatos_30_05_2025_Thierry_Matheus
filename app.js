const express = require('express');
const dotenv = require('dotenv');
const conectarBanco = require('./config/db');
const contatoRoutes = require('./routes/contatoRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/usuarios', userRoutes); // públicas
app.use('/api/contatos', authMiddleware, contatoRoutes); // protegidas

conectarBanco();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));