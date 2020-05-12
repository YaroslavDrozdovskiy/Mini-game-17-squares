$(document).ready(function () {
  const maxHits = 17;

  let hits = 0;
  let miss = 0;
  let firstHitTime = 0;
  let timer = false; // переменная ,отражающая состояние запуска таймера
  let starter = false; //переменная отражающая состояние запуска игры

  function round() {
    let divSelector = randomDivId();
    $(divSelector).addClass("target");
    $(".target").text(hits);

    if (!timer) {
      firstHitTime = getTimestamp();
      timer = true;
    }
    if (hits === maxHits) {
      endGame();
    }
  }

  function endGame() {
    $(".slot-wrap").hide();
    let totalPlayedMillis = getTimestamp() - firstHitTime;
    let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
    $("#total-time-played").text(totalPlayedSeconds);
    $("#total-miss").text(miss);
    $("#win-message").removeClass("d-none");
    if (miss > 0) {
      $("#total-miss").append(`\nСтарайтесь лучше!`);
    }
    $("#button-start").addClass('d-none')

  }

  function handleClick(event) {
    // FIXME: убирать текст со старых таргетов. Кажется есть .text?
    if ($(event.target).hasClass("target")) {
      hits += 1;
      $(event.target).text('');
      $(event.target).removeClass("target");
      $('.miss').text('');
      $('*').removeClass("miss");
      round();
    }
    else {
      $(event.target).addClass("miss");
      miss += 1;
      $(event.target).text(randomMissText);
    }
  }

  $("#button-start").click(function () {
    if (!starter) {
      round();
      starter = true;
    }
    $(".game-field").click(handleClick);
    $(".game-field").click(timer);
  })

  $("#button-reload").click(function () {
    location.reload();
  });
});



