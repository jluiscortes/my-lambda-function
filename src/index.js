const serverless = require("serverless-http");
const app = require("./server/server");
const { PORT } = require("./config/environments.config");

app.listen(PORT);

//module.exports.handler = serverless(app);
