var path = require('path');

module.exports = {
	entry: path.join(process.cwd(), 'app/client-render.js'),
	output: {
		path: './app/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /.js$/,
			loader: 'babel'
		}]
	}
};