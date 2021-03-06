const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const { url } = require('inspector');

const nothing = () => {};

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isAnalyze = env.analyze;

  return {
    // mode: isProduction ? 'production' : 'development',
    mode: 'production',
    // devtool: isProduction ? 'source-map' : 'eval',
    devtool: 'inline-source-map',
    entry: ['./src/index.js'],
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/build'),
      // publicPath: path.join(__dirname, 'build'),
    },
    resolve: {
      extensions: ['.js', '.json', '.mjs'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        }, {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  "src/styles/vars.scss",
                ]
              }
            }
          ],
        }, {
          test: /\.(eot|ttf|woff|svg|woff2)$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/[hash][ext][query]'
          }
        }, {
          test: /\.(png|jpe?g|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]'
          }
        }, {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    devServer: {
      static: './src/',
      port: 9000,
    },
    plugins: [
      isProduction ? new CleanWebpackPlugin({}) : nothing,
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      isAnalyze ? new BundleAnalyzerPlugin() : nothing,
    ],
  };
};

