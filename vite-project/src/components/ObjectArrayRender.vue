<template>
    <ul>
      <li v-for="user in users"  :key="user.id">
        {{ user.name }} - {{ user.age }}岁

      </li>
     
    </ul>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface User {
  id : number 
  name : string
  age : number
}

const users = ref<User[]>([
  {id: 1,name : '杨帅',age:25},
  {id: 2,name : '杨晓帅' , age:24},
  {id: 3,name : '杨老帅' , age:26 }
])

</script>

<style scoped>

</style>