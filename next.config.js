const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'


module.exports = withImages({
	fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
	esModule: true,
	assetPrefix: isProd ? 'https://cdn.statically.io/gh/liviabelirocha/https://liviabelirocha.github.io/' : '',
})
