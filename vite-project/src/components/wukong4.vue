<template>

    <div class="技能列表">
    <ul>
        <li v-for="skills in skills":key="skills.name">
        {{ skills.name }} -
        <span v-if="skills.unlocked == true">已解锁</span>
        <span v-else>未解锁</span>

      </li>
    </ul>
  </div>
</template>

<script setup>

import {ref} from 'vue'



const skills = [ 
    {name:"七十二变",unlocked: false},
    {name:"火眼金睛",unlocked: true},
    {name:"筋斗云 ",unlocked:true}
]

</script>

<style scoped>

</style>