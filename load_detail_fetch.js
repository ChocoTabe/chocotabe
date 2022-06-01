$(function () {
  setTimeout(function () {
    category1($("div#music-name").text());
  }, 500);
});

function category1(_musicName) {
  fetch(`detail/${_musicName}/description.html`).then(function (response) {
    response.text().then(function (text) {
      document.getElementById("description-detail").innerHTML = text;
      reloadDetailPage();
    });
  });
}

function reloadDetailPage() {
  if (window.innerWidth > 960) {
    var descriptionHeight = parseInt($("#description-detail").css("height"));
    $("#detail-page").css("height", descriptionHeight + 300);
    $("footer").css("top", descriptionHeight + 430);
  } else {
    var descriptionHeight = parseInt($("#description-detail").css("height"));
    $("#detail-page").css("height", descriptionHeight + 150);
    $("footer").css("top", descriptionHeight + 215);
  }
}
