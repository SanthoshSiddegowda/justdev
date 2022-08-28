export default function ({ $axios, error: nuxtError }, inject) {
	const api = $axios.create();

	api.onRequest((config) => {
		console.log(`Making request to ${config.url}`);
	});

	api.onError((error) => {
		const code = parseInt(error.response && error.response.status);
		if (code === 422) {
			alert("hello");
		}
	});

	api.onResponse((res) => {
		return res.data;
	});

	inject("api", api);
}
