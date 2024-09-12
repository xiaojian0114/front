<template>
    <div>

        <input v-model="name" placeholder="请输入签名" />

        <p>您输入的姓名是：{{ name }}</p>

    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const name = ref<string>('')

</script>

<style scoped>

</style>