<template>    
    <div class="select-container">    
      <label for="fruits">选择水果:</label>    
      <select v-model="selectedFruit" id="fruits" class="custom-select">    
        <option disabled value="">请选择...</option>    
        <option value="apple">苹果</option>    
        <option value="banana">香蕉</option>    
        <option value="orange">橙子</option>    
      </select>    
      <p>你选择的水果是: {{ selectedFruit }}</p>    
    </div>    
</template>    
      
<script>    
export default {    
    name: 'SelectDropdown',    
    data() {    
      return {    
        selectedFruit: ''     
      };    
    }    
};    
</script>    
      
<style scoped>    
.select-container {  
  margin: 20px;  
}  
  
.custom-select {  
  /* 自定义选择器的样式 */  
  width: 200px; /* 设置宽度 */  
  padding: 8px; /* 设置内边距 */  
  border: 1px solid #ccc; /* 设置边框 */  
  border-radius: 4px; /* 设置边框圆角 */  
  font-size: 16px; /* 设置字体大小 */  
  outline: none; /* 移除焦点时的轮廓 */  
    
  /* 当鼠标悬停时 */  
  &:hover {  
    border-color: #13d561;  
  }  
}  
  
  
</style>