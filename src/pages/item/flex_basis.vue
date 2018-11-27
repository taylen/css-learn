<template>
    <div class="container">
        <article>flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余的空间，它的默认值为 auto，即项目的本来大小。</article>
        <article>flex-basis: {{ msg }} | auto; /* default auto */</article>
        <article>它可以设置为跟 width 或 height 属性一样的值，则项目将占据固定空间。</article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '<number>'
        }
    }
}
</script>

<style scoped>

</style>

