<template>
  <div class="leftTop h-full bg-black text-white flex flex-col">
      <div class="flex items-center">
        <span class="mr-3">
          <i class="iconfont icon-tongji4 text-blue-300" />
        </span>
        <div class="flex">
          <span class="mr-2 whitespace-nowrap">任务通过率</span>
          <dv-decoration-3 class="dec-3"/>
        </div>
      </div>
      <div class="chart flex justify-center">
        <Chart />
      </div>
      <!-- 4个主要的数据 -->
      <div class="flex flex-wrap main flex-grow justify-around">
        <div
            class="mt-2 bottom  w-2/4"
            v-for="(item, index) in numberData"
            :key="index"
        >
          <div class="flex">
            <i class="iconfont text-blue-600" :class="[iconFont[index]]" />
            <dv-digital-flop class="dv-digital-flop" :config="item.config" />
          </div>
          <p class="text">
            <span> {{ item.text }} </span>
            <span class="text-yellow-500">(件)</span>
          </p>
        </div>
      </div>
  </div>
</template>

<script setup>
import {  onMounted, onUnmounted,  reactive } from 'vue'
import Chart from './chart/Chart.vue'
// 下层数据
const dataArr = [
  {
    number: 150,
    text: '今日构建总量'
  },
  {
    number: 144,
    text: '总共完成数量'
  },
  {
    number: 361,
    text: '正在编译数量'
  },
  {
    number: 571,
    text: '未通过数量'
  }
]
// 对应图标
const iconFont = [
  'icon-diagnose',
  'icon-monitoring',
  'icon-cloudupload',
  'icon-clouddownload'
]
const numberData = reactive([])
let intervalInstance = null
onMounted(() => {
  setData()
  changeTiming()
})

const setData = () => {
  dataArr.forEach(e => {
    numberData.push({
      config: {
        number: [e.number],
        toFixed: 1,
        content: '{nt}',
        style: {
          fontSize: 24
        }
      },
      text: e.text
    })
  })
}

const changeTiming = () => {
  intervalInstance = setInterval(() => {
    changeNumber()
  }, 2000)
}
const changeNumber = () => {
  numberData.forEach((item, index) => {
    item.config.number[0] += ++index
    item.config = { ...item.config }
  })
}
onUnmounted(() => {
  clearInterval(intervalInstance)
})
</script>

<style scoped lang="less">
.dv-digital-flop {
  height: 30px;
  width: 80px;
}
i {
  font-size: 20px;
  line-height: 30px;
  margin-left: 20px;
}
.dec-3
{
  width: 25%;
  height: 30px;
  margin-left:5px;
}
.chart{
  height: 60%;
}
.text{
  font-size:14px;
}
.main
{
  height: 30%;
}
</style>