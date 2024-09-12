<template>
   <div ref="box"class="box">我是一个方块</div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'

// 获取 DOM 元素引用

const box = ref<HTMLDivElement|null>(null)

onMounted (()=>{
    if(box.value){
        box.value.style.backgroundColor='lightblue'
        
    }})
</script>

<style scoped>
    .box{
        width:100px;
        height:100px;
        background-color:gray;
        }
</style>