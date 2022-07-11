// Importando Express
const express = require("express");
const app = express();
// Importando body-parser
const bodyParser = require('body-parser');
// Importando funções do script.js
const db = require("./database/script.js");
// Criando variável de ambiente pois a aplicação foi hospedada no Heroku
const port = process.env.PORT || 3000;

// body-parser para converser os dados das requisições em JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rota método POST para cadastrar um filme
app.post("/movies", async (req, res) => {
    const results = await db.createMovie(req.body);
    res.status(200).json({id: results[0]}); 
});

// Rota método GET para listar filmes cadastrados
app.get("/movies", async (req, res) => {
    const movies = await db.getAllMovies();
    res.status(201).json({movies});
});

// Rota método POST para cadastrar espectador
app.post("/viewer", async (req, res) => {
    const results = await db.createViewer(req.body);
    res.status(200).json({id: results[0]}); 
});
    
// Rota método GET para listar espectadores cadastrados
app.get("/viewers", async (req, res) => {
    const viewer = await db.getAllViewers();
    res.status(201).json({viewer});
});

// Rota método POST para definir filme assistido pelo espectador selecionado
app.post("/watched", async (req, res) =>{
    const results = await db.defineMovie(req.body);
    res.status(201).json({results});
});

// Rota método POST para listar quantos filmes o espectador selecionado assistiu
app.post("/history", async(req, res) =>{
    const history = await db.getHistoryViewer(req.body);
    // Retornar os títulos e converter os nomes em número para sabermos a quantidade de filmes assistidos
    res.status(200).send(`The viewer watched: ${JSON.stringify(history.length)} movies`);
});

// Função com método POST para listar número total de visualizações de um filme
app.post("/views", async (req, res) =>{
    const views = await db.getMovieViews(req.body);
    // Retornar os espectadores e converter os nomes em número pra sabermos a quantidade de espectador
    res.status(200).send(`Total viewers: ${JSON.stringify(views.length)}`)
});


// Ininicilizando porta de acordo com o definido na variável de ambiente
app.listen(port, () => 
    console.log("index.jss is running in port 3000"));