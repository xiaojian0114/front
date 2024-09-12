<template>
    <div>

        <p>当前用户：{{ user.name }} , 年龄:{{ user.age }}</p>
        <button @click="changeName('杨晓帅')">修改用户名</button>
        <button @click="resetUser">重置用户信息</button>

    </div>
</template>

<script setup lang="ts">

import { reactive  } from 'vue';

const user = reactive<{name : string ; age : number}>({
    name:'杨帅',
    age : 20
})

const changeName = (newName : string) :void =>{
    user.name = newName
} 

const resetUser = (): void =>{
    user.name = '杨帅'
    user.age = 20 
}

</script>

<style scoped>

</style>