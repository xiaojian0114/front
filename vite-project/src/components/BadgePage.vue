<template>  
    <div class="badge-demo">  
      <!-- 使用Badge组件 -->  
      <el-badge :value="12" :max="99" class="comment-badge">  
        <el-button type="primary" class="primary-button">评论</el-button>  
      </el-badge>  
    
      <el-badge value="hot" type="danger" class="hot-badge">  
        <el-button class="hot-button">热门</el-button>  
      </el-badge>  
    
      <el-badge :value="100" is-dot class="message-badge">  
        <el-button type="success" class="success-button">消息</el-button>  
      </el-badge>  
    </div>  
  </template>  
    
  <script>  
  export default {  
      
  };  
  </script>  
    
  <style scoped>  
  .badge-demo {  
    display: flex;  
    justify-content: space-around;  
    align-items: center;  
    padding: 20px;  
  }  
    
  .primary-button {  
    margin-right: 20px;  
  }  
    
  .hot-badge {  
    margin-right: 20px;  
  }  
    
  .hot-button {  
    color: black;  
  }  
    
  .message-badge .el-badge__content {  
    border-radius: 50%;   
    background-color: #f56c6c;   
  }  
    
  .success-button {  
    margin-left: 20px;  
  }  
  </style>