<template>
    <div>
        <p>数组</p>
        <p @click="newArray">new Array</p>
        <div @click="a_isArray()">Array.isArray()
        </div>
        <pre>
             <code v-html="a_isArray">
        </code>
        </pre>
        <p @click="a_valueof()">a_valueof</p>
        <p>数组a操作=>{</p>
        <p><span @click="handle_a('push')">a_push</span>&nbsp;&nbsp;<span @click="handle_a('pop')">a_pop()</span></p>
        <p><span @click="handle_a('shift')">a_shift</span>&nbsp;&nbsp;<span
                @click="handle_a('unshift')">a_unshift()</span></p>
        <p><span @click="handle_a('slice')">a_slice</span>&nbsp;</p>
        <p>}</p>
        <p @click="arrayback()">array_reverse</p>
    </div>
</template>

<script>
    export default {
        name: "Array",
        data() {
            return {
                a: [1, 2, 3],
                code:{

                }
            }
        },
        methods: {
            newArray() {
                let newArray = new Array();
                console.log('newArray', newArray);
            },
            a_isArray() {
                let a = [1];
                let b = 'ice';
                let c = 123;
                console.log('a_isArray', Array.isArray(a));//true
                console.log('b_isArray', Array.isArray(b));//false
                console.log('c_isArray', Array.isArray(c));//false
            },
            a_valueof() {
                let a = [1, 2, 3];
                console.log('a_valueof', a.valueOf());//返回本身
                console.log('a', a);
            },
            handle_a(e) {//数组a操作
                let a = this.a;
                switch (e) {
                    case 'push'://尾部添加一个或多个元素 改变原数组
                        a.push('ice');
                        console.log('a_push---', a, '--尾部添加一个或多个元素');
                        return
                    case 'pop'://删除最后一个  改变原数组
                        a.pop();
                        console.log('a_pop---', a, '--删除最后一个');
                        return
                    case 'shift'://删除数组的第一个元素，并返回该元素
                        a.shift();
                        console.log('a_shift---', a, '--删除数组的第一个元素，并返回该元素');
                        return
                    case 'unshift'://在数组的第一个位置添加元素
                        a.unshift('miss');
                        console.log('a_unshift---', a, '--在数组的第一个位置添加元素');
                        return
                    case 'slice'://返回数组的一部分，原数组不变
                        console.log('函数slice', '参数1', '参数2');
                        console.log('参数1—起始位置')
                        console.log('参数2—终止位置', '省略—返回原数组的最后一个成员');
                        console.log('原数组', a);
                        console.log('a.length', a.length);
                        console.log('a.slice(0)---', a.slice(0));
                        console.log('a.slice(1)---', a.slice(1, 2));
                        console.log('a.slice()', a.slice());
                        console.log('a.slice(-1)', a.slice(-1), '数计算的第一个位置');
                }
            },
            arrayback() {//reverse 颠倒排列数组元素，返回改变后的数组  改变原数组
                let a = [30, 50, 10, 20, 80, 100];
                console.log('a_init', a);
                a.reverse();
                console.log('end-a', a);
            }


        },
        filters:{
            outfun(e){
                console.log('outfun--------',e);
                console.log(' e.toString()', e.toString());
                return e.toString();
            }
        }
    }
</script>

<style scoped>
    pre {
        width: 100%;
        overflow: auto;
        background: #666666;
        color: #ffffff;
        text-align: left;
    }
</style>
