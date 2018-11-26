<template>
    <div class="container">
        <article>
            Flex是Flexible Box的缩写，意为“弹性布局”，任何一个容器都可以指定为Flex布局。
        </article>
        <article>
            注意，设为flex布局后，子元素的float、clear和vertical-align属性将失效。
        </article>
        <article>
            Flex容器存在两个轴，主轴（main axis）和交叉轴（cross axis），Flex容器的所有子元素自动成为容器成员，即Flex Item.
        </article>
        <article>
            Flex容器会具有6个属性：
        </article>
        <ul>
            <li @click="jumpItem('flexDirection')">flex-direction</li>
            <li @click="jumpItem('flexWrap')">flex-wrap</li>
            <li @click="jumpItem('flexFlow')">flex-flow</li>
            <li @click="jumpItem('justifyContent')">justify-content</li>
            <li @click="jumpItem('alignItems')">align-items</li>
            <li @click="jumpItem('alignContent')">align-content</li>
        </ul>
        <article>
            Flex容器内Item会具有6个属性：
        </article>
        <ul>
            <li @click="jumpItem('itemOrder')">order</li>
            <li @click="jumpItem('itemFlexGrow')">flex-grow</li>
            <li @click="jumpItem('itemFlexShrink')">flex-shrink</li>
            <li @click="jumpItem('itemFlexBasis')">flex-basis</li>
            <li @click="jumpItem('itemFlex')">flex</li>
            <li @click="jumpItem('itemAlignSelf')">align-self</li>
        </ul>
    </div>
</template>

<script>
const whiteRoutes = [
    'flexDirection',
    'flexWrap',
    'flexFlow',
    'justifyContent',
    'alignItems',
    'alignContent',
    
    'itemOrder',
    'itemFlexGrow',
    'itemFlexShrink',
    'itemFlexBasis',
    'itemFlex',
    'itemAlignSelf',
]
export default {
    methods: {
        jumpItem(page) {
            if (whiteRoutes.indexOf(page) !== -1) {
                this.$router.push({
                    name: page
                });
            } else {
                /* eslint-disable */  
                console.log('This is wrong router.')
            }
        }
    }
}
</script>

<style scoped>
    
</style>


