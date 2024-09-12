<template>
    <div>
        <p>用户名：{{ user.name }}</p>
        <P>年龄：{{ user.age }}</P>
        <button @click="increaseAge">增加年龄</button>

    </div>
</template>

<script setup lang="ts">

import { reactive  } from 'vue';

const user = reactive<{ name : string ; age : number}> ({
    name:'杨帅',
    age:25
})

const increaseAge = () :void => {
    user.age++
}

</script>

<style scoped>

</style>