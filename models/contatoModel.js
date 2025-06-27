const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  foto: { type: String, required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Contato', contatoSchema);