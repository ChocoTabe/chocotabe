$(() => {
  const delayTime = 10000;
  const duration = 500;
  const animationTime = 500;
  mainAnimation();
  function mainAnimation() {
    $("#main-music-title, #main-artist, #main-description").fadeIn();
    $("#main-music-title").text("Lost Way");
    $("#main-artist").text("ChocoTabe");
    $("#main-description").text(
      `  ChocoTabe의 44번째 자작곡. 2021년에 만들어진 마지막 곡이다. 'Lost Way'는
  잃어버린 길의 여정을 그린 것으로 몽환적인 분위기의 음악이다. Electronic 장르에
  BPM 128로, 몽환적인 분위기를 가진 음악치고는 템포가 느리지 않다. `
    );
    $("#play-now-button").attr("href", "play/LostWay.html");
    setTimeout(() => {
      $("#main-music-title, #main-artist, #main-description").fadeOut();
      if (window.innerWidth > 960) {
        $("#bg1").animate({ right: 1920 }, duration, () => {
          $("#bg1").css("right", -1920);
        });
      } else {
        $("#bg1").animate({ right: 960 }, duration, () => {
          $("#bg1").css("right", -960);
        });
      }
      $("#bg2").animate({ left: 0 }, animationTime, () => {
        secondCall();
      });
    }, delayTime);
  }
  function secondCall() {
    $("#main-music-title, #main-artist, #main-description").fadeIn();
    $("#main-music-title").text("For You");
    $("#main-artist").text("ChocoTabe");
    $("#main-description").text(
      `  ChocoTabe의 43번째 자작곡. 'For You'는 '너'에게 닿기를 바라는 마음을 간절히
  표현한 음악이다. Electronic 장르에 BPM 130으로, 적당한 템포이다. 이전 자작곡인
  Like a Star에서 사용된 강렬한 전자기타 음이 들리는 것이
  특징이다.`
    );
    $("#play-now-button").attr("href", "play/For You.html");
    setTimeout(() => {
      $("#main-music-title, #main-artist, #main-description").fadeOut();
      if (window.innerWidth > 960) {
        $("#bg2").animate({ left: -1920 }, duration, () => {
          $("#bg2").css("left", 1920);
        });
      } else {
        $("#bg2").animate({ left: -960 }, duration, () => {
          $("#bg2").css("left", 960);
        });
      }
      $("#bg3").animate({ left: 0 }, animationTime, () => {
        thirdCall();
      });
    }, delayTime);
  }
  function thirdCall() {
    $("#main-music-title, #main-artist, #main-description").fadeIn();
    $("#main-music-title").text("Like a Star");
    $("#main-artist").text("ChocoTabe");
    $("#main-description").text(
      `  ChocoTabe의 43번째 자작곡. 'Like a Star'는 전쟁터에서 영웅이 별처럼 나타나는
  모습을 표현한 음악이다. Electronic 장르에 BPM 134으로, 약간 빠른 템포이다.
  전자기타와 드럼이 강렬하게 들려 웅장한 느낌이 나는 것이 특징이다.`
    );
    $("#play-now-button").attr("href", "play/Like a Star.html");
    setTimeout(() => {
      $("#main-music-title, #main-artist, #main-description").fadeOut();
      if (window.innerWidth > 960) {
        $("#bg3").animate({ left: -1920 }, duration, () => {
          $("#bg3").css("left", 1920);
        });
      } else {
        $("#bg3").animate({ left: -960 }, duration, () => {
          $("#bg3").css("left", 960);
        });
      }
      $("#bg4").animate({ left: 0 }, animationTime, () => {
        forthCall();
      });
    }, delayTime);
  }
  function forthCall() {
    $("#main-music-title, #main-artist, #main-description").fadeIn();
    $("#main-music-title").text("Regret");
    $("#main-artist").text("ChocoTabe");
    $("#main-description").text(
      `  ChocoTabe의 41번째 자작곡. 'Regret'는 지난날들에 대한 후회를 하고 있는 것을
  표현한 음악이다. Electronic 장르에 BPM 114로, 약간 느린 템포이다.`
    );
    $("#play-now-button").attr("href", "play/Regret.html");
    setTimeout(() => {
      $("#main-music-title, #main-artist, #main-description").fadeOut();
      if (window.innerWidth > 960) {
        $("#bg4").animate({ left: -1920 }, duration, () => {
          $("#bg4").css("left", 1920);
        });
      } else {
        $("#bg4").animate({ left: -960 }, duration, () => {
          $("#bg4").css("left", 960);
        });
      }
      $("#bg1").animate({ right: 0 }, animationTime, () => {
        mainAnimation();
      });
    }, delayTime);
  }
});
