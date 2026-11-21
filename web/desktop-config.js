// Desktop build bootstrap.
// The upstream game picks its language from ?lang=... or localStorage.
// Default to Simplified Chinese on first launch; delete localStorage.lang or open
// index.html with ?lang=en to get the original English text.
(function () {
  try {
    if (!localStorage.lang) {
      localStorage.lang = "zh_cn";
    }
  } catch (e) {
    /* private mode / storage disabled: fall through to the built-in English */
  }
})();
