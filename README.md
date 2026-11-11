# backend_FAPA_2026_2_Noite

Projeto com PostgreSQL em Docker Compose e script SQL de criacao de tabelas.

## Requisitos

- Docker Desktop instalado e em execucao
- (Opcional) Node.js para rodar a API local com npm

## Arquivos de entrega

- docker-compose.yml
- db/init/01_schema.sql

## Como subir o banco

1. Na raiz do projeto, execute:

```bash
docker compose up -d
```

2. Verifique o container:

```bash
docker compose ps
```

## Conexao no pgAdmin

- Host: 127.0.0.1
- Port: 55432
- Database: meubanco
- Username: admin
- Password: minhasenha

## Tabelas criadas pelo script

- usuario: id, nome, email, senha, username
- cliente: id, nome_fantasia, razao_social, cpf_cnpj, tipo, email
- produto: id, descricao, departamento, codigo_barra, preco

## Recriar o ambiente do zero

```bash
docker compose down -v
docker compose up -d
```

## Rodar a API (opcional)

```bash
npm start
```
