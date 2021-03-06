const status = process.env.npm_lifecycle_event;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		filename: 'main.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 5000
	},
	optimization: {
		
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.s?[ca]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			},
			{
				test: /\.(png|gif|jpe?g)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: "[name].[hash].[ext]",
						publicPath: "./"
					}
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/template.html'})
	]
}

if(status == 'build') {
	config.plugins.push(new CleanWebpackPlugin(), new MiniCssExtractPlugin({filename: '[name].[hash].css'}));
	config.mode = 'production';
	config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
	config.optimization.minimizer = [new OptimizeCssAssetsPlugin()];
}

module.exports = config;