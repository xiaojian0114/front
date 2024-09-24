<template>
    <div class="custom-switch">
      <label :class="{ 'switch-active': isChecked }">
        <input type="checkbox" v-model="isChecked" @change="toggleSwitch">
        <span class="slider"></span>
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isChecked = ref(false);
  
  const toggleSwitch = () => {
    isChecked.value = !isChecked.value;
    if (isChecked.value) {
      console.log('Switch is ON');
    } else {
      console.log('Switch is OFF');
    }
  };
  </script>
  
  <style scoped>
  .custom-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .custom-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .switch-active .slider {
    background-color: #4CAF50;
  }
  
  .switch-active .slider:before {
    transform: translateX(26px);
  }
  </style>