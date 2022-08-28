import { useContext } from "@nuxtjs/composition-api";

export const companyApi = () => {
	const { $api } = useContext();

	const fetchCompany = async () => {
		const response = await $api.post("get-my-details", {
			domain: window.location.host,
		});
		return response.data;
	};

	return {
		fetchCompany,
	};
};
