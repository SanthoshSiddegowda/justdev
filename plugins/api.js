export default function ({ $axios, error: nuxtError }, inject) {
	const api = $axios.create();

	api.onRequest((config) => {});

	api.onError((error) => {
		const code = parseInt(error.response && error.response.status);
		if (code === 422) {
			alert(error.response.data.message);
		}
	});

	api.onResponse((res) => {
		return res.data;
	});

	inject("api", api);
}
