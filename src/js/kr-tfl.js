import TurboFeLy from "./libs/turbofely.esm";

const tfl = new TurboFeLy({
  linkSelector: "a[href]",
  container: ".kratos-hentry",
  updateMode: "diff",
  cacheSize: 4,
});
