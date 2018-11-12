<template>
	<div class="add-post">
		<input type="text" placeholder="Title" v-on:keyup.enter="addNew">
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				title: 'Add New Post',
			}
		},

		computed: {
			...mapState([
				'posts',
			])		
		},		

		methods: {
			addNew() {
				console.log('adding new post')
			}
		},

	}
</script>

<style></style>