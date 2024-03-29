const Z = require("zod");
const express = require('express');
const router = express.Router();
const { Client, Pool } = require('pg');

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
      const estudanteBody = Z.object({
        email: Z.string().email(),
        senha: Z.string(),
        nome: Z.string().min(3)
      }).required();
      const validData = estudanteBody.parse(req.body);
      const {email, senha, nome} = validData;
        const query = `
          INSERT INTO estudante (email, senha, nome)
          VALUES ('${email}', '${senha}', '${nome}');
        `;
        client.query(query, (err, result) => {
          if (err) {
            return res.status(400).send({
              message: 'erro ao tentar cadastrar estudante'
            });
          } else {
            return res.send({
              message: 'estudante inserido com sucesso'
            });
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
              // console.table(result.rows)
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

router.post('/login', (req, res) => {
  try {
    const estudanteBody = Z.object({
      email: Z.string().email(),
      senha: Z.string(),
    }).required();

    const validData = estudanteBody.parse(req.body);
    const {email, senha} = validData;
    console.log(email, senha)
    const query = 'SELECT * FROM estudante WHERE email = $1 AND senha = $2';
    client.query(query, [email, senha], (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Erro ao fazer login');
      } else if (result.rows.length > 0) {
        // Usuário encontrado, retornar alguma informação, como um token
        res.send( {estudante: result.rows[0]} );
      } else {
        // Usuário não encontrado, retornar mensagem de erro
        res.status(401).send({ success: false, message: 'Usuário ou senha inválidos' });
      }
    });
  } catch (error) {
    console.log(error)
  }
})

router.put('/volta/:id', async(req, res) => {
  const id = req.params.id;
  const volta = req.body.volta;

  const query = 'UPDATE estudante SET volta = $1 WHERE id = $2';
  try {
    await client.query(query, [volta, id]);
    res.status(200).json({ success: 'Status atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar status' });
  }
})

router.get('/estudanteVolta', async(req, res) => {
  const query = 'SELECT * FROM estudante WHERE volta = true';
  try {
    const result = await client.query(query)
    res.status(200).json( result.rows );

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao consultar o banco de dados' })
  }
})

module.exports = router;


