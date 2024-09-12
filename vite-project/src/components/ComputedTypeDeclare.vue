<template>
    <div>
        <P>年薪：{{ yearlySalary }}</P>

    </div>
</template>

<script setup lang="ts">

import { ref , computed } from 'vue'

const monthlySalary = ref<number>(5000)

const yearlySalary = computed<number>(() => {
    return monthlySalary.value * 12
})
</script>

<style scoped>

</style>