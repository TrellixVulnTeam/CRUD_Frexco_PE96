const express = require("express");
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./database/frexco.db"
    }
  });

const app = express();

app.post('/test', (req, res) =>{
    console.log("Connected to React")
    res.redirect('/');
})

app.post("/consProd",(req,res) => {
  let nome = req.body.nome;
  knex.select('*').from('stock').where('product_name', nome).then(function(data) {
    res.send(data);
  })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server running on port: "+PORT));