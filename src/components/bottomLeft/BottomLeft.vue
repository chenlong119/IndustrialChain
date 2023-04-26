<template>
    <div class="bottomLeft h-full bg-black flex flex-col">
        <div class="flex text-white">
        <span>
          <i class="iconfont icon-chart-line text-blue-300"/>
        </span>
            <span class="ml-2">数据统计图</span>
        </div>
        <div class="flex-grow">
           <Chart/>
        </div>
    </div>
</template>

<script setup>
import Chart from "./chart/Chart.vue";
</script>

<style scoped lang="less">

</style>