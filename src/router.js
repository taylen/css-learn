import Vue from 'vue';
import VueRouter from 'vue-router'

import Start from './pages/start.vue'
import Flex from './pages/flex.vue'
import FlexDirection from './pages/flex_direction.vue'
import FlexWrap from './pages/flex_wrap.vue'
import FlexFlow from './pages/flex_flow.vue'
import JustifyContent from './pages/justify_content.vue'
import AlignItems from './pages/align_items.vue'
import AlignContent from './pages/align_content.vue'

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
    },
    {
        name: 'flexDirection',
        path: '/flexDirection',
        component: FlexDirection
    },
    {
        name: 'flexWrap',
        path: '/flexWrap',
        component: FlexWrap
    },
    {
        name: 'flexFlow',
        path: '/flexFlow',
        component: FlexFlow
    },
    {
        name: 'justifyContent',
        path: '/justifyContent',
        component: JustifyContent
    },
    {
        name: 'alignItems',
        path: '/alignItems',
        component: AlignItems
    },
    {
        name: 'alignContent',
        path: '/alignContent',
        component: AlignContent
    },
];

const router = new VueRouter({
    routes: routes
})

export default router; 