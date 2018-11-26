<template>
    <div class="container">
        <article>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0.</article>
        <article>order: {{ msg }}</article>
        <div class="order-tips">1/2/3/4的order顺序是：{{ orderInt.join(" ") }}</div>
        <div class="flex">
            <div class="block" :class="orders[0]">1</div>
            <div class="block" :class="orders[1]">2</div>
            <div class="block" :class="orders[2]">3</div>
            <div class="block" :class="orders[3]">4</div>
        </div>
        <button class="back-flex-nav" @click="randomArray">随机排列</button>
        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '<interger>',
            orderInt: [0, 1, 2, 3],
        }
    },
    computed: {
        orders: function() {
            let tmpArr = [];
            this.orderInt.forEach(function(item) {
                tmpArr.push('order' + item);
            })
            return tmpArr;
        }
    },
    methods: {
        randomArray() {
            let orders = [0, 1, 2, 3];
            orders.sort(function() {
                return Math.random() - 0.5;
            });
            /* eslint-disable */
            console.log(orders);
            this.orderInt = orders;
        },
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
.order-tips {
    margin-top: 1rem;
    font-weight: 800;
    text-align: left;
}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    background-color: green;
}
.order0 {
    order: 0;
}
.order1 {
    order: 1;
}
.order2 {
    order: 2;
}
.order3 {
    order: 3;
}
.block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: brown;
    color: white;
    font-weight: 800;
}
</style>

