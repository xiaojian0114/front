<template>
    <div>

        <button v-bind="buttonAttrs">点击我</button>
    </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue'

const buttonAttrs = reactive({
    disabled:false,
    title:'按钮已被禁用',
    id:'unique-button',
})


</script>