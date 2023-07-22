const exerciseCard = require("../adaptiveCards/imageAnalyzerCard.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

class ImageAnalyzerHandler {
 
  static async handle(context){
      const attachments = context.activity.attachments;
      const file = attachments[0];
      const key = process.env.VISION_KEY;
      const endpoint = process.env.VISION_ENDPOINT;
      const computerVisionClient = new ComputerVisionClient(
        new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);
      

      const response = (await computerVisionClient.analyzeImage(file?.content?.downloadUrl, { visualFeatures: ['Tags', 'Description'] }));
      console.log(response);
      const tags = response?.tags;
      const caption = response?.description?.captions?.at(0)?.text;
      const confidence = response?.description?.captions?.at(0)?.confidence;
      //console.log(`Tags: ${formatTags(tags)}`);
      //console.log('Caption:', caption, '-', confidence);

      // Format tags for display
      function formatTags(tags) {
          return tags?.map(tag => (`${tag.name} (${Math.round(tag?.confidence * 100)}%)`)).join(', ');
      }

      const cardData = {
        caption: caption,
        confidence: `${Math.round(confidence * 100)}%`,
        tags: formatTags(tags)
      };
  
      const cardJson = AdaptiveCards.declare(exerciseCard).render(cardData);
      const attachment =  MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
      await context.sendActivity(attachment);
  }
}

module.exports = {
  ImageAnalyzerHandler,
};
