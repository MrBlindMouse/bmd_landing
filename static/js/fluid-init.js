/**
 * Conditionally loads the WebGL fluid simulation.
 * Skips loading when the user prefers reduced motion.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var script = document.createElement("script");
  script.src = "static/js/webgl-fluid.js";
  script.async = true;
  document.body.appendChild(script);
})();
