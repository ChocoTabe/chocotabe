function loadFooter() {
  fetch("footer.html").then(function (response) {
    response.text().then(function (text) {
      $("footer").append(text);
    });
  });
}

function loadNav() {
  fetch("nav.html").then(function (response) {
    response.text().then(function (text) {
      $("nav").append(text);
    });
  });
}

function aboutMyMusic() {
  fetch("about/about_music.html").then(function (response) {
    response.text().then(function (text) {
      document.getElementById("description").innerHTML = text;
      reloadFooterTop();
    });
  });
}

function loadPlayPage() {
  fetch("play-page-template.html").then(function (response) {
    response.text().then(function (text) {
      document.querySelector("html").innerHTML = text;
    });
  });
}

function reloadFooterTop() {
  if (window.innerWidth > 960) {
    var descriptionHeight =
      parseInt($("p#description").css("height")) +
      parseInt($("div#main-section").css("height"));
    $("#page").css("height", descriptionHeight + 1080);
    $("footer").css("top", 1080 + descriptionHeight + 1080);
  } else {
    var descriptionHeight =
      parseInt($("p#description").css("height")) +
      parseInt($("div#main-section").css("height"));
    $("#page").css("height", descriptionHeight + 540);
    $("footer").css("top", 540 + descriptionHeight + 540);
  }
}
