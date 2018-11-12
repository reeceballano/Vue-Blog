<template>
	<div class="posts">
		<h2>{{ title }}</h2>
		<ul>
			<li v-for="post in posts" :key="post.id">ID: {{post.id}}  {{ post.title.rendered }}</li>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				title: 'Posts',
			}
		},

		created() {
			this.$store.dispatch('loadPosts')
		},

		mounted: function() {
			//console.log(this.posts)
		},

		computed: {
			...mapState([
				'posts',
			])		
		},


	}
</script>

<style></style>