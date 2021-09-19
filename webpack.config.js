const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    ticketSearchForm: path.join(__dirname, 'src', 'index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'static'),
          to: path.join(__dirname, 'dist'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: {
      name: 'ticketSearchForm',
      type: 'umd',
    },
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    clean: true,
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
};
