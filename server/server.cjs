const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware default (logger, CORS, dll)
server.use(middlewares);

server.use(jsonServer.bodyParser);

// Untuk menangani POST /login secara custom
server.post("/login", (req, res) => {
  const responseAll = req.body;
  const { email, password } = responseAll;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const users = router.db.get("users").value();
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT} `);
});
