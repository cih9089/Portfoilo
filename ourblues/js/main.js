$(document).ready(function () {
  $(function () {
    let characterSlide = $(".slide_characters").bxSlider({
      auto: true,
      pager: true,
      speed: 400,
      maxSlide: 3,
      minSlide: 3,
      controls: true,
      slideMargin: "70px",
    });
  });
  /********* preview ******** */
  $(function () {
    let videoFile = document.getElementById("preVideo");
    $(".play_btn").on("click", function () {
      $(".play_btn").css("display", "none");
      videoFile.play();
    });
    let options = videojs("preVideo", {
      sources: [{ src: "./video(1080).mp4", type: "video/mp4" }],
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5],
      poster: "./images/main.jpg",
      controls: true,
      width: 600,
      height: 400,
      preload: "auto",
      muted: true,
      controlBar: {
        playToggle: true,
        pictureInPictureToggle: false,
        remainingTimeDisplay: true,
        progressControl: false,
        qualitySelector: true,
      },
    });
  });
  /* brand location */
  let brandInfo = $(".brand_info");
  $(document).on("click", ".brand_btn", function (e) {
    brandInfo.show();
    brandInfo.addClass("open");
  });

  $(document).mouseup(function (e) {
    if (brandInfo.has(e.target).length == 0) {
      brandInfo.hide();
      brandInfo.removeClass("open");
    }
  });
  /* subsidiary location */
  let subInfo = $(".sublink_info");
  $(document).on("click", ".sub_btn", function (e) {
    subInfo.show();
    subInfo.addClass("open");
  });

  $(document).mouseup(function (e) {
    if (subInfo.has(e.target).length == 0) {
      subInfo.hide();
      subInfo.removeClass("open");
    }
  });

  const scrollMove = $(".sc_btn");
  $(window).scroll(function () {
    let scrollValue = $(document).scrollTop();
    if (scrollValue > 600) {
      $(".sc_btn").css("display", "block");
    } else {
      $(".sc_btn").css("display", "none");
    }
    $(".sc_btn").click(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  /*********subcharacters***********/
  $(function () {
    let subcharacterSlide = $(".slide_subcharacters").bxSlider({
      auto: false,
      pager: false,
      speed: 400,
      maxSlide: 1,
      minSlide: 1,
      controls: true,
      slideMargin: "70px",
      touchEnabled: false,
    });
    $(".subc_pre").click(function () {
      subcharacterSlide.goToPrevSlide();
    });
    $(".subc_next").click(function () {
      subcharacterSlide.goToNextSlide();
    });
  });
});
