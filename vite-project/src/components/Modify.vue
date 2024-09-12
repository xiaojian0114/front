<template>
   <div>
     <input v-model.lazy="name" placeholder="请输入姓名"/>
     <p>您输入的姓名是：{{ name }}</p>
    </div>
</template>

<script setup lang = "ts">

import {ref} from 'vue'



const name = ref<string>('')



</script>