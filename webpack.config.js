const path = require("path");
const webpack = require("webpack");
var copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return [
    {
      entry: "./src/main.js",
      output: {
        filename: "widget.js",
        path: path.resolve(__dirname, "dist"),
      },
      devServer: {
        contentBase: path.resolve(__dirname, "dist"),
      },
      // plugins: isDevBuild
      //   ? [
      //       new webpack.SourceMapDevToolPlugin(),
      //       new copyWebpackPlugin([{ from: "demo/" }]),
      //     ]
      //   : [new webpack.optimize.UglifyJsPlugin()],
      module: {
        rules: [
          { test: /\.html$/i, use: "html-loader" },
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader" + (isDevBuild ? "" : "?minimize"),
            ],
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/env",
                    {
                      targets: {
                        browsers: ["ie 6", "safari 7"],
                      },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    },
  ];
};
