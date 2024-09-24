<template>
    <div>
      <form @submit.prevent="submitForm">
          <input type="text" placeholder="请输入用户名"  v-model="form.username"/>
          <input type="text" placeholder="请输入邮箱" v-model="form.email"/>
          <input type="password" v-model="form.password"/>
          <button type="submit">注册</button>

      </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const form = reactive({
    username:"admin",
    email:"admin@qq.com",
    password:"123456"
});

//定义 emits 事件

const emit = defineEmits<{'submit-form':[any]}>(); 


// 阻止表单默认提交 自定义表单
const submitForm = () => {

    // console.log("表单提交数据",form)

    //子组件通过emit('submit-from',from)触发submit-form事件
    emit('submit-form' , form);
};

</script>

<style scoped>

</style>