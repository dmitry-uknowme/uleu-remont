const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const devConfig = {
	mode: 'production',
	devServer: {
		port: 3000,
		contentBase: '../build',
		open: 'chrome',
	},
};

module.exports = merge(common, devConfig);
