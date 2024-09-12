<template>
     <input @keyup.enter="submitInput" v-model="inputValue" placeholder="按下回⻋提交" />
     <p> {{ message }}</p>
</template>

<script setup lang = "ts">

import { ref } from 'vue'

const inputValue = ref<string>('')

const message = ref<string>('尚未提交')


const submitInput = ():void=>{
    message.value=`已提交：${inputValue.value}`
}
</script>