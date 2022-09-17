import { useContext } from "@nuxtjs/composition-api";

export const orderApi = () => {
	const { $api } = useContext();

	const postOrder = async (orders, user) => {
		const response = await $api.post("order", {
			orders,
			user,
		});
		return response.data;
	};

	return {
		postOrder,
	};
};
