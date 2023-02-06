module.exports = {
	config: {
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: ".",
			css: "./assets/css",
			js: "./assets/js",
			img: "./assets/images"
		},
		dist: {
			base: "./dist",
			css: "./dist/assets/css",
			js: "./dist/assets/js",
			img: "./dist/assets/images"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/images"
		}
	}
}