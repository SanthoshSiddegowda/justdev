export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Just Ticket",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css",
			},
		],
		script: [
			{
				src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
				body: true,
			},
			{
				src: "js/bootstrap.min.js",
				body: true,
			},
			{
				src: "js/allscript.js",
				body: true,
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/bootstrap.min.css", "@/assets/css/custom.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/api.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxtjs/composition-api/module",
		"@nuxtjs/google-fonts",
		"@nuxtjs/pwa",
		"@nuxtjs/axios",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	generate: {
		interval: 2000,
	},

	googleFonts: {
		families: {
			Rubik: {
				// weights
				wght: [400],
			},
		},
	},

	axios: {
		baseURL: "https://tzfmbr04i4.execute-api.ap-south-1.amazonaws.com/api/v1",
		retry: { retries: 3 },
	},
};
