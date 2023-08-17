const express = require("express");
const cors = require("cors");
const tokenRoutes = require("../routes/token.routes");
const compression = require("compression");
const helmet = require("helmet");
const app = express();
const { helperRoutes, generalError } = require("../helpers/routes.helper");

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use("/token/v2", tokenRoutes.routes);
app.use(helperRoutes);
app.use(generalError);

module.exports = app;
