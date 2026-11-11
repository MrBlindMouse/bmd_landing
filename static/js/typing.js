(function () {
	var lineEl = document.querySelector("[data-role-line]");
	if (!lineEl) return;

	var phrases = [
		"a designer",
		"a developer",
		"a tinkerer",
		"an entrepreneur",
		"an enthusiast",
		"an explorer",
		"a romantic",
		"a dog dad",
		"a husband",
		"a friend",
		"a driver",
		"a foody",
		"a coffee snob",
		"a beer connoisseur",
		"a music lover",
		"a bookworm",
		"a traveler",
		"a nature lover",
		"a tech geek",
		"a problem solver",
		"a creative thinker",
		"a perfectionist",
		"a life-long learner",
		"an ADHD sufferer",
	];

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	var phraseIndex = 0;
	var TYPE_MS = 100;
	var DELETE_MS = 50;
	var PAUSE_TYPED = 1000;
	var PAUSE_AFTER_DELETE = 300;
	var PAUSE_GAP = 450;

	function commonPrefix(a, b) {
		var n = Math.min(a.length, b.length);
		var i = 0;
		while (i < n && a.charAt(i) === b.charAt(i)) {
			i += 1;
		}
		return a.slice(0, i);
	}

	function typeText(text, done) {
		if (!text) {
			done();
			return;
		}
		var i = 0;
		function step() {
			if (i >= text.length) {
				done();
				return;
			}
			lineEl.textContent += text.charAt(i);
			i += 1;
			window.setTimeout(step, TYPE_MS);
		}
		step();
	}

	function deleteChars(count, done) {
		if (count <= 0) {
			done();
			return;
		}
		function step(remaining) {
			if (remaining <= 0) {
				done();
				return;
			}
			lineEl.textContent = lineEl.textContent.slice(0, -1);
			window.setTimeout(function () {
				step(remaining - 1);
			}, DELETE_MS);
		}
		step(count);
	}

	function transitionToNext() {
		var nextIndex = (phraseIndex + 1) % phrases.length;
		var next = phrases[nextIndex];
		var shared = commonPrefix(lineEl.textContent, next);
		var toDelete = lineEl.textContent.length - shared.length;

		deleteChars(toDelete, function () {
			phraseIndex = nextIndex;
			window.setTimeout(function () {
				typeText(next.slice(shared.length), function () {
					window.setTimeout(transitionToNext, PAUSE_TYPED);
				});
			}, PAUSE_AFTER_DELETE);
		});
	}

	lineEl.textContent = "";
	window.setTimeout(function () {
		typeText(phrases[0], function () {
			window.setTimeout(transitionToNext, PAUSE_TYPED);
		});
	}, 500);
})();
