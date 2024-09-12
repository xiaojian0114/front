<template>
     <div>
          <input type="checkbox" v-model="isChecked"/>勾选此项
          <p>复选框状态：{{isChecked?'已勾选':'未勾选'}}</p>
    </div>
</template>

<script setup lang = "ts">

import { ref } from 'vue'

const isChecked = ref<boolean>(false)

</script>