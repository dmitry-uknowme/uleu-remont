const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function generateHtmlPlugins(templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.map((item) => {
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
			inject: false,
		});
	});
}

const htmlFiles = generateHtmlPlugins('./src/pages');

module.exports = {
	mode: 'development',
	entry: '../src/index.js',
	output: {
		filename: '[name][hash].bundle.js',
		path: path.resolve(__dirname, '../build'),
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /.js$/,
				exclude: /node_modules/,
			},
			{ use: ['style-loader', 'css-loader', 'sass-loader'], test: /.(css|sass|scss)$/ },
			{
				type: 'asset',
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
		],
	},
	plugins: [...htmlFiles],
	resolve: {
		extensions: ['.js'],
	},
};
