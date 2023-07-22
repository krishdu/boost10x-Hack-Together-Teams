// Create HTTP server.
const restify = require("restify");
const { commandApp } = require("./internal/initialize");
const { TeamsBot } = require("./teamsBot");

// This template uses `restify` to serve HTTP responses.
// Create a restify server.
const server = restify.createServer();
server.use(restify.plugins.bodyParser());
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nApp Started, ${server.name} listening to ${server.url}`);
});



const teamsBot = new TeamsBot();
//const mind = MindfulnessCommandHandler();

server.post("/api/messages", async (req, res) => {
  await commandApp.requestHandler(req, res, async (context) => {
    //console.log(context);
    await teamsBot.run(context);
    //await mind.run(context);
  });
});
