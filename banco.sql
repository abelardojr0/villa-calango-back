-- Criação do banco de dados
CREATE DATABASE pousada;

-- Selecionar o banco de dados
USE pousada;

-- Criação da tabela quartos com auto-incremento e NOT NULL onde necessário
CREATE TABLE quartos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL,
    status VARCHAR(50) NOT NULL
);

-- Inserção dos dados na tabela quartos
INSERT INTO quartos (nome, tipo, capacidade, status) VALUES
('Presidencial', 'Suíte', 2, 'Disponível'),
('Quarto Padrão', 'Standard', 3, 'Reservado'),
('Quarto Grande', 'Familiar', 4, 'Disponível'),
('Executivo', 'Suíte', 2, 'Manutenção'),
('Pequeno', 'Econômico', 2, 'Disponível');

-- Criação da tabela de clientes com auto-incremento e NOT NULL onde necessário
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    dataNascimento DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    dataCheckin DATE NOT NULL,
    dataCheckout DATE NOT NULL,
    quarto VARCHAR(50) NOT NULL,
    observacoes TEXT
);

-- Inserção dos dados na tabela clientes
INSERT INTO clientes (nome, dataNascimento, email, telefone, dataCheckin, dataCheckout, quarto, observacoes) VALUES
('Carlos Eduardo', '1979-04-15', 'carlos.eduardo@example.com', '(85) 1234-5678', '2023-01-10', '2023-01-20', 'Suíte Luxo', 'Solicitou café da manhã no quarto.'),
('Ana Paula', '1989-07-23', 'ana.paula@example.com', '(85) 2345-6789', '2023-02-14', '2023-02-24', 'Quarto Standard', 'Necessita de travesseiros extras.'),
('João Pedro', '1994-03-05', 'joao.pedro@example.com', '(85) 3456-7890', '2023-03-18', '2023-03-25', 'Quarto Econômico', 'Solicitou check-out tardio.'),
('Mariana Lopes', '1974-09-30', 'mariana.lopes@example.com', '(85) 4567-8901', '2023-04-22', '2023-05-02', 'Quarto Familiar', 'Prefere quarto com vista para o mar.'),
('Ricardo Silva', '1961-11-11', 'ricardo.silva@example.com', '(85) 5678-9012', '2023-05-15', '2023-05-25', 'Suíte Executiva', 'Requere cadeira de rodas disponível.');
