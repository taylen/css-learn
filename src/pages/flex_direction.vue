<template>
    <div class="container">
        <article>flex-direction属性决定主轴的方向（即项目的排列方向）。</article>
        <article>flex-direction: row(default) | row-reverse | column | column-reverse;</article>
        <article>row 和 row-reverse 都是水平排列，主轴（justify-content）是水平方向，交叉轴（align-items）是垂直方向。</article>
        <article>column 和 column-reverse 是垂直排列，主轴（justify-content）是垂直方向，交叉轴（align-items）是水平方向。</article>
        <div class="flex">
            <div class="flex-item flex-row">
                <div class="item-list">1</div>
                <div class="item-list">2</div>
                <div class="item-list">3</div>
            </div>
            <div class="flex-item flex-row-reverse">
                <div class="item-list">1</div>
                <div class="item-list">2</div>
                <div class="item-list">3</div>
            </div>
            <div class="flex-item flex-column">
                <div class="item-list">1</div>
                <div class="item-list">2</div>
                <div class="item-list">3</div>
            </div>
            <div class="flex-item flex-column-reverse">
                <div class="item-list">1</div>
                <div class="item-list">2</div>
                <div class="item-list">3</div>
            </div>
        </div>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    methods: {
        jumpFlex() {
            this.$router.back();
        }
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    height: 40rem;
    color: white;
}
.flex-item {
    width: 15rem;
    border: dotted 1px silver;
}
.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 3rem;
    padding: 1rem 0rem;
}
.flex-row-reverse {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    height: 3rem;
    padding: 1rem 0rem;
}
.flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
}
.flex-column-reverse {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
}

.item-list {
    display: flex;
    background-color: brown;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
}
</style>


