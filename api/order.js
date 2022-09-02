import { useContext } from "@nuxtjs/composition-api";

export const orderApi = () => {
	const { $api } = useContext();

	const postOrder = async (orders) => {
		const response = await $api.post("order", {
			orders,
		});
		return response.data;
	};

	return {
		postOrder,
	};
};
