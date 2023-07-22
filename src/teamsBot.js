const { TeamsActivityHandler } = require("botbuilder");

const { ActionHandler } = require("./handlers/actionHandler");

// An empty teams activity handler.
// You can add your customization code here to extend your bot logic if needed.
class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
    //this.handleTeamsMessagingExtensionSubmitActionDispatch()
  }

  async onMessageActivity(context) {
    console.log(context);
    await ActionHandler.handleAction(context);
   // console.log(context);
  }
  
}

module.exports.TeamsBot = TeamsBot;
