$(() => {
  fetch("get_css.html").then(function (response) {
    response.text().then(function (text) {
      $("head").append(text);
    });
  });
});
