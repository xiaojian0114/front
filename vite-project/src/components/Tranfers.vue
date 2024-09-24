<template>  
    <div>  
      <el-input  
        placeholder="请输入搜索内容"  
        v-model="filterText"  
        @input="handleFilter"  
      ></el-input>  
      <el-transfer  
        v-model="value"  
        :titles="['今晚吃什么', '就吃这些！']"  
        :data="filteredData"  
        :render-content="renderFunc"  
      ></el-transfer>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        value: [],  
        filterText: '',  
          
        rawData: [  
          { key: 1, label: '鸡块', disabled: false },  
          { key: 2, label: '炸鸡', disabled: false },  
          { key: 3, label: '汉堡', disabled: false },
          { key: 4, label: '面条', disabled: false },
          { key: 5, label: '酸菜鱼（卖完了）', disabled: false },

            
        ],  
      };  
    },  
    computed: {  
        
      filteredData() {  
        return this.rawData.filter(item =>  
          item.label.toLowerCase().includes(this.filterText.toLowerCase())  
        );  
      },  
    },  
    methods: {  
        
      handleFilter() {},  
        
      renderFunc(h, option) {  
        return h('span', option.label);  
      },  
    },  
  };  
  </script>