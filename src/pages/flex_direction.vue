<template>
    <div class="container">
        <article>
            flex-direction属性决定主轴的方向（即项目的排列方向）。
        </article>
        <article>
            flex-direction: row(default) | row-reverse | column | column-reverse;
        </article>
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 2rem;
    height: 40rem;
}
.flex-item {
    width: 15rem;
    border: dotted 1px silver;
}
.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
}
.flex-row-reverse {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    height: 5rem;
}
.flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 15rem;
}
.flex-column-reverse {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 15rem;
}

.item-list {
    background-color: brown;
    width: 3rem;
    height: 3rem;
}
</style>


