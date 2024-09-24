<template>
    <div>

        <EmailForm @submit-form="hanleSubmit"/>
        <p v-if="submitData">子组件提交的表单数据：{{ submitData }}</p>

    </div>
</template>

<script setup lang="ts">
import EmailForm from './EmailForm.vue';

import { ref } from "vue"

const submitData =  ref(null)

const hanleSubmit = (data:any) => {
    submitData.value = data;
}


</script>

<style scoped>

</style>