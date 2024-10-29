const http = require('http');
const express = require('express');
const status = require ('http-status');
const sequelize = require ('./src/database/database');
const app = express();
const routes = require ('./src/routes/routes.js');
const cors = require('cors');

app.use(express.json());

app.use(cors());
// url base
app.use('/sistema', routes);

app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send("Page not found");
});

app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});
// force: false -> cria as tabelas somente uma vez.
sequelize.sync({force: true}).then( () => {
    const port = 3003;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});