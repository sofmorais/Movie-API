const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require("./database/script.js");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Função usando método POST para cadastrar um filme
app.post("/movies", async (req, res) => {
    const results = await db.createMovie(req.body);
    res.status(200).json({id: results[0]}); 
});

// Função usando método GET para listar filmes cadastrados
app.get("/movies", async (req, res) => {
    const movies = await db.getAllMovies();
    res.status(201).json({movies});
});

// Função usando método POST para cadastrar espectador
app.post("/viewer", async (req, res) => {
    const results = await db.createViewer(req.body);
    res.status(200).json({id: results[0]}); 
});

// Função usando método GET para listar espectadores cadastrados
app.get("/viewers", async (req, res) => {
    const viewer = await db.getAllViewers();
    res.status(201).json({viewer});
});

// Função usando método POST para definir filme assistido pelo espectador selecionado
app.post("/watched", async (req, res) =>{
    const results = await db.defineMovie(req.body);
    res.status(201).json({results});
});

// Função usando método POST para listar quantos filmes o espectador selecionado assistiu
app.post("/history", async(req, res) =>{
    const history = await db.getHistoryViewer(req.body);
    res.status(200).send(`The viewer watched: ${JSON.stringify(history.length)} movies`);
});

// Função com método POST para listar número total de visualizações de um filme
app.post("/views", async (req, res) =>{
    const views = await db.getMovieViews(req.body);
    res.status(200).send(`Total viewers: ${JSON.stringify(views.length)}`)
});

app.listen(port, () => 
    console.log("server is running in port 3000"));