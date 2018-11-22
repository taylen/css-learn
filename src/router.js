import Vue from 'vue';
import VueRouter from 'vue-router'

import Start from './pages/start.vue'
import Flex from './pages/flex.vue'

Vue.use(VueRouter);

const routes = [
    {
        name: 'default',
        path: '/',
        component: Start
    },
    {
        name: 'flex',
        path: '/flex',
        component: Flex
    }
];

const router = new VueRouter({
    routes: routes
})

export default router; 