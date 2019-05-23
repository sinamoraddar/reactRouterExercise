const path = require(`path`);

//entry -> output
module.exports = {
  entry: `./src/app.js`,
  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      test: /\.s?css$/,
    }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback:true,
    contentBase: path.join(__dirname, 'public')
  }
}