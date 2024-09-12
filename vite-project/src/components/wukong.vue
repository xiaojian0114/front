<template>
    <div class="container">

        <h1>{{ name }}</h1>
        <h2>{{ title }}</h2>
        <p>{{ descripition }}</p>

    </div>
</template>

<script setup>

import { ref } from 'vue'

const name = ref('孙悟空')
const title = ref('齐天大圣')
const descripition = ref('孙悟空不畏艰辛')

</script>

<style scoped>
.continer{
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid white;
    text-align: center;
    background-color: white;

}

h1{

    font-size: 2.5em;
    color: green;
    margin: 10px 0;

}

h2{
    color: white;
    margin: 5px 0;
    color: aqua;
}
</style>