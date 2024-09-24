<template>
    <div>
        <UserForm @submit-form="handleSubmit"/>
        <P v-if="submitData">子组件提交的表单数据：{{ submitData }}</P>
    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'

import UserForm from './UserForm.vue';

//定义一个表单提交数据对象
const submitData = ref(null);

const handleSubmit = (data:any) => {
    submitData.value = data;
}

</script>

<style scoped>

</style>