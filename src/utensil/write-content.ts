var fs = require("fs");

export function appendWrite(url:string,content:string) {
  fs.appendFile(url, content, "utf8", function (err:any) {
    if (err) {
      throw err;
    }
    console.log("追加写入成功");
  });
}

export function overlapWrite(url: string, content: string) {
  fs.writeFile(url, content, "utf8", function (err: any) {
    if (err) {
      throw err;
    }
    console.log("覆盖写入成功");
  });
}