$(document).ready(function () {
  var envelope = $("#envelope");
  var audio = document.getElementById('open-audio');
  // Clicking the envelope toggles open/close
  envelope.on('click', function (e) {
    e.stopPropagation();
    if (envelope.hasClass('open')) close();
    else open();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    try {
      if (audio) {
        audio.currentTime = 0;
        var p = audio.play();
        if (p && p.catch) p.catch(function () {});
      }
    } catch (e) {}
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    try {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } catch (e) {}
  }
});
