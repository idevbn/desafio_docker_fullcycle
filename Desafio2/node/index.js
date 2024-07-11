const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

connection.connect();

// Inserir dados no banco de dados
const sql = `INSERT INTO people(name) VALUES('John Doe')`;
connection.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Registro inserido.");
});

// Selecionar dados do banco de dados
function getPeople(callback) {
  const selectSql = `SELECT * FROM people`;
  connection.query(selectSql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

app.get('/', (req, res) => {
  getPeople((err, people) => {
    if (err) throw err;

    const fullCycleMessage = '<h1>Full Cycle Rocks!</h1>';

    const peopleList = `
      <ul>
        ${people.map(p => `<li>${p.name}</li>`).join('')}
      </ul>`;

    res.send(fullCycleMessage + peopleList);
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
