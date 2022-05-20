const express = require("express");
const cors = require("cors");
const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./database/frexco.db"
    }
});

const app = express();

app.use(express.static('public'));

app.get("/",(req,res) => {
  
});

app.get("/getStock", (req,res) => {
  knex.select('*').from('stock').then(data =>{
    console.log(data);
  });
})

app.listen(3000);