<template>
    <div>
        <p>22222</p>
        {{blink}}
    </div>
</template>

<script>
    export default {
        name: "my",
        data(){
            return {
                blink:null
            }
        },
        mounted(){
              this.radomnum();
            },
        methods:{
            radomnum(){
                let count=10;
                let round=[];//原数组
                //给原数组originalArray赋值
                for (let i=0;i<count;i++){
                    round[i]=i+1;
                }

                round.sort(()=>{ return 0.5 - Math.random()});
                for (let i=0;i<count;i++){
                    console.log(round[i]);
                }
            },
            getstring(){
                let miss=new String('ice');
                console.log('miss',miss);//调用勾走函数构建字符
                console.log('big',miss.big());//=><big>ice</big> //转为大号字体
                console.log('anchor',miss.anchor('wu'));// => <a name="wu">ice</a> //输出为纯粹的 HTML
                console.log('blink',miss.blink())//=><blink>ice</blink> //只有 Firefox 和 Opera 浏览器支持 blink() 方法. Internet Explorer, Chrome, 以及 Safari 不支持 blink() 方法。
            },
            ojb(){
            let ice=[5,7,1,3];
            console.log('ice.sort()',ice.sort());
            },
            reduce(){
                var arr = [1,2,30,4];
                let total=arr.reduce(function(pre,cur,index,array){
                    console.log('pre',pre);
                    console.log('cur',cur)
                    console.log('index',index);
                    console.log('array',array);
                    return pre + cur
                },2);
                console.log('total',total);
                console.log('arr',arr);

            },
            continue(){
                var i = 0;
                while (i < 100){
                    i++;
                    if (i % 2 === 0) continue;
                    console.log('i 当前为：' + i);
                }
            }
        }
    }
</script>

<style scoped>

</style>
