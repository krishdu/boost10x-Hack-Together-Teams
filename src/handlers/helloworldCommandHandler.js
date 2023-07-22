const helloWorldCard = require("../adaptiveCards/helloworldCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class HelloWorldCommandHandler {
  triggerPatterns = "features";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message : HelloWorld Handler: ${message.text}`);

    // do something to process your command and return message activity as the response

    // render your adaptive card for reply message
    const cardData = {
      title: "Hey I'm your boost10x buddy 🤖",
      body: "Start your productivity journey today.😎 \n 1. Practice Mindfulness \n 2. Practice Table Exercise \n 3. Upload Image to Analyze",
    };

    const cardJson = AdaptiveCards.declare(helloWorldCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  HelloWorldCommandHandler,
};
