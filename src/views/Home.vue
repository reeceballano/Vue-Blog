<template>
  <div class="home">
	<ul>
		<li v-for="post in posts" :key="post.id">ID: {{post.id}}  {{ post.title.rendered }}</li>
	</ul>

	<vue-paginate-al :totalPage="numberOfLinks" @btnClick="goToFunction"></vue-paginate-al>

	<p>{{ postCount }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
	name: 'home',

	data() {
		return {
			currentPage: 1,
			numberOfLinks: 0,
		}
	},

	mounted: function() {
		this.goToFunction(this.currentPage)
	},

	computed: {
		...mapState([
			'posts',
		]),

		/**
			Get the number of posts (ALL POSTS) then divide 5 (number post to display in view, you can edit in store.js).
		*/
		postCount() {
			axios.get('http://vue-wp-3.test/wp-json/wp/v2/posts')
			.then((response) => {

				let x = response.headers['x-wp-total'];
				let y = Math.round((x / 10).toFixed(2));

				this.numberOfLinks = y;

				return y;
			})
		},


	},

	methods: {
		goToFunction : function(n) {
			this.currentPage = n;
			this.$store.dispatch('loadPosts', this.currentPage)
		},		
	},	

}
</script>
