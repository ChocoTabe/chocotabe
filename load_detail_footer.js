$(() => {
  loadDetailFooter();
});

function loadDetailFooter() {
  fetch("../footer.html").then(function (response) {
    response.text().then(function (text) {
      $("footer").append(text);
    });
  });
}
