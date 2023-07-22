const { ExerciseActionHandler } = require("./exerciseActionHandler");
const { MindfulnessActionHandler } = require("./mindfulnessActionHandler")
const { ImageAnalyzerHandler } = require("./imageAnalyzerHandler");


class ActionHandler {
    static async handleAction(context) {
        //console.log(context)
        const attachments = context.activity.attachments;
        const imageRegex = /image\/.*/;

        if(context?._activity?.value?.action == "relaxmeselector" && context?._activity?.value?.relaxMeChoiceset == "mindfulness") {
            await MindfulnessActionHandler.handle(context);
        }
        else if(context?._activity?.value?.action == "relaxmeselector" && context?._activity?.value?.relaxMeChoiceset == "lightexercise") {
            await ExerciseActionHandler.handle(context);
        }
        else if (attachments && attachments[0] && attachments[0].contentType === 'application/vnd.microsoft.teams.file.download.info') {
            await ImageAnalyzerHandler.handle(context);
        } else if (attachments && attachments[0] && imageRegex.test(attachments[0].contentType)) {
            //await this.processInlineImage(context);
            const file = attachments[0];
            console.log(file.name, '-', attachments[0])    
        } 
    }
}

module.exports = {
    ActionHandler
}