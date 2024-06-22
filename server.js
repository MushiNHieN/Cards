const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// Crear y conectar la base de datos SQLite
const db = new sqlite3.Database(':memory:'); // Usar ':memory:' para una DB en memoria, o un nombre de archivo para una DB persistente

db.serialize(() => {
    // Crear una tabla
    db.run("CREATE TABLE users (id INT, name TEXT)");

    // Insertar algunos datos
    const stmt = db.prepare("INSERT INTO users VALUES (?, ?)");
    stmt.run(1, "Alice");
    stmt.run(2, "Bob");
    stmt.finalize();
});

// Configurar el servidor para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener datos de la base de datos
app.get('/api/users', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ users: rows });
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
