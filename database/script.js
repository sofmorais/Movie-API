const knex = require("./knexfile");

// Função para cadastrar filme
createMovie = (movie) => {
    return knex("movies").insert(movie);
};

// Função para listar filmes
getAllMovies = () => {
    return knex("movies").select("*");
};

// Função para cadastrar espectadores
createViewer = (viewer) => {
    return knex("viewer").insert(viewer);
};

/// Função para listar espectadores
getAllViewers = () => {
    return knex("viewer").select("*");
}

// Função para definir qual filme um espectador assistiu
defineMovie = (nick_title) => {
    const id_Viewer = knex("viewer").select('id').where({'nick': nick_title["nick"]});
    const id_Movie = knex("movies").select("id").where({"title": nick_title["title"]});

    return knex("watched").insert({viewer_id: id_Viewer, movie_id: id_Movie});
}

// Função para listar quantos filmes um espectador assistiu
getHistoryViewer = (nick) => {
    const id = knex("viewer").select("id").where({"nick": nick["nick"]});
    return knex("watched").select("*").where({viewer_id: id})
}

// Função para listar quantos espectadores determinado filme teve
getMovieViews = (title) => {
    const id = knex("movies").select("id").where({"title": title["title"]});
    return knex("watched").select("*").where({movie_id: id})
}


module.exports = {
    createMovie,
    getAllMovies,
    createViewer,
    getAllViewers,
    defineMovie,
    getHistoryViewer,
    getMovieViews
}
