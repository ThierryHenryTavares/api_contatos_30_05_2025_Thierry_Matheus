const Usuario = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    const usuario = new Usuario({ nome, email, senha });
    await usuario.save();
    res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao registrar usuário', erro: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario || !(await usuario.compararSenha(senha))) {
      return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro no login', erro: err.message });
  }
};