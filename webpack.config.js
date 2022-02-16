const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
