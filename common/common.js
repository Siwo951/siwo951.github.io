console.log("------------------------------");
console.log("なんでここ見てるんですか");
console.log("ここ見たって有益な事無いよ");
console.log("------------------------------");
console.log("あでもせっかくだから私のYouTube見ていきます？");
console.log("よければチャンネル登録してね");
console.log("https://youtube.com/c/Siwo951");
console.log("------------------------------");

function lightdark(cssname) {

  document.getElementById('commoncss').href = cssname;

}

var lightdarktf =  window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (lightdarktf) {

    lightdark('/common/darkcommon.css');

  }

  else {

    lightdark('/common/common.css');

  }