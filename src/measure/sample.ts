const readline = require("readline");

function cmd2() {
  // 创建接口实例
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // 方法方法setPromat(promat) ，就是给每一行设置一个提示符，
  // 就好比window命令行的> ，这里设置的是Test>
  rl.setPrompt("请输入y/n: ");
  // prompt()是最重要的方法，因为它体现了readline的核心作用，
  // 以行为单位读取数据，prompt方法就是在等待用户输入数据
  rl.prompt();

  // 调用接口方法
  // 监听了'line' 事件，因为prompt方法调用一次就只会读取一次数据
  // 所以，在这个方法又调用了一次prompt方法，这样就可以继续读取用户输入
  // 从而达到一种命令行的效果
  rl.on("line", function (line: string) {
    switch (line.trim()) {
      case "y":
        console.log("继续");
        break;
      case "n":
        rl.close();
        break;
      default:
        console.log("无效");
        break;
    }
    rl.prompt();
  });

  // close事件监听
  rl.on("close", function () {
    console.log("终止");
    process.exit(0);
  });
}

function cmd() {
  // 创建接口实例
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // 方法方法setPromat(promat) ，就是给每一行设置一个提示符，
  // 就好比window命令行的> ，这里设置的是Test>
  rl.setPrompt("Test> ");
  // prompt()是最重要的方法，因为它体现了readline的核心作用，
  // 以行为单位读取数据，prompt方法就是在等待用户输入数据
  rl.prompt();

  // 调用接口方法
  // 监听了'line' 事件，因为prompt方法调用一次就只会读取一次数据
  // 所以，在这个方法又调用了一次prompt方法，这样就可以继续读取用户输入
  // 从而达到一种命令行的效果
  rl.on("line", function (line: string) {
    switch (line.trim()) {
      case "copy":
        console.log("复制");
        break;
      case "hello":
        console.log("World!");
        break;
      case "close":
        rl.close();
        break;
      default:
        console.log("没有找到命令！");
        break;
    }
    rl.prompt();
  });

  // close事件监听
  rl.on("close", function () {
    console.log("再见");
    process.exit(0);
  });
}

cmd2();
