<template>
    <div class="container">
        <article>flex-grow 属性定义item的放大比例，默认为0，即如果存在剩余空间，也不放大。</article>
        <article>flex-grow: {{ msg }}; /* default 0 */</article>
        <article>例如：如果所有项目的flex-grow属性都为1，则它们等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项目多一倍。</article>
        <div class="flex">
            <div class="block flex-grow1"></div>
            <div class="block flex-grow2"></div>
            <div class="block flex-grow3"></div>
        </div>

        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '<number>'
        }
    },
    methods: {
        /**
         * 返回导航页
         */
        jumpFlex() {
            this.$router.back();
        },
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    height: 10rem;
    background-color: green;
}
.block {
    flex-grow: 0;
    width: 1rem;
    height: 3rem;
    background-color: brown;
}
.flex-grow1 {
    flex-grow: 1;
}
.flex-grow2 {
    margin-left: 1rem;
    flex-grow: 2;
}
.flex-grow3 {
    margin-left: 1rem;
    flex-grow: 3;
}
</style>

