// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

// Middleware para lidar com CORS
app.use(cors());

// Middleware para parsing do corpo das requisições
app.use(bodyParser.json());

// Rota para buscar todos os quartos
app.get("/quartos", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM quartos");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para cadastrar um novo quarto
app.post("/quartos", async (req, res) => {
  const { nome, tipo, capacidade, status } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO quartos (nome, tipo, capacidade, status) VALUES (?, ?, ?, ?)",
      [nome, tipo, capacidade, status]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para atualizar um quarto existente
app.put("/quartos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, tipo, capacidade, status } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE quartos SET nome = ?, tipo = ?, capacidade = ?, status = ? WHERE id = ?",
      [nome, tipo, capacidade, status, id]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Quarto não encontrado" });
    } else {
      res.json({ message: "Quarto atualizado com sucesso" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para deletar um quarto
app.delete("/quartos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM quartos WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Quarto não encontrado" });
    } else {
      res.json({ message: "Quarto deletado com sucesso" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para buscar todos os clientes
app.get("/clientes", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para cadastrar um novo cliente
app.post("/clientes", async (req, res) => {
  const {
    nome,
    dataNascimento,
    email,
    telefone,
    dataCheckin,
    dataCheckout,
    quarto,
    observacoes,
  } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO clientes (nome, dataNascimento, email, telefone, dataCheckin, dataCheckout, quarto, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nome,
        dataNascimento,
        email,
        telefone,
        dataCheckin,
        dataCheckout,
        quarto,
        observacoes,
      ]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para atualizar um cliente existente
app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    dataNascimento,
    email,
    telefone,
    dataCheckin,
    dataCheckout,
    quarto,
    observacoes,
  } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE clientes SET nome = ?, dataNascimento = ?, email = ?, telefone = ?, dataCheckin = ?, dataCheckout = ?, quarto = ?, observacoes = ? WHERE id = ?",
      [
        nome,
        dataNascimento,
        email,
        telefone,
        dataCheckin,
        dataCheckout,
        quarto,
        observacoes,
        id,
      ]
    );
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Cliente não encontrado" });
    } else {
      res.json({ message: "Cliente atualizado com sucesso" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para deletar um cliente
app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM clientes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Cliente não encontrado" });
    } else {
      res.json({ message: "Cliente deletado com sucesso" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
