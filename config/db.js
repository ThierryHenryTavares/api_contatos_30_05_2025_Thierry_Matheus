const mongoose = require('mongoose');

function conectarBanco() {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch((err) => {
      console.error('Erro ao conectar ao MongoDB:', err);
      process.exit(1);
    });
}

module.exports = conectarBanco;