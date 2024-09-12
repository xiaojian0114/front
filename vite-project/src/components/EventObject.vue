<template>
    <button @click="handleCLick">点击获取鼠标位置</button>
    <P>点击位置:X:{{ x }} Y:{{ y }}</P>
</template>

<script setup lang="ts">

import {ref} from 'vue'

const x = ref<number>(0)
const y = ref<number>(0)

const handleCLick = (event: MouseEvent): void =>{
    x.value= event.clientX
    y.value= event.clientY
}
</script>

<style scoped>

</style>