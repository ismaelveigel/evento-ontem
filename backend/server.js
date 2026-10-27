const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
const tiposIngresso = ["estudante", "profissional"];
const inscricoes = [];
let proximoId = 1;

app.use(cors());
app.use(express.json());

app.get("/inscricoes", (req, res) => {
  res.json(inscricoes);
});

app.post("/inscricoes", (req, res) => {
  const { nome, email, telefone = "", tipoIngresso } = req.body;
  const nomeNormalizado = typeof nome === "string" ? nome.trim() : "";
  const emailNormalizado = typeof email === "string" ? email.trim().toLowerCase() : "";

  if (!nomeNormalizado || !emailNormalizado || !tipoIngresso) {
    return res.status(400).json({
      mensagem: "Nome, e-mail e tipo de ingresso são obrigatórios."
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
    return res.status(400).json({ mensagem: "Informe um e-mail válido." });
  }

  if (!tiposIngresso.includes(tipoIngresso)) {
    return res.status(400).json({
      mensagem: "O tipo de ingresso deve ser estudante ou profissional."
    });
  }

  if (inscricoes.some((inscricao) => inscricao.email === emailNormalizado)) {
    return res.status(400).json({ mensagem: "Este e-mail já está inscrito no evento." });
  }

  const inscricao = {
    id: proximoId++,
    nome: nomeNormalizado,
    email: emailNormalizado,
    telefone: typeof telefone === "string" ? telefone.trim() : "",
    tipoIngresso
  };

  inscricoes.push(inscricao);
  return res.status(201).json(inscricao);
});

app.delete("/inscricoes/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = inscricoes.findIndex((inscricao) => inscricao.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: "Inscrição não encontrada." });
  }

  inscricoes.splice(indice, 1);
  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend do Evento Ontem rodando em http://localhost:${PORT}`);
});

