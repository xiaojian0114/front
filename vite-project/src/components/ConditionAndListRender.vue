<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} - 
            <span v-if="user.age >= 18">成人</span>
            <Spna v-else>未成年</Spna>

        </li>
    </ul>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface User {
    id: number
    name: string
    age :number
}

const users = ref<User[]>([
    {id:1 , name:'杨帅',age:12},
    {id:2 , name:'张三',age:19},
    {id:3 , name:'李四',age:20}


])

</script>

<style scoped>

</style>