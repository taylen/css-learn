<template>
    <div class="container">
        <article>
            flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
            .item {
            flex: none | [ {{ msg }} ]
            }
            该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
            建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "<'flex-grow'> <'flex-shrink'>? || <'flex-basis'>"
        }
    }
}
</script>

<style scoped>

</style>

