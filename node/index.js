const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
var connection = mysql.createConnection(config)

connection.query("DROP TABLE IF EXISTS people;")
connection.query("CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id));")
connection.end()

app.get('/', (req, res) => {
    var connection = mysql.createConnection(config)
    connection.query("INSERT INTO people(name) VALUES ('Uiratan Cavalcante')")

    connection.query(
        "SELECT * FROM people",
        function (err, rows) {
            if (err) throw err;

            var html = "<h1>Full Cycle Rocks!</h1> <ul>"
            for (var i in rows) html += "<li>" + rows[i].name + "</li>";
            html += "</ul>"

            res.send(html);
        }
    );

    connection.end()
})

app.listen(port, () => {
    // console.log('Rodando na porta ' + port)
    console.log('App is running.');
})