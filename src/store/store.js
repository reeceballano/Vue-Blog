import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: [],
		postCount: 0,
		limitPost: 5,
	},

	getters: {
		newPost: state => state.newPost,
		posts: state => state.posts,
		postCount: state => state.postCount,
		limitPost: state => state.limitPost,
	},

	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts
		},		

		SET_POSTCOUNT(state, postCount) {
			state.postCount = postCount
		},	

		SET_LIMITPOST(state, limitPost) {
			state.limitPost = limitPost
		}
	},

	actions: {
		loadPosts({ commit, getters }, payload) {
			axios
		        .get('/wp-json/wp/v2/posts?page=' + payload + '&per_page=' + getters.limitPost)
		        .then(r => r.data)
		        .then(posts => {
		        commit('SET_POSTS', posts)
		    })
		},

		countPost({ commit, state }) {
			axios.get('/wp-json/wp/v2/posts')
			.then((response) => {
				let totalPost = response.headers['x-wp-total']
				state.postCount = totalPost
				commit('SET_POSTCOUNT', totalPost)
			})
		},
	}
})
