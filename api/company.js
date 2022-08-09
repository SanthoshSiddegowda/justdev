import { useContext } from '@nuxtjs/composition-api'

export const companyApi = () => {
	const { $api } = useContext()

	const fetchCompany = async (routeName) => {
		const response = await $api.post('companies', {
				domain: window.location.host
		})
		return response
	}

	return {
		fetchCompany,
	}
}
