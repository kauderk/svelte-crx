(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-f80a0709.js")
    );
  })().catch(console.error);

})();
