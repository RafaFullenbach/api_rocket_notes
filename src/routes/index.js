//Importando o router do express
const { Router } = require("express");

//Chamando a função router
const routes = Router();

// Importando o user routes
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

//Utilizando essa rota
routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
