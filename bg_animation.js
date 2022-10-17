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
  $("#main-music-title").text("Frontier");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `  ChocoTabe의 49번째 자작곡. 'Frontier'는 미지의 지역을 개척하기 위해 모험을
  떠나는 모습을 표현한 음악이다. Electornic 장르에 BPM 98로 느린 템포이다. 뒤에
  넓게 깔리는 베이스가 웅장함을 주고 kick과 Snare로 긴장감을 주는 것이 특징이다.`
  );
  $("#play-now-button").attr("href", "play/Frontier");
}

function bg2Description() {
  $("#bg_button_2").css("opacity", "1");
  $("#bg_button_1, #bg_button_3, #bg_button_4").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Sky");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(
    `
    ChocoTabe의 48번째 자작곡. 'Sky'는 맑은 하루의 상쾌함을 표현한 음악이다. Electronic 장르에 BPM 126으로, 일반적인 템포이다. 통통 튕기는 소리로 맑고 밝은 분위기를 만드는 것이 특징이다.
  `
  );
  $("#play-now-button").attr("href", "play/Sky");
}

function bg3Description() {
  $("#bg_button_3").css("opacity", "1");
  $("#bg_button_1, #bg_button_2, #bg_button_4").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Walk!");
  $("#main-artist").text("ChocoTabe");
  $("#main-description").text(`
    ChocoTabe의 47번째 자작곡. 'Walk!'는 밝은 마음으로 앞으로 나아가고자 하는
  마음을 표현한 음악이다. Electornic 장르에 BPM 120으로, 일반적인 템포이다.
  Pulse 파형의 멜로디가 도트 게임 브금을 생각하게 만드는 것이 특징이다.
  `);
  $("#play-now-button").attr("href", "play/Walk!");
}

function bg4Description() {
  $("#bg_button_4").css("opacity", "1");
  $("#bg_button_1, #bg_button_2, #bg_button_3").css("opacity", "0.25");
  $("#main-music-title, #main-artist, #main-description").fadeIn();
  $("#main-music-title").text("Deeper");
  $("#main-artist").text("ChocoTabe");
  $("#main-description")
    .text(`ChocoTabe의 46번째 자작곡. 'Deeper'는 어둡고 깊은 곳에서 받는 
    호기심으로 더 깊은 곳으로 들어가는 모습을 표현한 음악이다. Electronic
  장르에 BPM 124로, 일반적인 템포이다. Heart Fluttering을 만들고 나서 빨리 다른
  음악도 만들고 싶다는 생각에 Deeper가 만들어졌다.`);
  $("#play-now-button").attr("href", "play/Deeper");
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
