module.exports = {
  // The paths config to use when compiling your react app for development or production.
  paths: function (paths, env) {
    paths.appHtml = "public/index.html";
    paths.appIndexJs = "./src/client/index.js";
    return paths;
  },
};
