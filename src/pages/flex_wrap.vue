<template>
    <div class="container">
        <article>
            flex-wrap 默认情况下，项目都排在一条线（又称“轴线”）上。 flex-wrap 属性定义，如果一条轴线排不下，如何换行。
        </article>
        <article>flex-wrap: nowrap (默认：不换行) | wrap (换行，第一行在上方) | wrap-reverse (换行，第一行在下方) ;</article>
        <div class="flex" v-bind:class="wrapType">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
            <div class="flex-item">5</div>
            <div class="flex-item">6</div>
            <div class="flex-item">7</div>
            <div class="flex-item">8</div>
            <div class="flex-item">9</div>
            <div class="flex-item">10</div>
        </div>
        <div class="flex-button">
            <button @click="changeFlexWrap('nowrap')">nowrap</button>
            <button @click="changeFlexWrap('wrap')">wrap</button>
            <button @click="changeFlexWrap('wrap-reverse')">wrap-reverse</button>
        </div>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            wrapType: 'nowrap'
        }
    },
    methods: {
        /**
         * 修改wrapType的值
         */
        changeFlexWrap(style) {
            this.$data.wrapType = style;
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
.flex {
    display: flex;
}
.nowrap {
    flex-wrap: nowrap;
}
.wrap {
    flex-wrap: wrap;
}
.wrap-reverse {
    flex-wrap: wrap-reverse;
}
.flex-item {
    display: flex;
    width: 3rem;
    height: 3rem;
    margin: 0.2rem;
    justify-content: center;
    align-items: center;
    background-color: brown;
}

.flex-button {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
button {
    font-size: 1rem;
}
</style>


