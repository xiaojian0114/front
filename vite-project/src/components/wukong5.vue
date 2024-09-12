<template>
     <div>
    <p>血量: {{ lastblood }}/{{ blood }}({{ (lastblood/blood)*100 }}%)</p >
     <progress id="hp" max="100" value="50">80%</progress>
     </div>
    </template>
    
    <script setup lang="ts">
    import {ref , computed} from 'vue'
    
    const blood=ref<number>(100)
    const attack=ref<number>(50)
    
    const lastblood= computed(()=>{
     return blood.value-attack.value
    })
    </script>
    
    <style scoped>
    div{
     text-align: center;
    }
    
    progress{
     width: 800px;
    
    }
    
    </style>