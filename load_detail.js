$(function () {
  const currentURI = decodeURI(document.documentURI);
  const leftHeight = 1151;
  var fullName = [];
  var musicName = [];
  var artist = [];
  var temp = [];
  var imgName = "";
  var trimedMusicName = [];
  var isMatchedName = false;
  var topValue = 295;
  for (var i = 1; i < 5; i++) {
    $(`#aside-detail>a:nth-child(${i})`).css({
      left: leftHeight,
      top: topValue,
    });
    topValue += 77;
  }
  $("div#img-count").load("../thumbnail_count.txt", function () {
    var imgCount = $(this).text();
    imgCount = parseInt(imgCount);
    if (imgCount <= 0) {
      $("body").html("<h1>EMPTY</h1>");
    } else if (imgCount >= 1) {
      $("div#img-name").load("../thumbnail_name.txt", function () {
        imgName = $(this).text();
        fullName = imgName.split(","); // {"0name - Music1", "1name - Music2", ... , ""}
        fullName.pop(); // {"0name - Music1", "1name - Music2", ...}
        for (var i = 0; i < fullName.length; i++) {
          temp[i] = fullName[i].split(" - "); // {{"0name", "Music1"},{"1name", "Music2"}, ...} 2d array
          for (var j = 0; j < 1; j++) {
            artist[i] = temp[i][0];
            musicName[i] = temp[i][1];
          }
        }
        for (var i = 0; i < imgCount; i++) {
          trimedMusicName[i] = musicName[i].replace(/ /g, "");
        }
        for (var i = 0; i < imgCount; i++) {
          var reg = new RegExp(trimedMusicName[i], "g");
          isMatchedName = reg.test(currentURI);
          if (isMatchedName == true) {
            $("title").text(musicName[i] + " - MAKING");
            $("body").append(
              `<div id="music-name" style="display:none;">${musicName[i]}</div>`
            );
            break;
          }
        }
        $("div#img-count").remove();
        $("div#img-name").remove();
      });
    }
  });
});
