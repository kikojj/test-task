const webpack = require("webpack");
const path = require("path");
const colors = require("colors");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "production";
if (!process.env.NODE_ENV) {
  console.log(`[${colors.yellow("PROCESS")}]: NODE_ENV is undefined. ${colors.underline(`Default value("${NODE_ENV}") is used`)}`);
}

const isDevMode = NODE_ENV === "development";
const isProdMode = NODE_ENV === "prodcution";

const CLIENT_PORT = 7070;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: NODE_ENV,

  entry: "./src/client/index",
  output: {
    filename: `[name]${isProdMode ? ".[hash]" : ""}.js`,
    chunkFilename: `[name].bundle${isProdMode ? ".[hash]" : ""}.js`,
    path: path.resolve(__dirname, "dist/public"),
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@client": path.resolve(__dirname, "src/client"),
      "@ts": path.resolve(__dirname, "src/ts"),
    },
  },

  devtool: isDevMode ? "source-map" : "",
  devServer: isDevMode
    ? {
        port: CLIENT_PORT,
        hot: true,
        contentBase: ["./src/client", "./src/public"],
        watchContentBase: true,
        historyApiFallback: true,
        writeToDisk: true,
      }
    : {},

  optimization: {
    minimize: isProdMode,
    splitChunks: {
      chunks: "all",
      // name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: "public",
      cleanAfterEveryBuildPatterns: ["public", "!assets", "!index.html"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/public/assets",
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),
    // new webpack.DefinePlugin({
    //   "process.env": JSON.stringify(config),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: useBabelLoader(),
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: [useBabelLoader(), "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|woff|eot|ico)$/,
        use: [`file-loader?name=assets/[name].[hash].[ext]`],
        exclude: /node_modules/,
      },
    ],
  },
};

function useBabelLoader() {
  return {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  };
}
