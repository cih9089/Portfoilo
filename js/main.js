$(document).ready(function () {
  /*****a태그 이동 애니메이션**** */
  let $root = $("html, body");
  $(".gnb > ul > li > a").click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
  const scrollMove = $("#top_btn");
  $(window).scroll(function () {
    let scrollValue = $(document).scrollTop();
    if (scrollValue > 600) {
      $("#top_btn").css("display", "block");
    } else {
      $("#top_btn").css("display", "none");
    }
    $("#top_btn").click(function () {
      window.scrollTo(
        {
          x: "0",
          y: "0",
          behavior: "smooth",
        },
        500
      );
    });
  });

  let typingBool = false;
  let typingIdx = 0;
  let liIndex = 0;
  let liLength = $(".typing-text").length;

  // 타이핑될 텍스트를 가져온다
  let typingTxt = $(".typing-text").eq(liIndex).text();
  //liIndex 인덱스로 구분해 한줄씩 가져옴

  typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;
    let tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    $(".typing-text").removeClass("on");
    $(".typing-text").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing-text").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      //한문장이끝나면
      if (liIndex < liLength - 1) {
        //다음문장으로  가기위해 인덱스를 1증가
        liIndex++;
        //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".typing-text").eq(liIndex).text();

        //다음문장 타이핑전 1초 쉰다
        clearInterval(tyInt);
        //타이핑종료

        setTimeout(function () {
          //1초후에 다시 타이핑 반복 시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      } else if (liIndex == liLength - 1) {
        //마지막 문장까지 써지면 반복종료
        clearInterval(tyInt);
        //1초후
        setTimeout(function () {
          //사용했던 변수 초기화
          typingBool = false;
          liIndex = 0;
          typingIdx = -0;

          //첫번째 문장으로 셋팅
          typingTxt = $(".typing-text").eq(liIndex).text();
          //타이핑 결과 모두 지우기
          $(".typing-text").html("");

          //반복시작
          tyInt = setInterval(typing, 100);
        }, 1000);
      }
    }
  }
  /*********스타일 가이드 ********** */
  $(function () {
    $(".style_guide").click(function () {
      $(".ym_style").css("display", "block");
    });
    $(".ym_exit").click(function () {
      $(".ym_style").css("display", "none");
    });
  });
  $(function () {
    $("#start_btn").on("click", function (event) {
      let offset = $("#info").offset();
      $("html,body").animate({ scrollTop: offset.top }, 2000);
    });
  });
  $(function () {
    $(document).ready(function () {
      let tragetFirst = $(".ym_style");
      $(document).on("click", ".account", function (e) {
        tragetFirst.show();
        tragetFirst.addClass("open");
      });
      $(document).mouseup(function (e) {
        if (tragetFirst.has(e.target).length == 0) {
          tragetFirst.hide();
          tragetFirst.removeClass("open");
        }
      });
    });
  });
  $(function () {
    $(".obstyle_guide").click(function () {
      $(".ob_style").css("display", "block");
    });
    $(".ob_exit").click(function () {
      $(".ob_style").css("display", "none");
    });
  });
  $(function () {
    $(document).ready(function () {
      let tragetSecond = $(".ob_style");
      $(document).on("click", ".account", function (e) {
        tragetSecond.show();
        tragetSecond.addClass("open");
      });
      $(document).mouseup(function (e) {
        if (tragetSecond.has(e.target).length == 0) {
          tragetSecond.hide();
          tragetSecond.removeClass("open");
        }
      });
    });
  });
});
