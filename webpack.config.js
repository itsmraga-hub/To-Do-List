/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devServer: {
			static: './dist',
	},
	mode: 'development',
	plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "/To-Do-List/",
		clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
