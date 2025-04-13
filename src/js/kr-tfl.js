const TurboFeLy = require("turbofely");

const tfl = new TurboFeLy({
  linkSelector: "a[href]:not([target='_blank'])",
  container: "#main",
  updateMode: "replace",
  cacheSize: 4,
});
