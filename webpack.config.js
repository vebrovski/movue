const src = "./src",
      dist = "./dist",
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { VueLoaderPlugin } = require('vue-loader'),
      DotEnv = require('dotenv-webpack');
      //themeVariables = require('./src/utils/variables/processVariables');

module.exports = {
  entry: {
    path: `${src}/index.js`,
  },

  output: {
    path: path.resolve(__dirname, dist),
    filename: 'index.dist.js',
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],

    alias: {
      '@src': path.resolve(__dirname, src),
      '@components': path.resolve(__dirname, `${src}/components`),
      '@images': path.resolve(__dirname, `${src}/assets/images`),
      '@icons': path.resolve(__dirname, `${src}/assets/icons`),
      '@fonts': path.resolve(__dirname, `${src}/assets/fonts`),
      '@utils': path.resolve(__dirname, `${src}/utils`),
      '@requests': path.resolve(__dirname, `${src}/utils/requests`),
      '@router': path.resolve(__dirname, `${src}/router`),
      '@store': path.resolve(__dirname, `${src}/store`),
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }, 
      },
    
      { 
        test: /\.scss|css$/, 
        use: [
          'vue-style-loader',
          'style-loader', 
          'css-loader',
          'postcss-loader',
          // {
          //   loader: '@epegzz/sass-vars-loader',
          //   options: {
          //     syntax: 'scss',
          //     vars: { ...themeVariables },
          //   },
          // },
          'sass-loader'
        ] 
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: [
          path.resolve(__dirname, `${src}/assets/images`),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          },
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/,
        include: [
          path.resolve(__dirname, `${src}/assets/icons`),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'icons/'
          },
        },
      },

      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        include: [
          path.resolve(__dirname, `${src}/assets/fonts`),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],
      }
    ]
  },

  devServer: {
    contentBase: dist,
    hot: true,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    new DotEnv(),
  ],

  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
