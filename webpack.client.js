const path = require('path');

module.exports = {
	// server-application entry point
	entry: './src/client/client.js',

	// path to generated output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},

	// run babel on every file
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] } }]
					]
				}
			}
		]
	}
};