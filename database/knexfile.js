const knex = require("knex");

const connected = knex ({
    client: "sqlite3",
    connection: {
        filename: "apidb.sqlite3"
    },
    useNullAsDefault: "true"
});

module.exports = connected; 