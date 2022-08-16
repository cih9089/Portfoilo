$(document).ready(function () {
  let traget = $(".acc_info");
  $(document).on("click", ".account", function (e) {
    traget.show();
    traget.addClass("open");
  });
  $(document).mouseup(function (e) {
    if (traget.has(e.target).length == 0) {
      traget.hide();
      traget.removeClass("open");
    }
  });
  // 메인비주얼 슬라이드
  $(function () {
    let visualSlide = $(".slide_mv").bxSlider({
      auto: true,
      controls: false,
      pager: false,
      pause: 4000,
      touchEnabled: false,
      preloadImages: "all",
      slideWidth: "1032.5PX",
      onSliderLoad: function () {
        $(".slide.mv").css("visibility", "visible").animate({ opacity: 1 });
      },
    });

    $(".prev").click(function () {
      visualSlide.goToPrevSlide();
    });
    $(".next").click(function () {
      visualSlide.goToNextSlide();
    });
  });
  $(function () {
    let artSlide = $(".slide_like").bxSlider({
      auto: false,
      controls: false,
      pager: false,
      maxSlides: 4,
      minSlides: 4,
      autoHover: true,
      mode: "horizontal",
    });
    $(".like_prev").click(function () {
      artSlide.goToPrevSlide();
    });
    $(".like_next").click(function () {
      artSlide.goToNextSlide();
    });
  });
  $(".search").click(function () {
    $(".search_open").css("display", "block"), 2000;
  });
  $(".closed").click(function () {
    $(".search_open").css("display", "none"), 2000;
  });
  $(".slide_1").click(function () {
    $(".mv_play").css("display", "block");
    $(".mv_play").css("backgroundColor", "#44ff56");
    $(".mvbox_closed").css("display", "block");
  });
  // 음악 눌렀을때
  $(".the_song").click(function () {
    $(".play_mv").css("display", "none");
    $(".play_mp3").css("display", "block");
    $(".mv_play").css("backgroundColor", "#44ff56");
  });
  // 동영상 눌렀을때
  $(".the_mv").click(function () {
    $(".play_mv").css("display", "block");
    $(".play_mp3").css("display", "none");
    $(".mv_play").css("backgroundColor", "#c4b58c");
    $(".mvbox_closed").css("display", "block");
  });
  $(".mvbox_closed").click(function () {
    $(".mv_play").css("display", "none");
    $(this).css("display", "none");
  });
  $(".play_btn").click(function () {
    $(".play_song").css("display", "block");
  });
  let myPlay = document.getElementById("mymusic");
  $(".playsong_closed").click(function () {
    $(".play_song").css("display", "none");
    myPlay.pause();
  });

  // subpage1 tag slide//
  $(function () {
    let tagSlide = $(".slide_tag").bxSlider({
      auto: false,
      controls: false,
      pager: false,
      maxSlides: 5,
      minSlides: 4,
      mode: "horizontal",
      slideWidth: "230px",
    });
    $(".tag_prev").click(function () {
      tagSlide.goToPrevSlide();
    });
    $(".tag_next").click(function () {
      tagSlide.goToNextSlide();
    });
  });
  // subpage1 album slide //
  $(function () {
    let albumSlide = $(".album_slider").bxSlider({
      auto: true,
      controls: false,
      pager: false,
      maxSlides: 5,
      minSlides: 4,
      slideWidth: "230px",
      speed: 400,
      autoHover: true,
      touchEnabled: navigator.maxTouchPoints > 0,
      touchEnabled: false,
    });
    $(".ab_prev").click(function () {
      albumSlide.goToPrevSlide();
    });
    $(".ab_next").click(function () {
      albumSlide.goToNextSlide();
    });
  });
  // subpage2 top slide //
  $(function () {
    let topSlide = $(".top_slider").bxSlider({
      auto: false,
      pager: false,
      slideMargin: 20,
      maxSlides: 5,
      minSlides: 4,
      slideWidth: "184px",
    });
    $(".top_prev").click(function () {
      topSlide.goToPrevSlide();
    });
    $(".top_next").click(function () {
      topSlide.goToNextSlide();
    });
  });
  $(function () {
    $(".add").click(function () {
      $("#add_play").css("display", "block");
    });
    $(".closed_add").click(function () {
      $("#add_play").css("display", "none");
    });
  });
});
