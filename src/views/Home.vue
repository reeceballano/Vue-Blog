<template>
  <div class="home">
	<ul>
		<li v-for="post in posts" :key="post.id">ID: {{post.id}}  {{ post.title.rendered }}</li>
	</ul>

	<vue-paginate-al :totalPage="numberOfLinks" @btnClick="goToFunction"></vue-paginate-al>

	<p>{{ pagination }}</p>

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
			numberOfLinks: 2,
		}
	},

	mounted: function() {
		this.goToFunction(this.currentPage)
		this.$store.dispatch('countPost')
	},

	computed: {
		...mapState([
			'postCount',
			'posts',
		]),


		pagination() {
			let totalPost = this.$store.getters.postCount;
			let limitPost = this.$store.getters.limitPost;
			let result = Math.round((totalPost / limitPost).toFixed(2));

			this.numberOfLinks = result;

			//return result;

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
