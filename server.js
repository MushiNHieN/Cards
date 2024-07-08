const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const port = 3001;

// Conectar a la base de datos SQLite
let db = new sqlite3.Database("database.sqlite", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the game database.");
});

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// Configurar express-session con SQLite como almacén de sesiones
app.use(session({
  store: new SQLiteStore({ db: 'sessions.db' }),
  secret: 'mySecret', // Cambia esto a una cadena secreta segura
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Usa secure: true si usas HTTPS
}));


// Servir el archivo index.html en la ruta raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.htm"));
});

// Ruta para agregar un nuevo puntaje
app.post("/api/scores", (req, res) => {
  const { id, score, timestamp } = req.body;
  
  // Consulta para obtener el nombre del usuario
  db.get("SELECT name FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: "User not found" });
    }

    const user_name = row.name;
    // Insertar el puntaje con el nombre del usuario
    db.run(
      "INSERT INTO scores(name, score, timestamp) VALUES(?, ?, ?)",
      [user_name, score, timestamp],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        res.json({ message: "Score added successfully", id: this.lastID });
      }
    );
  });
});


// Ruta para obtener los mejores puntajes
app.get("/api/scores", (req, res) => {
  db.all(
    "SELECT * FROM scores ORDER BY score DESC LIMIT 10",
    [],
    (err, rows) => {
      if (err) {
        throw err;
      }
      res.json({ scores: rows });
    }
  );
});

// post usuarios
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  // Validar los datos de entrada
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Insertar el usuario en la base de datos
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.run(query, [name, email, password], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: "Error al agregar el usuario" });
    }
    // Devolver el ID del nuevo usuario
    res.status(201).json({ id: this.lastID });
  });
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email ||  !password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.get(query, [email, password], (err, email) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Error al iniciar sesión' });
    }

    if (email) {
      // Almacenar el ID del usuario en la sesión
      req.session.userId = email.id;
      res.json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });
});

// Ruta para obtener información del usuario logeado
app.get('/profile', (req, res) => {
  const userId = req.session.userId; // Obtener el ID de usuario de la sesión
  if (userId) {
    // Consultar en la base de datos o en alguna estructura de datos donde tengas almacenada la información del usuario
    const query = `SELECT * FROM users WHERE id = ?`;
    db.get(query, [userId], (err, user) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Error al obtener información del usuario' });
      }
      if (user) {
        res.json({userId: userId, name: user.name }); // Devolver el nombre del usuario
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuario no autenticado' });
  }
});

// Ruta para cerrar sesión
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Error al cerrar sesión' });
    }
    res.json({ message: 'Cierre de sesión exitoso' });
  });
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// const PORT = process.env.PORT || 3004;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
