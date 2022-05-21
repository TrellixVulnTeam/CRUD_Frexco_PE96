const express = require("express");
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./frexco.db"
    }
  });

const app = express();

app.post('/mamou', (req, res) =>{
    console.log("Connected to React")
    res.redirect('/');
})

app.post("/consultStock",(req,res) => {
  knex.select('*').from('stock').then(data =>{
    console.log(data);
  })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server running on port: "+PORT));