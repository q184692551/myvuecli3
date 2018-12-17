<template>
    <canvas id="mycanvas" width="200" height="300">
        您的浏览器不支持canvas
    </canvas>
</template>

<script>
    export default {
        name: "canvas",
        created(){
            var cc=document.getElementById("mycanvas");
            if(cc.getContext){
                var cxt=cc.getContext("2d");
                cxt.strokeRect(20,20,100,100);
                cxt.fillRect(40,40,50,50);
                cxt.clearRect(50,50,30,30);
            }
        }
    }
</script>

<style scoped>

</style>
