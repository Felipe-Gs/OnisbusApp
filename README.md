<!-- Tecnologias utilizadas -->
Tecnologias utilizadas

    Node.js
    Express
    PostgreSQL
    Zod

<!-- Como executar o projeto -->
Como executar o projeto

bash

# Clone este repositório
$ git clone https://github.com/seu_usuario/nome-do-repositorio

# Acesse a pasta do projeto no terminal/cmd
$ cd nome-do-repositorio

# Instale as dependências
$ npm install

# Crie as tabelas no PostgreSQL
$ npm run create_tables

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

<!-- Rotas -->
Rotas
POST /estudante/inserir

Rota para inserir um novo estudante no banco de dados.
Request Body

json

{
  "email": "string",
  "senha": "string",
  "nome": "string"
}

Responses
200 OK

Retorna um objeto com a mensagem estudante inserido com sucesso.
400 Bad Request

Retorna um objeto com a mensagem erro ao tentar cadastrar estudante.
GET /estudante/listar

Rota para listar todos os estudantes cadastrados.
Responses
200 OK

Retorna um array com todos os estudantes cadastrados no formato:

json

[
  {
    "id": "number",
    "email": "string",
    "senha": "string",
    "nome": "string",
    "volta": "boolean"
  }
]

500 Internal Server Error

Retorna um objeto com a mensagem Erro ao listar estudantes.
DELETE /estudante/deletar/:id

Rota para deletar um estudante do banco de dados.
URL Parameters

    id: ID do estudante a ser deletado.


Responses
200 OK

Retorna uma mensagem informando que o estudante com o ID informado foi deletado com sucesso.
500 Internal Server Error

Retorna um objeto com a mensagem de erro.
POST /estudante/login

Rota para autenticar o usuário.
Request Body

json

{
  "email": "string",
  "senha": "string"
}

Responses
200 OK

Retorna um objeto com as informações do estudante logado no formato:

json

{
  "estudante": {
    "id": "number",
    "email": "string",
    "senha": "string",
    "nome": "string",
    "volta": "boolean"
  }
}

401 Unauthorized

Retorna um objeto com a mensagem de erro Usuário ou senha inválidos.
500 Internal Server Error

Retorna um objeto com a mensagem de erro Erro ao fazer login.
PUT /estudante/volta/:id

Rota para atualizar o status do estudante para volta.
URL Parameters

    id: ID do estudante.

Request Body

json

{
  "volta": true
}

Responses
200 OK

Retorna um objeto com a mensagem Status atualizado com sucesso.
500 Internal Server Error

Retorna um objeto com a mensagem de erro Erro ao atualizar status.
