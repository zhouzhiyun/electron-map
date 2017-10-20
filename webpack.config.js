  const path = require('path');
  const webpack = require('webpack');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
  
  
  module.exports = {
      entry: './src/main.js',
      devtool: 'inline-source-map',
      output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/'
      },
      module: {
          rules: [{
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      'css-loader'
                  ]
              },
              {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [
                      'file-loader'
                  ]
              },

              {
                  test: /\.(woff|woff2|eot|ttf|otf)$/,
                  use: [
                      'file-loader'
                  ]
              },
              {
                  test: /\.vue$/,
                  use: [
                      'vue-loader'
                  ]
              },
			  {
				test: /\.js$/,
				exclude: /node_modules/,
				use:[
					'babel-loader'
				]
			}
          ]
      },
	  
	  resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            'assets': path.resolve(__dirname, 'assets')
        }
    },
	
	plugins: [
        new webpack.ProvidePlugin({
        })
    ]
  };