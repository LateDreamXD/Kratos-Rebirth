const esbuild = require("esbuild");
const buildOpts = require("./build-options");

const buildOnce = () => {
  console.log("构建资源...");
  esbuild.build(buildOpts.buildCSSOpts);
  esbuild.build(buildOpts.buildHighlightJSCSSOpts);
  esbuild.build(buildOpts.buildPrismJSCSSOpts);
  esbuild.build(buildOpts.buildJSOpts);
  esbuild.build(buildOpts.buildTflOpts);
  console.log("资源构建完成！");
};

buildOnce();

module.exports = buildOnce;
