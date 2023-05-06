<script setup>
import {ref,onMounted,getCurrentInstance} from "vue";
const {proxy}=getCurrentInstance();
const map= ref(null);
let chartInstance=null;
let allData=null;
onMounted(()=>{
 initChart();
 getData();
})
const initChart=async ()=>{
    chartInstance= proxy.$echarts.init(map.value,'dark');
    const res=await proxy.$axios.get('/china.json');
    proxy.$echarts.registerMap('china', res.data);
    const initOption = {
        title: {
            text: '联盟成员分布',
            left: 20,
            top: 20
        },
        geo: {
            type: 'map',
            map: 'china',
            top: '5%',
            bottom: '5%',
            itemStyle: {
                areaColor: '#2E72BF',
                borderColor: '#333'
            }
        },
        legend: {
            left: '5%',
            bottom: '5%',
            orient: 'vertical'
        }
    }
    chartInstance.setOption(initOption)
}
const getData=async ()=>{
    const { data: ret } = await proxy.$axios.get('/map.json');
    allData=ret;
    updateChart();
}
const updateChart= ()=> {
    // 处理图表需要的数据
    const seriesArr = allData.map(item => {
        // return的这个对象就代表的是一个类别下的所有散点数据
        // 如果想在地图中显示散点的数据, 我们需要给散点的图表增加一个配置, coordinateSystem:geo
        return {
            type: 'effectScatter',
            rippleEffect: {
                scale: 5,
                color: 'red',
                brushType: 'fill'
            },
            label: {
                show: true, // 显示标签
                position: 'right', // 标签位置
                formatter: '{b}', // 标签内容为数据项的名称
            },
            name: item.name,
            data: item.children,
            coordinateSystem: 'geo'
        }
    })
    const dataOption = {
        series: seriesArr
    }
    chartInstance.setOption(dataOption)
}
</script>

<template>
<div ref="map" style="height: 600px; width: 100%;"></div>
</template>

<style scoped lang="less">

</style>