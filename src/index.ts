import { getFileContent } from './utensil/read-content'
import { appendWrite, overlapWrite } from "./utensil/write-content";
import { getRespond } from "./utensil/robot";
import { handleQuestionStr } from "./utensil/pure-puzzle";
import {
  outputFilePath,
  separateLine,
  lastQuestionPath,
  inputFilePath,
} from "./utensil/store";

function handleRespond(respond: any, pureInquireStr:string) {
  respond
    .then((val: any) => {
      console.dir(val);

      if (val.status == 200) {
        console.dir(val.data);
        let choiceArray = val.data.choices;
        console.info(choiceArray[0].text as string);

        appendWrite(outputFilePath, separateLine);
        appendWrite(outputFilePath, choiceArray[0].text as string);

        overlapWrite(lastQuestionPath, pureInquireStr);
      } else {
        console.dir('\n'+val.response);
      }      
    })
    .catch((err: any) => {
      console.error(err);
    });
}

function execute() {
  var filesContent:string = getFileContent(inputFilePath);

  var pureInquireStr:string  = handleQuestionStr(filesContent) as string;
  var respond = getRespond(pureInquireStr);

  handleRespond(respond,pureInquireStr);
}

execute();