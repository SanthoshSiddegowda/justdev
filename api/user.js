import { useContext } from '@nuxtjs/composition-api'

export const userApi = () => {
  const { $api } = useContext()

  const fetchUser = async (userId) => {
    const response = await $api.get(`users/${userId}`)
    return response
  }

  const fetchUsers = async () => {
    const response = await $api.get('users')
    return response
  }

  return {
    fetchUser,
    fetchUsers,
  }
}
