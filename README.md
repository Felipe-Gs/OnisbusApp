<p>Tecnologias utilizadas</p>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>PostgreSQL</li>
  <li>Zod</li>
</ul>
<p>Como executar o projeto</p>
<pre><code>bash
Clone este repositório

$ git clone https://github.com/seu_usuario/nome-do-repositorio

Acesse a pasta do projeto no terminal/cmd

$ cd nome-do-repositorio

Instale as dependências

$ npm install

Crie as tabelas no PostgreSQL

$ npm run create_tables

Execute a aplicação em modo de desenvolvimento

$ npm run dev

O servidor inciará na porta:3000 - acesse http://localhost:3000
</code></pre>
<p>Rotas</p>
<p><strong>POST /estudante/inserir</strong></p>
<p>Rota para inserir um novo estudante no banco de dados.</p>
<p>Request Body</p>
<pre><code>json
{ "email": "string", "senha": "string", "nome": "string" }
</code></pre>
<p>Responses</p>
<ul>
  <li>200 OK - Retorna um objeto com a mensagem estudante inserido com sucesso.</li>
  <li>400 Bad Request - Retorna um objeto com a mensagem erro ao tentar cadastrar estudante.</li>
</ul>
<p><strong>GET /estudante/listar</strong></p>
<p>Rota para listar todos os estudantes cadastrados.</p>
<p>Responses</p>
<ul>
  <li>200 OK - Retorna um array com todos os estudantes cadastrados no formato:</li>
</ul>
<pre><code>json
[ { "id": "number", "email": "string", "senha": "string", "nome": "string", "volta": "boolean" } ]
</code></pre>
<ul>
  <li>500 Internal Server Error - Retorna um objeto com a mensagem Erro ao listar estudantes.</li>
</ul>
<p><strong>DELETE /estudante/deletar/:id</strong></p>
<p>Rota para deletar um estudante do banco de dados.</p>
<p>URL Parameters</p>
<pre><code>id: ID do estudante a ser deletado.
</code></pre>
<p>Responses</p>
<ul>
  <li>200 OK - Retorna uma mensagem informando que o estudante com o ID informado foi deletado com sucesso.</li>
  <li>500 Internal Server Error - Retorna um objeto com a mensagem de erro.</li>
</ul>
<p><strong>POST /estudante/login</strong></p>
<p>Rota para autenticar o usuário.</p>
<p>Request Body</p>
<pre><code>json
{ "email": "string", "senha": "string" }
</code></pre>
<p>Responses</p>
<ul>
  <li>200 OK - Retorna um objeto com as informações do estudante logado no formato:</li>
</ul>
<pre><code>json
{ "estudante": { "id": "number", "email": "string", "senha": "string", "nome": "string", "volta": "boolean" } }
</code></pre>
<ul>
  <li>401 Unauthorized - Retorna um objeto com a mensagem de erro Usuário ou senha inválidos.</li>
  <li>500 Internal Server Error - Retorna um objeto com a mensagem de erro Erro ao fazer login.</li>
</ul
<p>Retorna um objeto com a mensagem de erro Erro ao fazer login.</p>
<p><strong>PUT /estudante/volta/:id</strong></p>
<p>Rota para atualizar o status do estudante para volta.</p>
<p>URL Parameters</p>
<pre><code>id: ID do estudante.
</code></pre>
<p>Request Body</p>
<pre><code>json
{ "volta": true }
</code></pre>
<p>Responses</p>
<ul>
  <li>200 OK - Retorna um objeto com a mensagem Status atualizado com sucesso.</li>
  <li>500 Internal Server Error - Retorna um objeto com a mensagem de erro Erro ao atualizar status.</li>
</ul>
