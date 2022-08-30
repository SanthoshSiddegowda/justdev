import { useContext } from "@nuxtjs/composition-api";

export const orderApi = () => {
	const { $api } = useContext();

	const postOrder = async (orders) => {
		const response = await $api.post("get-my-details", {
			orders,
		});
		return response.data;
	};

	return {
		postOrder,
	};
};
