const debug             = process.env.NODE_ENV !== "production";
const webpack           = require( 'webpack' );
const path              = require ( 'path' );
const root              = path.resolve ( './src/js' );
const dist              = path.resolve ( './dist' );
const ExtractTextPlugin = require ( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
  context   : root,
  devtool   : debug ? "inline-sourcemap" : null,
  entry     : `${root}/client.jsx`,
  output    : {
    path    : dist,
    filename: "client.min.js"
  },

  resolve   : {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    root: [root]
  },

  module    : {
    loaders : [
      {
        test   : /\.(css|scss)$/,
        loader : ExtractTextPlugin.extract ( 'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        )
      },
      {
        test    : /\.jsx?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/
      }
    ]
  },

  plugins: debug ? [
    new ExtractTextPlugin ( "styles.css" )
  ] : [
    new ExtractTextPlugin ( "styles.css" ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new CopyWebpackPlugin([{ from: '../index.html' }])
  ]
};