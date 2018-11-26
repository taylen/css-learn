<template>
    <div>
        <article>
            justify-content 属性定义了flex容器内的一级子项目（二级不生效）在主轴上的对齐方式。
        </article>
        <article>justify-content: flex-start(default: 左对齐) | center(居中) | flex-end(右对齐) | space-between(两端对齐，项目之间间隔相等) | space-around(每个项目两侧的间隔相等，所以项目之间的间隔比项目与边框的间隔大一倍)</article>
        <div class="justify-content-tips">{{ jcStyle }}</div>
        <div class="flex" :class="jcStyle">
            <div class="block block1"></div>
            <div class="block block2"></div>
            <div class="block block3"></div>
        </div>
        <div class="button-list">
            <button @click="changeJustifyContent('flex-start')">Flex-Start</button>
            <button @click="changeJustifyContent('center')">Center</button>
            <button @click="changeJustifyContent('flex-end')">Flex-End</button>
            <button @click="changeJustifyContent('space-between')">Space-Between</button>
            <button @click="changeJustifyContent('space-around')">Space-Around</button>
        </div>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jcStyle: 'flex-start',
        }
    },

    methods: {
        changeJustifyContent(style) {
            this.jcStyle = style;
        },
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
.justify-content-tips {
    margin-top: 1rem;
    font-weight: 800;
    text-align: left;
}
.flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: green;
}
.flex-start {
    justify-content: flex-start;
}
.center {
    justify-content: center;
}
.flex-end {
    justify-content: flex-end;
}
.space-around {
    justify-content: space-around;
}
.space-between {
    justify-content: space-between;
}
.block {
    height: 3rem;
    background-color: brown;
}
.block1 {
    width: 4rem;
}
.block2 {
    width: 2rem;
    margin-left: 1rem;
}
.block3 {
    width: 6rem;
    margin-left: 1rem;
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


