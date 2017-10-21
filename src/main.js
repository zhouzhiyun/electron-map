import Vue from 'vue';
import app from './App.vue';
import router from './router/router';
import store from './store/store';

var vm = new Vue({
    el: '#app',
	render: function (h) {
		return h(app);
	},
	router,
	store
})