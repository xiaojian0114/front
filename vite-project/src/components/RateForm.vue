<template>  
    <div>  
        <h2>给商品评分</h2>
      <el-rate  
        v-model="rate"  
        disabled-void-color="#ccc"  
        disabled-color="#bbb"  
        :max="10"  
        allow-half  
        show-text>  
      </el-rate>  
      <div>当前评分：{{ rate }}</div>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        rate: 0,  
      };  
    },  
  };  
  </script>  
    
  <style scoped>  
  
  </style>