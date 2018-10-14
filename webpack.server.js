const path = require('path');

module.exports = {
	// Inform webpack that we're building a bundle 
	// for nodeJs, and not for the browser
	target: 'node',

	// server-application entry point
	entry: './src/index',

	// path to generated output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
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