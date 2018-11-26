<template>
    <div>
        <article>
            align-items 属性定义flex容器一级子元素在交叉轴上如何对齐。
        </article>
        <article>align-items: flex-start | center | flex-end | baseline(项目的第一行文字的基线对齐) | stretch(default，如果项目未设置高度或设为auto，将占满整个容器的高度); </article>

        <div class="align-items-tips">{{ alignItems }}</div>
        <div class="flex" :class="alignItems">
            <div class="block block1">text</div>
            <div class="block block2">text</div>
            <div class="block block3">text</div>
            <div class="block block4">text</div>
        </div>
        <div class="button-list">
            <button @click="changeAlignItems('flex-start')">Flex-Start</button>
            <button @click="changeAlignItems('center')">Center</button>
            <button @click="changeAlignItems('flex-end')">Flex-End</button>
            <button @click="changeAlignItems('baseline')">Baseline</button>
            <button @click="changeAlignItems('stretch')">Stretch</button>
        </div>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alignItems: 'stretch(default)'
        }
    },
    methods: {
        changeAlignItems(style) {
            // this.$set('alignItems', style);
            this.alignItems = style;
        },
        /**
         * 返回导航页
         */
        jumpFlex() {
            this.$router.back();
        }
    },
}
</script>

<style scoped>
.align-items-tips {
    margin-top: 1rem;
    font-weight: 800;
    text-align: left;
}
.flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
    background-color: green;
}
.flex-start {
    align-items: flex-start;
}
.center {
    align-items: center;
}
.flex-end {
    align-items: flex-end;
}
.baseline {
    align-items: baseline;
}
.stretch {
    align-items: stretch;
}
.block {
    width: 3rem;
    background-color: brown;
}
.block1 {
    height: 4rem;
    font-size: 0.5rem;
}
.block2 {
    height: 6rem;
    font-size: 1.5rem;
}
.block3 {
    height: 2rem;
    font-size: 1rem;
}
.block4 {
    height: 8rem;
    font-size: 1.8rem;
}
.button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
}
button {
    font-size: 1rem;
}
</style>


