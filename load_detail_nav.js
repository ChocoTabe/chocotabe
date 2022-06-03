$(() => {
  loadDetailPageNav();
});

function loadDetailPageNav() {
  fetch("../detail-page-nav.html").then(function (response) {
    response.text().then(function (text) {
      $("nav").append(text);
    });
  });
}
