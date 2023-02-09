import * as fs from 'fs';

export function getFileContent(fileName: string) {
  // 同步读取,需要使用一个变量来接收读取出来的数据
  let data = fs.readFileSync(fileName, {
    // path为文件的路径
    encoding: "utf8", // 指定字符集
    flag: "r", // 指定读取的模式,具体上面有
  });
  console.log(data.toString());
  return data;
}
