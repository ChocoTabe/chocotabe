$(function () {
  const currentPage = document.documentURI;
  const findMusicPage = new RegExp(/music/g);
  const findDetailPage = new RegExp(/detail/g);
  var fullName = [];
  var musicName = [];
  var artist = [];
  var temp = [];
  var linkObj = "";
  var imgName = "";
  var loadImgCount = 12;
  $("div#img-count").load("./thumbnail_count.txt", function () {
    var imgCount = $(this).text();
    imgCount = parseInt(imgCount);
    if (imgCount <= 0) {
      if (findMusicPage.test(currentPage)) {
        $("#music-grid").html("EMPTY");
      } else if (findDetailPage.test(currentPage)) {
        $("#detail-grid").html("EMPTY");
      }
    } else if (imgCount >= 1) {
      if (findMusicPage.test(currentPage)) {
        $("div#img-name").load("./thumbnail_name.txt", function () {
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
          artist.sort(function () {
            return 1 - 2;
          });
          musicName.sort(function () {
            return 1 - 2;
          });
          for (var i = 0; i < imgCount - (imgCount - loadImgCount); i++) {
            linkObj += `<a href = "play/${musicName[i].replace(/ /g, "")}">
            <div class = "music-object">
            <img class = "music-thumbnail" src = "./thumbnail/${artist[i]} - ${
              musicName[i]
            },.webp" alt = "${
              musicName[i]
            }" width = "300px" height = "168.75px">
                        <div class = "music-caption">
                        <img src   = "image/play.webp" alt = "play" width = "35px" height = "35px">
                        <div class = "music-artist">${artist[i].slice(
                          15
                        )}</div><br>
                        <div  class = "music-title">${musicName[i]}</div>
                        <span class = "music-date">${artist[i].slice(
                          4,
                          15
                        )}</span>
                            </div>
                            </div>
                            </a >`;
          }
          $("#music-grid").html(linkObj);
          reloadMusicGrid();
          $(window).scroll(function () {
            var scrollY = window.scrollY;
            var gridHeight = $("#music-grid").height();
            // $("#scrollY").text(window.scrollY);
            // $("#height").text(gridHeight);
            // $("#dif").text(gridHeight - scrollY);
            if (gridHeight - scrollY < 640 && loadImgCount < imgCount) {
              if (loadImgCount >= imgCount) {
                loadImgCount = imgCount;
              } else {
                loadImgCount += 12;
              }
              for (
                var i = loadImgCount - 12; // i = 12 -> 24 -> 36 -> 48
                i < imgCount - (imgCount - loadImgCount);
                i++
              ) {
                linkObj += `<a href ="play/${musicName[i].replace(/ /g, "")}">
              <div class = "music-object">
              <img class = "music-thumbnail" src = "./thumbnail/${
                artist[i]
              } - ${musicName[i]},.webp" alt = "${
                  musicName[i]
                }" width = "300px" height = "168.75px">
                          <div class = "music-caption">
                          <img src   = "image/play.webp" alt = "play" width = "35px" height = "35px">
                          <div class = "music-artist">${artist[i].slice(
                            15
                          )}</div><br>
                          <div  class = "music-title">${musicName[i]}</div>
                          <span class = "music-date">${artist[i].slice(
                            4,
                            15
                          )}</span>
                              </div>
                              </div>
                              </a >`;
              }
              $("#music-grid").html(linkObj);
              reloadMusicGrid();
            }
          });
        });
      } else if (findDetailPage.test(currentPage)) {
        $("div#img-name").load("./thumbnail_name.txt", function () {
          imgName = $(this).text();
          fullName = imgName.split(",");
          fullName.pop();
          for (var i = 0; i < fullName.length; i++) {
            temp[i] = fullName[i].split(" - ");
            for (var j = 0; j < 1; j++) {
              artist[i] = temp[i][0];
              musicName[i] = temp[i][1];
            }
          }
          artist.sort(function () {
            return 1 - 2;
          });
          musicName.sort(function () {
            return 1 - 2;
          });
          for (var i = 0; i < imgCount - (imgCount - loadImgCount); i++) {
            linkObj += `<a href  = "detail/${musicName[i].replace(/ /g, "")}">
                        <div class = "detail-object">
                        <img class = "detail-thumbnail" src = "./thumbnail/${
                          artist[i]
                        } - ${musicName[i]},.webp" alt = "${
              musicName[i]
            }" width = "300px" height = "168.75px">
                        <div class = "detail-caption">
                        <div class = "detail-artist">${artist[i].slice(
                          15
                        )}</div><br>
                        <div  class = "detail-title">${musicName[i]}</div>
                        <span class = "music-date">${artist[i].slice(
                          4,
                          15
                        )}</span>
                            </div>
                            </div>
                            </a >
                        `;
          }
          $("#detail-grid").html(linkObj);
          reloadDetailGrid();
          $(window).scroll(function () {
            var scrollY = window.scrollY;
            var gridHeight = $("#detail-grid").height();
            // $("#scrollY").text(window.scrollY);
            // $("#height").text(gridHeight);
            // $("#dif").text(gridHeight - scrollY);
            if (gridHeight - scrollY < 640 && loadImgCount < imgCount) {
              if (loadImgCount >= imgCount) {
                loadImgCount = imgCount;
              } else {
                loadImgCount += 12;
              }
              for (
                var i = loadImgCount - 12;
                i < imgCount - (imgCount - loadImgCount); // imgCount - (imgCount - loadImgCount)
                i++
              ) {
                linkObj += `
                        <a href  = "detail/${musicName[i].replace(/ /g, "")}">
                        <div class = "detail-object">
                        <img class = "detail-thumbnail" src = "./thumbnail/${
                          artist[i]
                        } - ${musicName[i]},.webp" alt = "${
                  musicName[i]
                }" width = "300px" height = "168.75px">
                        <div class = "detail-caption">
                        <div class = "detail-artist">${artist[i].slice(
                          15
                        )}</div><br>
                        <div  class = "detail-title">${musicName[i]}</div>
                        <span class = "music-date">${artist[i].slice(
                          4,
                          15
                        )}</span>
                            </div>
                            </div>
                            </a >
                        `;
              }
              $("#detail-grid").html(linkObj);
              reloadDetailGrid();
            }
          });
        });
      }
    }
  });
});

function reloadMusicGrid() {
  var descriptionHeight = parseInt($("#music-grid").css("height"));
  $("#music-page").css("height", descriptionHeight + 300);
}

function reloadDetailGrid() {
  var descriptionHeight = parseInt($("#detail-grid").css("height"));
  $("#detail-page").css("height", descriptionHeight + 300);
}
