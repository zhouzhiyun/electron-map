import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from '../compontents/home.vue';

export default new VueRouter({
    routes: [
        {path:'/',component:home}
    ]
})