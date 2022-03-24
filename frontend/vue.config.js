module.exports = {
	devServer: {
		port: 7777,
	},
	runtimeCompiler: true,
	configureWebpack: (config) => {
		config['performance'] = {
			maxEntrypointSize: 10000000,
			maxAssetSize: 30000000,
		}
	},
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'EE框架' // 设置title
			return args
		})
	},
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					//在此处设置，也可以设置直角、边框色、字体大小等
					'primary-color': '#07C160',
				},
				javascriptEnabled: true,
			},
		},
	},
}
