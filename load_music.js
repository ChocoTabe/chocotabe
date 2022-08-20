$(function () {
  const currentURI = decodeURI(document.documentURI);
  var fullName = [];
  var musicName = [];
  var artist = [];
  var temp = [];
  var imgName = "";
  var trimedMusicName = [];
  var isMatchedName = false;
  $("div#img-count").load("../thumbnail_count.txt", function () {
    var imgCount = $(this).text();
    imgCount = parseInt(imgCount);
    if (imgCount <= 0) {
      $("body").html("<h1>EMPTY</h1>");
    } else if (imgCount >= 1) {
      $("div#img-name").load("../thumbnail_name.txt", function () {
        imgName = $(this).text();
        fullName = imgName.split(","); // {"datename - Music1", "datename - Music2", ... , ""}
        fullName.pop(); // {"datename - Music1", "datename - Music2", ...}
        for (var i = 0; i < fullName.length; i++) {
          temp[i] = fullName[i].split(" - "); // {{"datename", "Music1"},{"datename", "Music2"}, ...} 2d array
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
            $("title").text(musicName[i]);
            $("#bg").attr(
              "src",
              `../thumbnail/${artist[i]} - ${musicName[i]},.webp`
            );
            $("audio").html(`<source type=\"audio/mp3\">`);
            $("source").attr(
              "src",
              `../music_list/${artist[i].slice(0, 3)}${musicName[i]}.mp3`
            );
            $("audio").attr("controlsList", "nodownload");
            $("#music-title-play").text(musicName[i]);
            $("#music-artist-play").text(artist[i].slice(15));
            $("#music-date-play").text(artist[i].slice(4, 15));
            document.querySelector("audio").load();
            if (trimedMusicName[i + 1] != undefined) {
              $("#next").attr("href", `${trimedMusicName[i + 1]}`);
              $("#next-music").attr("href", `${trimedMusicName[i + 1]}`);
              $("#next-music").text(
                `${artist[i + 1].slice(15)} - ${musicName[i + 1]}`
              );
            } else {
              $("#next").remove();
              $("#next-music").remove();
            }
            if (trimedMusicName[i - 1] != undefined) {
              $("#pre").attr("href", `${trimedMusicName[i - 1]}`);
              $("#pre-music").attr("href", `${trimedMusicName[i - 1]}`);
              $("#pre-music").text(
                `${artist[i - 1].slice(15)} - ${musicName[i - 1]}`
              );
            } else {
              $("#pre").remove();
              $("#pre-music").remove();
            }
            break;
          }
        }
        $("div#img-count").remove();
        $("div#img-name").remove();
      });
    }
  });
});
