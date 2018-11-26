<template>
    <div>
        <article>
            flex-flow 属性是flex-direction 和 flex-wrap 属性的简写形式，默认值为 row nowrap(即flex-direction和flex-wrap的默认值之和)。
        </article>
        <article>flex-flow: {{msg}} ; flex-direction 有四个值，flex-wrap有三个值，那么排列组合共有 12种组合方式。</article>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '<flex-direction> || <flex-wrap>'
        }
    },
    methods: {
        /**
         * 返回导航页
         */
        jumpFlex() {
            this.$router.back();
        }
    }
}
</script>

<style scoped>

</style>


