import { useContext } from "@nuxtjs/composition-api";

export const companyApi = () => {
	const { $api } = useContext();

	const fetchCompany = async () => {
		const response = await $api.post("get-my-details", {
			domain: window.location.host,
		});
		if (response.code && response.code == 204) {
			window.location = "/error/invalid-company";
		}
		return response.data;
	};

	return {
		fetchCompany,
	};
};
