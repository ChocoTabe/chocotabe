const delayTime = 10000;
const duration = 500;
const animationTime = 500;

$(() => {
  firstCall();
});

function firstCall(first) {
  if (first == 1 && $("#bg_button_1").css("opacity") == 0.25) {
    if (window.innerWidth > 960) {
      $("#bg2, #bg3, #bg4").css("left", 1920);
    } else {
      $("#bg2, #bg3, #bg4").css("left", 960);
    }
    bg1Description();
    $("#bg1").css("left", 0);
    return;
  }
  bg1Description();
  if (first == 1 && $("#bg_button_1").css("opacity") == 1) {
    return;
  } else {
    bg1ToBg2();
  }
}
function secondCall(second) {
  if (second == 2 && $("#bg_button_2").css("opacity") == 0.25) {
    if (window.innerWidth > 960) {
      $("#bg1, #bg3, #bg4").css("left", 1920);
    } else {
      $("#bg1, #bg3, #bg4").css("left", 960);
    }
    bg2Description();
    $("#bg2").css("left", 0);
    return;
  }
  bg2Description();
  if (second == 2 && $("#bg_button_2").css("opacity") == 1) {
    return;
  } else {
    bg2ToBg3();
  }
}
function thirdCall(third) {
  if (third == 3 && $("#bg_button_3").css("opacity") == 0.25) {
    if (window.innerWidth > 960) {
      $("#bg1, #bg2, #bg4").css("left", 1920);
    } else {
      $("#bg1, #bg2, #bg4").css("left", 960);
    }
    bg3Description();
    $("#bg3").css("left", 0);
    return;
  }
  bg3Description();
  if (third == 3 && $("#bg_button_3").css("opacity") == 1) {
    return;
  } else {
    bg3ToBg4();
  }
}
function forthCall(forth) {
  if (forth == 4 && $("#bg_button_4").css("opacity") == 0.25) {
    if (window.innerWidth > 960) {
      $("#bg1, #bg2, #bg3").css("left", 1920);
    } else {
      $("#bg1, #bg2, #bg3").css("left", 960);
    }
    bg4Description();
    $("#bg4").css("left", 0);
    return;
  }
  bg4Description();
  if (forth == 4 && $("#bg_button_4").css("opacity") == 1) {
    return;
  } else {
    bg4ToBg1();
  }
}

function bg1Description() {
  $("#bg_button_1").css("opacity", "1");
  $("#bg_button_2, #bg_button_3, #bg_button_4").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Walk!");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `
    ChocoTabe의 47번째 자작곡. 'Walk!'는 밝은 마음으로 앞으로 나아가고자 하는
  마음을 표현한 음악이다. Electornic 장르에 BPM 120으로, 일반적인 템포이다.
  Pulse 파형의 멜로디가 도트 게임 브금을 생각하게 만드는 것이 특징이다.
  `
  );
  $("#play-now-button").attr("href", "play/Walk!.html");
}

function bg2Description() {
  $("#bg_button_2").css("opacity", "1");
  $("#bg_button_1, #bg_button_3, #bg_button_4").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Deeper");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `
    ChocoTabe의 46번째 자작곡. 'Deeper'는 어둡고 깊은 곳에서 받는 
    호기심으로 더 깊은 곳으로 들어가는 모습을 표현한 음악이다. Electronic
  장르에 BPM 124로, 일반적인 템포이다. Heart Fluttering을 만들고 나서 빨리 다른
  음악도 만들고 싶다는 생각에 Deeper가 만들어졌다.
  `
  );
  $("#play-now-button").attr("href", "play/Deeper.html");
}

function bg3Description() {
  $("#bg_button_3").css("opacity", "1");
  $("#bg_button_1, #bg_button_2, #bg_button_4").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Heart Fluttering");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `  ChocoTabe의 45번째 자작곡. 2022년에 만들어진 첫 곡이다. 
    'Heart Fluttering'은 다시 시작하면서 걱정되는 마음도 있지만 설레이는 마음을 표현한 음악이다. 
    Electronic 장르에 BPM 118로, 일반적인 템포이다. 
    이 곡은 Lost Way 이후로 7개월이 지나고 나서야 만든 것으로 자작곡 발전에 있어서 의미가 있다. `
  );
  $("#play-now-button").attr("href", "play/HeartFluttering.html");
}

function bg4Description() {
  $("#bg_button_4").css("opacity", "1");
  $("#bg_button_1, #bg_button_2, #bg_button_3").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Lost Way");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `  ChocoTabe의 44번째 자작곡. 2021년에 만들어진 마지막 곡이다. 'Lost Way'는
잃어버린 길의 여정을 그린 것으로 몽환적인 분위기의 음악이다. Electronic 장르에
BPM 128로, 몽환적인 분위기를 가진 음악치고는 템포가 느리지 않다. `
  );
  $("#play-now-button").attr("href", "play/LostWay.html");
}

function bg1ToBg2() {
  setTimeout(() => {
    if ($("#bg_button_2, #bg_button_3, #bg_button_4").css("opacity") == 1)
      return;
    $("#main-music-title, #main-artist, #main-description").fadeOut();
    if (window.innerWidth > 960) {
      $("#bg1").animate({ left: -1920 }, duration, () => {
        $("#bg1").css("left", 1920);
      });
    } else {
      $("#bg1").animate({ left: -960 }, duration, () => {
        $("#bg1").css("left", 960);
      });
    }
    $("#bg2").animate({ left: 0 }, animationTime, () => {
      secondCall();
    });
  }, delayTime);
}

function bg2ToBg3() {
  setTimeout(() => {
    if ($("#bg_button_1, #bg_button_3, #bg_button_4").css("opacity") == 1)
      return;
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

function bg3ToBg4() {
  setTimeout(() => {
    if ($("#bg_button_1, #bg_button_2, #bg_button_4").css("opacity") == 1)
      return;
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

function bg4ToBg1() {
  setTimeout(() => {
    if ($("#bg_button_1, #bg_button_2, #bg_button_3").css("opacity") == 1)
      return;
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
    $("#bg1").animate({ left: 0 }, animationTime, () => {
      firstCall();
    });
  }, delayTime);
}
