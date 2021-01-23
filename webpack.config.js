const status = process.env.npm_lifecycle_event;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.s?[ca]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			},
			/*{
				test: /\.(png|gif|jpe?g)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "img"
					}
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}*/
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/template.html'})
	]
}

/*if(status == 'build') {
	config.plugins.push(new HtmlWebpackPlugin({template: './src/template.html'}));
	config.mode = 'production'
}*/

module.exports = config;