<template>
    <input :value="modelValue" @input="$emit('update:modelValue',$emit.target.value)" />
</template>

<script setup lang="ts">

defineProps({
    modelValue: String
})

</script>

<style scoped>

</style>