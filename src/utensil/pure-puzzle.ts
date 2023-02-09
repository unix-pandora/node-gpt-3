import { lastQuestionPath } from "./store";
import { getFileContent } from "./read-content";

function getPreviousPuzzle() {
  var previousPuzzle = getFileContent(lastQuestionPath);
  console.info("previousPuzzle: " + previousPuzzle);
  return previousPuzzle;
}

function getPureStr(content: string) {
  // var simpleQuestion = content.replace(/\s/g, "");//除去所有空格

  const simpleQuestion = content
    .trim()
    .replace(/[\r\n]+/g, "")
    .replace(/\s*,\s*/g, ",")
    .replace(/,+$/g, ""); //去除开头和末尾的空格,除去回车行和空白行

  console.log("simpleQuestion: " + simpleQuestion);
  console.log("simpleQuestion-length: " + simpleQuestion.length);
  return simpleQuestion;
}

/**
 * 
 * @param content 
 * @returns 
 */
export function handleQuestionStr(content: string) {
  var simpleText = getPureStr(content);
  var prevStr = getPreviousPuzzle();

  if (simpleText.length < 2) {
    console.warn("问题字数不够,请重新输入");
    process.exit();
  } else if (simpleText.match(prevStr)) {
    console.warn("连续2个问题都相同,为了避免浪费资源,请重新输入");
    process.exit();
  }
  if (simpleText.length > 1024) {
    console.warn("问题字数超出限制(单次限制为1024),请删减后再重新提交");
    process.exit();
  }
  
  console.info("pass inspection - handleQuestionStr");
  return simpleText;
}