<template>
    <div class="container">
       <p>装备管理系统</p>

       <input v-model="newenquip" placeholder='请输入装备名：'>
       <button @click="addEnquip">添加装备</button>

       <p>已穿戴的装备有:{{ newenquip }}</p>
       <ul class="list">
        <li v-for="(enquip,index) in enquips ":key="index">{{ enquip }}
            <button @click="dele" :disabled="!enquips.length">卸下装备</button>
        </li>
        
       </ul>
       

       
       

    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const newenquip = ref<string>('')

const enquips = ref<string[]>([])



const addEnquip=()=>{

    if (newenquip.value.trim() !== '') {  
        enquips.value.push(newenquip.value)  
        newenquip.value = '' 
    }  



}

const dele=()=>{

    if (enquips.value.length > 0) {  
        enquips.value.pop()  
    }  

}




</script>

<style scoped>

.container {  
    max-width: 600px;  
    margin: 20px auto;  
    padding: 20px;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
    border-radius: 8px;  
    background-color:rgb(15, 227, 167);  
    text-align: center;   
}  
  
input[type="text"] {  
    width: calc(100% - 22px);   
    padding: 10px;  
    margin-top: 10px;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
    text-align: left;   
}  
  
button {  
    padding: 10px 20px;  
    margin-top: 10px;  
    border: none;  
    border-radius: 4px;  
    background-color: #e1de0b;  
    color: white;  
    cursor: pointer;  
    transition: background-color 0.3s;  
}  
  
button:hover {  
    background-color: #09de29;  
}  
  
p {  
    margin: 10px 0;  
}  
  
.list {  
    list-style-type: none;  
    padding: 0;  
    margin-top: 20px;  
    text-align: left;   
}  
  
.list li {  
    padding: 10px;  
    border-bottom: 1px solid #eee;  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
}  
  
.list li button {  
    margin-left: 10px;  
    padding: 5px 10px;  
    background-color: #dc3545;  
    border: none;  
    border-radius: 4px;  
    cursor: pointer;  
    transition: background-color 0.3s;  
}  
  
.list li button:hover {  
    background-color: #c82333;  
}  
  
.list li button:disabled {  
    background-color: #ccc;  
    cursor: not-allowed;  
}  


</style>