import { useContext } from "@nuxtjs/composition-api";

export const productApi = () => {
	const { $api } = useContext();

	const fetchProducts = async (uuid) => {
		const response = await $api.post("get-my-products", {
			uuid: uuid,
		});
		return response.data;
	};

	return {
		fetchProducts,
	};
};
