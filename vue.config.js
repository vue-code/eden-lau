module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
	devServer: {
		proxy: {
			'/login': {
				target: 'http://localhost:8081',
				changeOrigin: true,
				pathRewrite: {
					'^/logn': '',
				},
			}
		},
	},
}
