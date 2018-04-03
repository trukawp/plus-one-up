// konfiguracja Webpack

const path = require("path");
const webpack = require("webpack");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const appPath = path.join(__dirname, "..", "app");

module.exports = {
  target: 'web',
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      assets: path.resolve(appPath, 'assets'), // pojemnik na obiekty(np. obrazki, fonty) wykorzystywane na stronie
      config: path.resolve(appPath, 'config'), // pliki konfiguracyjne dla wykorzystanych bibliotek
      components: path.resolve(appPath, 'components'), // zbiór głupich komponentów odpowiadających za wyswietlanie treści
      constants: path.resolve(appPath, 'constants'), // stale wykorzystywane w obrebie calego projektu, np. akcje z reduxa
      containers: path.resolve(appPath, 'containers'), // mądre komponenty odpowiadające za logike aplikacji
      services: path.resolve(appPath, 'services'), // pliki komunikujące się z serwisami zewnętrznymi (np. poprzez API)
      utilities: path.resolve(appPath, 'utilities'), // funkcje pomocnicze
      actions: path.resolve(appPath, 'actions'), // akcje reduxowe
      reducers: path.resolve(appPath, 'reducers'), // reducery reduxowe
      views: path.resolve(appPath, 'views'),
    },
    extensions: ['.js', '.png'],
  },
  entry: {
    app: path.join(appPath, 'index.js'),
  },
  output: {
    path: path.join(appPath, '..', 'public'),
    publicPath: '/',
    filename: 'bundle-[hash:8].js',
  },
  plugins: [
    new cleanWebpackPlugin(
      ['public'],
      {
        root: path.join(appPath, '..'),
        exclude: 'uploads',
      }
    ),
    new extractTextWebpackPlugin('[name]-[hash:8].css'),
    new htmlWebpackPlugin({
      template: path.join(appPath, 'index.html'),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: extractTextWebpackPlugin.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
          }
        }]),
      }, {
        test: /\.(jpe?g|png|svg)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]',
          },
        },
      }, {
        test: /\.(woff|woff2)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: 'assets/fonts/[name].[ext]',
            }
          }
        ]
      },
    ]
  }
};