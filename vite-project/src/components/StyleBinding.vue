<template>
    <div>
        <p :style="pStyle">这是一段有样式的文字</p>
        <button @click="toggleStyle">切换样式</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isBold = ref<boolean>(false)

const pStyle = ref<{

    fontWeight:string
    color:string
}>({
    fontWeight: 'normal',
    color: 'red',
})

const toggleStyle = () => {
    isBold.value = !isBold.value
    pStyle.value = {
        fontWeight:isBold.value ? 'bold' : 'normal',
        color:isBold.value ? 'bold' : 'red'
    }}

</script>

<style scoped>

</style>