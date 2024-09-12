<template>
   <div>
     <input v-model.number="age" type="number" placeholder="请输入年龄"/>
     <p>您的年龄是：{{ age }}</p>
     </div>
</template>

<script setup lang = "ts">

import { ref } from 'vue'



const age = ref<number|null>(null)
</script>