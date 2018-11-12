import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: [],
		postCount: '',
	},

	getters: {
		newPost: state => state.newPost,
		posts: state => state.posts,
	},

	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts
		},		

	},

	actions: {
		loadPosts({ commit }, payload) {
			axios
		        .get('/wp-json/wp/v2/posts?page=' + payload + '&per_page=10')
		        .then(r => r.data)
		        .then(posts => {
		        commit('SET_POSTS', posts)
		    })
		},

	}
})
