/**
 * Conditionally loads the WebGL fluid simulation.
 * Skips loading when the user prefers reduced motion, or on touch-capable
 * devices so the page can scroll normally.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    return;
  }

  var script = document.createElement("script");
  script.src = "static/js/webgl-fluid.min.js";
  script.async = true;
  script.onerror = function () {
    var fallback = document.createElement("script");
    fallback.src = "static/js/webgl-fluid.js";
    fallback.async = true;
    document.body.appendChild(fallback);
  };
  document.body.appendChild(script);
})();
