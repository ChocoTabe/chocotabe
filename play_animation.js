$(function () {
  musicTitleAnimation();
});

function musicTitleAnimation() {
  $("body").mousemove(function (e) {
    if (e.clientY >= 780) {
      $("#music-title-play, #music-artist-play, #music-date-play").css(
        "display",
        "visible"
      );
      $(
        "#black-opacity-play, #music-title-play, #music-artist-play, #music-date-play"
      ).fadeIn("fast");
    } else {
      $(
        "#black-opacity-play, #music-title-play, #music-artist-play, #music-date-play"
      ).fadeOut("fast");
    }
  });
}
