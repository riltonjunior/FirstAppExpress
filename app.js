var express = require("express");
var app = express();

// "/" = "Oi!"
app.get("/", function (req, res){
  res.send("Oi!");
});

// "/tchau" = "Tchau!"
app.get("/tchau", function (req, res){
  res.send("Tchau!");
});
// "/cao" = "Au au!"
app.get("/cao", function (req, res){
  console.log("chamaram o cão!");
  res.send("Au au!");
});

// subredditName
app.get("/r/:subredditName", function (req, res){
  console.log(req.params);
  res.send("BEM VINDO A UM SUBREDDIT!");
});

// comentarios
app.get("/r/:subredditName/comments/:id/:title", function (req, res){
  console.log(req.params);
  const subredditName = req.params.subredditName;
  const idPost = req.params.id;
  const title = req.params.title;
  res.send(`Bem vindo a um comentario infos ${subredditName} - #${idPost} ${title}  `);
});

// Todas as outras paginas!
app.get("*", function (req, res){
  res.send("ERRO 404, CARAIO");
});

// Dizer ao express para ler as requiusicoes (comecar o servidor)
var porta = process.env.PORT || 3000;
app.listen(porta, process.env.IP, function(){
  console.log(`Servidor iniciado! ${porta}`);
});