<template>
	<div class="container">
		<div>
			<h2>Fetch users from reqres</h2>
		</div>
		<div>
			<button type="button" class="btn btn-primary" @click="loadUsers">
				Fetch users
			</button>
		</div>
		<div class="card mt-3">
			<div class="d-flex p-4 justify-content-center">
				<pre v-if="users && !loading">{{ users }}</pre>
				<div v-else>
					{{ loading ? "Loading..." : "No users available" }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { userApi } from "@/api/user";

function sleep(ms = 2000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default defineComponent({
	name: "PagesIndex",
	setup() {
		const { fetchUsers } = userApi();
		const users = ref([]);
		const loading = ref(false);

		const loadUsers = async () => {
			loading.value = true;
			await sleep();
			const res = await fetchUsers();
			console.log(res.data);
			users.value = res.data;
			loading.value = false;
		};

		return {
			users,
			loading,
			loadUsers,
		};
	},
});
</script>
