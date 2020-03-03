// DEPENDENCIAS DO SERVIDOR
const express = require("express");
const server = express();

// CONFIGURAR O SERVIDOR PARA RECONHECER OUTROS ARQUIVOS DO PROJETO
server.use(express.static("public"));

// HABILITAR O BODY DAS REQUISIÇÕES 
server.use(express.urlencoded({ extended: true }));

// CONFIGURAR CONEXÃO COM O BANCO DE DADOS
const Pool = require("pg").Pool;
const db = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: '5432',
    database: 'doe'
});

// CONFIGURANDO O TEMPLATE ENGINE
const nunjucks = require("nunjucks");

nunjucks.configure("./", {
    express: server,
    noCache: true,
});

// REQUISIÇÕES
server.get("/", (req, res) => {
    db.query('SELECT * FROM donors', (err, result) => {
        if (err) return res.send("Erro no banco de dados." + err);

        const donors = result.rows;

        return res.render("index.html", { donors });

    })
});

server.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const blood = req.body.blood;

    if (name == '' || email == '' || blood == '') {
        return res.send("Todos os campos são obrigatórios.");
    }

    // SALVA NO BANCO DE DADOS
    const query = `INSERT INTO donors (name, email, blood) VALUES ($1, $2, $3)`;
    const values = [name, email, blood];

    db.query(query, values, err => {
        if (err) return res.send("Erro no banco de dados." + err);

        return res.redirect("/");
    });
});


// SERVIDOR RODANDO NA PORTA 3000
server.listen(3000, () => {
    console.log("Iniciei o servidor");
});