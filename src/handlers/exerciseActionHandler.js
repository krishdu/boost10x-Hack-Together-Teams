const exerciseCard = require("../adaptiveCards/exerciseCard.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class ExerciseActionHandler {
  static getRandomVideoLink () {
    const lst = [
      {
        imgLink: "https://d2f8l4t0zpiyim.cloudfront.net/000_clients/61768/page/617689vc83rMf.gif",
        instruction: "Test instruction",
      },
      {
        imgLink: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a93c82108677535.5fc3684e78f67.gif",
        instruction: "Test instruction",
      },
      {
        imgLink: "https://gifdb.com/images/high/sports-woman-doing-crunches-exercise-uaypxflc7uj1yt5x.gif",
        instruction: "Test instruction",
      }, 
      {
        imgLink: "https://i.gifer.com/origin/69/69ea9ba87fe57eb416ebc853dfe86ed9_w200.gif",
        instruction: "Test instruction",
      },
      {
        imgLink: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21348d108677535.62c7eb4b3d1b8.gif",
        instruction: "Test instruction",
      },
      {
        imgLink: "https://static01.nyt.com/images/2020/01/09/fashion/09METIME/09METIME-articleLarge.gif?quality=75&auto=webp&disable=upscale",
        instruction: "Test instruction",
      },
    ];
    const randomIndex = Math.floor(Math.random() * lst.length);
    return lst[randomIndex];
  }

  static async handle(context){
      //console.log(context?._activity);
      const cardData = {
        title: "Exercise",
        body: ExerciseActionHandler.getRandomVideoLink()?.instruction,
        imgUrl: ExerciseActionHandler.getRandomVideoLink()?.imgLink,
      };
  
      const cardJson = AdaptiveCards.declare(exerciseCard).render(cardData);
      const attachment =  MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
      await context.sendActivity(attachment);
  }
}

module.exports = {
  ExerciseActionHandler,
};
