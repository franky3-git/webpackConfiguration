const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 5000
	},
	module: {
		rules: [
			{
				test: /\.s?[ca]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			}
		]
	}
}