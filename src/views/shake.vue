<template>
    <div>
        <p>摇啊摇</p>
    </div>
</template>

<script>
    export default {
        name: "shake",
        mounted(){
           // var color = new Array('#fff', '#ff0', '#f00', '#000', '#00f', '#0ff');
            if(window.DeviceMotionEvent) {
                console.log('window11111')
                let speed = 25;
                let x,y,z,lastX,lastY,lastZ;
                 x =y = z = lastX = lastY = lastZ = 0;
                window.addEventListener('devicemotion', function(){
                    var acceleration =event.accelerationIncludingGravity;
                    x = acceleration.x;
                    y = acceleration.y;
                    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
                        //document.body.style.backgroundColor = color[Math.round(Math.random()*10)%6];
                        alert('摇了摇')
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }
        }
    }
</script>

<style scoped>

</style>
