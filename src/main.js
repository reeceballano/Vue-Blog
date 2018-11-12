import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import VuePaginateAl from 'vue-paginate-al'

Vue.use(VueAxios, axios)

Vue.component('vue-paginate-al', VuePaginateAl)
Vue.component('vue-posts', Posts)
Vue.component('vue-addpost', AddPost)

Vue.config.productionTip = false

/**
	SET API BASE URL
*/
const baseURL = 'http://vue-wp-3.test/';

if (typeof baseURL !== 'undefined') {
	Vue.axios.defaults.baseURL = baseURL;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
