// Exportando Knex
const knex = require("knex");

// Conexão com o banco de dados
const connected = knex ({
    client: "sqlite3",
    connection: {
        filename: "apidb.sqlite3"
    },
    // Propriedade para substituir DEFAULT por NULL para não aparecer alerta de erro
    useNullAsDefault: "true"
});

// Exportando módulo pra ser reutilizado no script. js e index.js
module.exports = connected; 