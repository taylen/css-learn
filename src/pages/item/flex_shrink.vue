<template>
    <div class="container">
        <article>flex-shrink 属性定义了flex元素的缩小比例，默认为1；flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，即若收缩100px，则flex元素根据flex-shrink的比例换算出每个item要收缩的大小。注意：如果元素不是弹性盒对象的元素，则 flex-shrink 属性不起作用。</article>
        <article>flex-shrink: {{ msg }}; /* default 1 */</article>
        <article>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</article>
        <article>
            flex-shrink 将子元素宽度之和与父元素宽度的差值按照子元素 flex-shrink 的值分配给各个子元素，每个子元素原本宽度减去按比例分配的值，其剩余值为实际宽度。
            以原有例子为模型，父元素命名为div0，1-5五个子元素分别命名为div1、div2、...、div5。
            父元素需要设定：display：flex，width：300px
            所有子元素需要设定：width(flex-basis)：100px, 即不发生收缩时子元素原本的宽度
            以上为先决条件。
            子元素宽度之和与父元素宽度的差值：
            100*5-300=200px
            这时通过设定子元素的flex-shrink属性来决定200px总缩减量如何分配给5个子元素。
            按照之前的预设，div4 被压缩的宽度应为子元素div1\2\3的 2倍，div5 被压缩的宽度应为子元素div1\2\3的 3倍。
            设子元素的宽度分别为w1、w2、...、w5, div4的flex-shrink值与其它子元素flex-shrink的值之比为X，有如下方程组:
            w1=w2=w3=X
            w4=100-(100-X)*2
            w5=100-(100-X)*3
            w1+w2+w3+w4+w5=3X+100-(100-X)*2+200-(100-X)*3=300px;
            解方程组得
            X=600/8,w1=w2=w3=75,w4=50;w5=25
        </article>

        <div class="flex">
            <div class="block flex-shrink1">1</div>
            <div class="block flex-shrink1">2</div>
            <div class="block flex-shrink1">3</div>
            <div class="block flex-shrink2">4</div>
            <div class="block flex-shrink3">5</div>
        </div>

        <button class="back-flex-nav" @click="jumpFlex">返回Flex导航页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '<number>'
        }
    },
    methods: {
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
.flex {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: 300px;
    height: 5rem;
    background-color: green;
}
.block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 3rem;
    background-color: brown;
    color: white;
    font-weight: 800;
    /* border: solid 1px white; */
}
.flex-shrink1 {
    flex-shrink: 1;
}
.flex-shrink2 {
    flex-shrink: 2;
}
.flex-shrink3 {
    flex-shrink: 3;
}
</style>

