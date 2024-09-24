<template>
    <div>

        <h3>用户信息:</h3>
        <P>姓名：{{ user.name }}</P>
        <P>年龄：{{ user.age }}</P>
        <p>邮箱：{{ user.email }}</p>

    </div>
</template>

<script setup lang="ts">

//定义props 接收父组件传递参数
const props = defineProps<{
    user: {
        name: string
        age: number
        email: string
    }
}>();
</script>

<style scoped>

.ueser-profile{
    min-width: 300px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
}
</style>