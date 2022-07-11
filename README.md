# Sistema para Controle de Filme

## Descrição
Essa API serve para cadastro e consulta de filmes e espectadores, definição de qual filme um
espectador em específico assistiu, consulta no histórico de um espectador para ver quantidade
de filmes assistidos e consulta do total de visualizações de um filme.
Nessa aplicação foram utilizados somente os métodos GET e POST.

A [documentação](https://documenter.getpostman.com/view/21857150/UzJQotY2) da API foi feita e disponibilizada no Postman.  
A aplicação foi hospedada no Heroku, basta clicar [aqui](https://nodejs-express-movie-api3.herokuapp.com/movies) para ver a lista de filmes cadastrados, por exemplo.  
O banco de dados foi construído com [SQLite3](https://www.sqlite.org/index.html) e disponibilizado no [DBHub](dbhub.io), para acessar basta clicar
[aqui](https://dbhub.io/sofiassmorais/apidb.sqlite3).

## Como testar

Para fazer os testes será preciso uma ferramenta de teste, pois a aplicação não conta com código pra execução das requisições nem interface visual, então não é possível realizar todasas requisições. As requisições de GET podem ser visualizadas no [Heroku](https://nodejs-express-movie-api3.herokuapp.com/).  
Eu utilizei o [Postman](https://www.postman.com/downloads/), uma ferramenta que facilita a criação, teste e documentação de APis, pode ser feito o download ou usar a versão [online](https://web.postman.co/).

- Clone o repositório;
- Inicie o terminal com o endereço da pasta;
- Digite "npm run start" ou "node index.js";
- Abra a [documentação](https://documenter.getpostman.com/view/21857150/UzJQotY2) e selecione "Run in Postman".

Conforme exemplificado na documentação, para cadastrar um filme ou espectador basta fazer
uma requisição POST inserindo os dados no body e através de um JSON enviar esses dados.

Para consultar filmes e espectadores cadastrados basta fazer uma requisição GET no URL
desejado.

## Funcionalidades

O final da URL é modificado de acordo com a requisição que será feita.

- `Cadastrar um filme`: /movie, método POST
- `Cadastrar um espectador`: /viewer, método POST
- `Consultar filmes cadastrados`: /movies, método GET
- `Consultar espectadores cadastrados`: /viewer, método GET
- `Definir filme assistido por um espectador`: /watched, método POST
- `Consultar quantos filmes um espectador assistiu`: /history, método POST
- `Consultar quantos espectadores um filme tem`: /views, método POST

## Documentação

![doc0](https://user-images.githubusercontent.com/87936806/178283116-6fcb1887-2432-437f-8aa9-9d41b4a2b774.jpg)

## Organização dos arquivos

#### /database/knexfile.js
Arquivo para realizar a conexão com o banco de dados com o [Knex](http://knexjs.org/), um
query builder que possibilita a criação e manipulação de banco de dados mantendo um padrão
que permite que a aplicação funcione mesmo se alterar o banco de dados.

#### /database/script.js
Arquivo com as funções que serão utilizadas no CRUD.

#### apidb.sqlite.3
Arquivo com o banco de dados [SQLite3](https://www.sqlite.org/index.html). No banco de
dados existem três tables: movies, viewer e watched. Na table movies estão armazenados o id
e título do filme. Na table viewer estão armazenados o id e nome do espectador. Na table
watched estão armazenados as foreign keys: id do espectador e id do filme para definir qual
espectador assistiu qual filme.

#### index.js
Arquivo principal da aplicação, escrito em [NodeJS](https://nodejs.org/en/), usando o
framework [Express](https://expressjs.com/pt-br/) e [Knex](http://knexjs.org/).
