const relaxMeCard = require("../adaptiveCards/relaxMeCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class RelaxmeCommandHandler {
  triggerPatterns = "relaxMe";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message : RelaxMe Handler: ${message.text}`);

    // do something to process your command and return message activity as the response

    // render your adaptive card for reply message
    const cardData = {
      title: "What kind of relaxation you want?",
      body: "Taking regular breaks during work boosts productivity and creativity by refreshing the mind, reducing stress, and preventing burnout.",
    };

    const cardJson = AdaptiveCards.declare(relaxMeCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  RelaxmeCommandHandler,
};
