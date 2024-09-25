const withImages = require("next-images");

module.exports = withImages({
	fileExtensions: ["jpg", "jpeg", "png", "gif"],
	esModule: true,
	output: "export",
});
