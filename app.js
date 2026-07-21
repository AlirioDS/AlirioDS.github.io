// Hand-written vanilla JS — no frameworks, no dependencies.
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // Terminal typewriter in the hero
  var out = document.getElementById("term-out");
  if (out) {
    var text = out.getAttribute("data-text") || "";
    var i = 0;
    out.textContent = "";
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    out.appendChild(cursor);
    (function type() {
      if (i < text.length) {
        cursor.insertAdjacentText("beforebegin", text.charAt(i));
        i++;
        setTimeout(type, 28 + Math.floor(i % 3) * 22);
      }
    })();
  }

  // Occasional glitch on the name
  var glitch = document.querySelector(".glitch");
  if (glitch) {
    var pulse = function () {
      glitch.classList.add("glitching");
      setTimeout(function () { glitch.classList.remove("glitching"); }, 380);
      setTimeout(pulse, 2600 + (pulse.n = ((pulse.n || 0) + 1700) % 4200));
    };
    setTimeout(pulse, 1200);
  }

  // Reveal sections on scroll
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }
})();
