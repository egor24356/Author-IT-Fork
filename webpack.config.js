const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		bitrix: './src/js/bitrix.js',
		cases: './src/js/cases.js',
		services: './src/js/services.js',
		aboutus: './src/js/aboutus.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
