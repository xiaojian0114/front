<template>
    <div>
        <input type="radio" v-model="selectedOption" value="A"/>选项 A
        <input type="radio" v-model="selectedOption" value="B"/>选项 B
        <p>您选择的选项是：{{ selectedOption }}</p>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'



const selectedOption = ref<string>('A')



</script>