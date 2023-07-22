const mindfullnessCard = require("../adaptiveCards/mindfullnessCard.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class MindfulnessActionHandler {
  static getRandomVideoLink () {
    const lst = ["https://youtu.be/-byjrq-I0Go", "https://youtu.be/ssss7V1_eyA", "https://youtu.be/ZToicYcHIOU", "https://youtu.be/ztTexqGQ0VI"];
    const randomIndex = Math.floor(Math.random() * lst.length);
    return lst[randomIndex];
  }

  static async handle(context){
      
      const cardData = {
        title: "Mindfullness",
        body: "Mindfulness means maintaining a moment-by-moment awareness of our thoughts, feelings, bodily sensations, and surrounding environment, through a gentle, nurturing lens.",
        videoUrl: MindfulnessActionHandler.getRandomVideoLink(),
        thumbnailUrl: `https://source.unsplash.com/random/400x400/?mindfullness&tempversion=${Math.floor(Math.random() * 30)}`
      };
  
      const cardJson = AdaptiveCards.declare(mindfullnessCard).render(cardData);
      const attachment =  MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
      await context.sendActivity(attachment);
  }
}

module.exports = {
  MindfulnessActionHandler,
};
