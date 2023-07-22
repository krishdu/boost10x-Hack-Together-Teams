const { BotBuilderCloudAdapter } = require("@microsoft/teamsfx");
const ConversationBot = BotBuilderCloudAdapter.ConversationBot;
const { HelloWorldCommandHandler } = require("../handlers/helloworldCommandHandler");
const { RelaxmeCommandHandler } = require("../handlers/relaxmeCommandHandler");
const config = require("./config");

// Create the command bot and register the command handlers for your app.
// You can also use the commandApp.command.registerCommands to register other commands
// if you don't want to register all of them in the constructor
const commandApp = new ConversationBot({
  
  adapterConfig: {
    MicrosoftAppId: config.botId,
    MicrosoftAppPassword: config.botPassword,
    MicrosoftAppType: "MultiTenant",
  },
  command: {
    enabled: true,
    commands: [
      new HelloWorldCommandHandler(), 
      new RelaxmeCommandHandler(),
    ],
  },
});

module.exports = {
  commandApp,
};
