<template>
    <div>
        <article>
            align-content 属性在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。
        </article>
        <article>注意：容器内必须有多行的项目，该属性才能渲染出效果。</article>
        <article>提示：使用justify-content属性对齐主轴上的各项（水平）</article>
        <article>align-content: flex-start | flex-end | center | space-between | space-around | stretch(default 轴线占满整个交叉轴);</article>
        <article>align-items 和 align-content 的区别：</article>
        <article>align-items 是针对单行items中的items 在该行的交叉轴上的对齐方式；align-content 是针对多行items的这一行 在flex容器交叉轴上的对齐方式。更多详情参考：https://www.jianshu.com/p/f3824b584518 http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html </article>

        <div class="align-content-tips">{{ alignContent }}  {{ alignItems }}</div>
        <div class="flex" :class="alignContent + ' ' + alignItems">
            <div class="block block1"></div>
            <div class="block block2"></div>
            <div class="block block3"></div>
            <div class="block block4"></div>
            <div class="block block5"></div>
            <div class="block block3"></div>
            <div class="block block2"></div>
            <div class="block block1"></div>
            <div class="block block5"></div>
            <div class="block block3"></div>
            <div class="block block2"></div>
            <div class="block block1"></div>
            <div class="block block1"></div>
            <div class="block block5"></div>
            <div class="block block3"></div>
            <div class="block block2"></div>
            <div class="block block1"></div>
        </div>
        <div class="align-content-tips">Align-Items</div>
        <div class="button-list">
            <button @click="changeAlignItems('flex-start')">Flex-Start</button>
            <button @click="changeAlignItems('center')">Center</button>
            <button @click="changeAlignItems('flex-end')">Flex-End</button>
            <button @click="changeAlignItems('baseline')">Baseline</button>
            <button @click="changeAlignItems('stretch')">Stretch</button>
        </div>
        <div class="align-content-tips">Align-Content</div>
        <div class="button-list">
            <button @click="changeAlignContent('flex-start')">Flex-Start</button>
            <button @click="changeAlignContent('center')">Center</button>
            <button @click="changeAlignContent('flex-end')">Flex-End</button>
            <button @click="changeAlignContent('space-between')">SpaceBetween</button>
            <button @click="changeAlignContent('space-around')">SpaceAround</button>
            <button @click="changeAlignContent('stretch')">Stretch</button>
        </div>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alignContent: 'ac-stretch',
            alignItems: 'stretch',
        }
    },
    methods: {
        changeAlignItems(style) {
            this.alignItems = style;
        },
        changeAlignContent(style) {
            style = 'ac-' + style;
            this.alignContent = style;
        },
        /**
         * 返回导航页
         */
        jumpFlex() {
            this.$router.back();
        },
    },
}
</script>

<style scoped>
.align-content-tips {
    margin-top: 1rem;
    font-weight: 800;
    text-align: left;
}
.flex {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-around;
    height: 20rem;
    background-color: green;
}
/* align-items */
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

/* align-content */
.ac-flex-start {
    align-content: flex-start;
}
.ac-center {
    align-content: center;
}
.ac-flex-end {
    align-content: flex-end;
}
.ac-space-between {
    align-content: space-between;
}
.ac-space-around {
    align-content: space-around;
}
.ac-stretch {
    align-content: stretch;
}
/* block */
.block {
    height: 2rem;
    margin-right: 1rem;
    background-color: brown;
}
.block1 {
    width: 2rem;
}
.block2 {
    width: 3rem;
}
.block3 {
    width: 4rem;
}
.block4 {
    width: 2rem;
}
.block5 {
    width: 1rem;
}
/* button */
.button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
}
button {
    font-size: 0.5rem;
}
</style>


