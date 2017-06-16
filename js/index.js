(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene
  var scene = new ScrollMagic.Scene({
      triggerElement: "#what_we_do"
    })
    .setTween("#what_we_do", 0.5, {
      backgroundColor: "green",
      scale: 2.5
    }) // trigger a TweenMax.to tween
    .addIndicators({
      name: "1 (duration: 0)"
    }) // add indicators (requires plugin)
    .addTo(controller);

})();
