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

import ItemOrder from './pages/item/order.vue'
import ItemFlexGrow from './pages/item/flex_grow.vue'
import ItemFlexShrink from './pages/item/flex_shrink.vue'
import ItemFlexBasis from './pages/item/flex_basis.vue'
import ItemFlex from './pages/item/flex.vue'
import ItemAlignSelf from './pages/item/align_self.vue'

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
    {
        name: 'itemOrder',
        path: '/itemOrder',
        component: ItemOrder
    },
    {
        name: 'itemFlexGrow',
        path: '/itemFlexGrow',
        component: ItemFlexGrow
    },
    {
        name: 'itemFlexShrink',
        path: '/itemFlexShrink',
        component: ItemFlexShrink
    },
    {
        name: 'itemFlexBasis',
        path: '/itemFlexBasis',
        component: ItemFlexBasis
    },
    {
        name: 'itemFlex',
        path: '/itemFlex',
        component: ItemFlex
    },
    {
        name: 'itemAlignSelf',
        path: '/itemAlignSelf',
        component: ItemAlignSelf
    },
];

const router = new VueRouter({
    routes: routes
})

export default router; 