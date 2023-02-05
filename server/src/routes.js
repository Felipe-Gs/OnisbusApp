const express = require('express');
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'felipe',
    database: 'OnibusApp'
  });

client.connect();

//inserir
router.post('/inserir', (req, res) => {
    try {
        console.log(req.body);
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
        const query = `
          INSERT INTO estudante (nome, email, senha)
          VALUES ('${nome}', '${email}', '${senha}');
        `;
        client.query(query, (err, result) => {
          if (err) {
            res.status(400).send('erro ao tentar iserir estudantes');
          } else {
            res.send(`estudante ${nome} inserido com sucesso`);
          }
        });
        
    } catch (error) {
        console.log(error)
    }
  });

//listar
router.get('/listar', (req, res) => {
    try {
        const query = 'SELECT * FROM estudante';
        client.query(query, (err, result) => {
            if (err) {
            console.error(err.stack);
            res.status(500).send('Erro ao listar estudantes');
            } else {
            res.send(result.rows);
            }
        });   
    } catch (error) {
        console.log(error)
    }
});

//deletar

router.delete('/deletar/:id', (req, res) => {
    const id = req.params.id;
  
    const query = `
      DELETE FROM estudante WHERE id = ${id}
    `;
  
    client.query(query, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(`Estudante com ID ${id} deletado com sucesso!`);
      }
    });
  });

module.exports = router;


