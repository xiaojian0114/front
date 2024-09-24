<template>
     <div>
     <form @submit.prevent="submitForm">
     <input type="text" placeholder="请输入收件人邮箱" v-model="form.to"/>
     <input type="text" placeholder="请输入邮件主题" v-model="form.subject"/>
     <input type="text" placeholder="请输入邮件内容" v-model="form.body"/>
     <button type="submit">发送</button>
     </form>
     </div>
    </template>
    
    <script setup lang="ts">
    import {reactive} from "vue"
    
    const form=reactive({
     to:"",
     subject:"",
     body:"",
    });
    
    const emit=defineEmits<{"submit-email":[any]}>()
    
    const submitForm = () => {
     //console.log("表单提交数据:",form)
     //子组件通过 emit('submit-form', form) 触发 submit-form 事件，并将表单数据传递给父组件；
     emit("submit-email",form)
    };
    </script>
    
    <style scoped></style>