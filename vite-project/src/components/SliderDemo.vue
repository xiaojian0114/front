<template>  
    <div class="slider-container">  
      <div class="slider-track" :style="{ width: `${trackWidth}px` }">  
        <div class="slider-filled-track" :style="{ width: `${filledTrackWidth}px` }"></div>  
        <div class="slider-thumb" :style="{ left: `${thumbLeft}px` }" @mousedown="startDrag"></div>  
        <div class="slider-ticks">  
          <div v-for="tick in ticks" :key="tick.value" class="slider-tick" :style="{ left: `${tick.left}px` }">  
            {{ tick.label }}  
          </div>  
        </div>  
      </div>  
      <p>当前值: {{ value }}</p>  
    </div>  
  </template>

<script>  
export default {  
  name: 'CustomSlider',  
  props: {  
    min: {  
      type: Number,  
      default: 0  
    },  
    max: {  
      type: Number,  
      default: 100  
    },  
    value: {  
      type: Number,  
      default: 0  
    }  
  },  
  data() {  
    return {  
      dragging: false,  
      startX: 0,  
      thumbLeft: 0  
    };  
  },  
  computed: {  
    trackWidth() {  
      return 300; // 假设轨道宽度为300px  
    },  
    filledTrackWidth() {  
      const percent = (this.value - this.min) / (this.max - this.min);  
      return percent * this.trackWidth;  
    },  
    ticks() {  
      const step = (this.max - this.min) / 10; // 假设有10个刻度  
      const ticks = [];  
      for (let i = this.min; i <= this.max; i += step) {  
        const left = ((i - this.min) / (this.max - this.min)) * this.trackWidth;  
        ticks.push({ value: i, left: left, label: i.toString() });  
      }  
      return ticks;  
    }  
  },  
  methods: {  
    startDrag(event) {  
      this.dragging = true;  
      this.startX = event.clientX - this.thumbLeft;  
      document.addEventListener('mousemove', this.onDrag);  
      document.addEventListener('mouseup', this.stopDrag);  
    },  
    onDrag(event) {  
      if (!this.dragging) return;  
      const newLeft = event.clientX - this.startX;  
      const percent = Math.min(Math.max(newLeft / this.trackWidth, 0), 1);  
      this.value = this.min + percent * (this.max - this.min);  
      this.thumbLeft = percent * this.trackWidth;  
    },  
    stopDrag() {  
      this.dragging = false;  
      document.removeEventListener('mousemove', this.onDrag);  
      document.removeEventListener('mouseup', this.stopDrag);  
    }  
  }  
};  
</script>

<style scoped>  
.slider-container {  
  position: relative;  
  width: 300px;  
  user-select: none;  
}  
  
.slider-track {  
  position: relative;  
  height: 10px;  
  background-color: #ddd;  
  border-radius: 5px;  
}  
  
.slider-filled-track {  
  height: 100%;  
  background-color: #42b983;  
  border-radius: 5px;  
  transition: width 0.2s ease;  
}  
  
.slider-thumb {  
  position: absolute;  
  top: -4px;  
  width: 20px;  
  height: 20px;  
  background-color: #fff;  
  border: 2px solid #42b983;  
  border-radius: 50%;  
  cursor: pointer;  
  user-select: none;  
  transition: left 0.2s ease;  
}  
  
.slider-ticks {  
  position: absolute;  
  top: 15px;  
  width: 100%;  
  display: flex;  
  justify-content: space-between;  
}  
  
.slider-tick {  
  position: absolute;  
  transform: translateX(-50%);  
  font-size: 12px;  
  color: #666;  
}  
</style>