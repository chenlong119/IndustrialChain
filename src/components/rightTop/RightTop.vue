<template>
    <div class="rightTop h-full">
        <div class=" bg-black flex flex-col h-full">
            <div class="flex pt-2 pl-2 text-white">
                <span>
                  <i class="iconfont text-blue-300 icon-vector"/>
                </span>
                <span class="text-white  ml-2">任务完成排行榜</span>
            </div>
            <div class="flex-grow">
                <dv-scroll-board  :config="config" class="h-full"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = {
    header: ['组件', '分支', '覆盖率'],
    data: [
        ['组件1', 'dev-1', "<span  style='color:green'>↑75%</span>"],
        ['组件2', 'dev-2', "<span  style='color:red'>↓33%</span>"],
        ['组件3', 'dev-3', "<span  style='color:green''>↑100%</span>"],
        ['组件4', 'rea-1', "<span  style='color:green'>↑94%</span>"],
        ['组件5', 'rea-2', "<span  style='color:green'>↑95%</span>"],
        ['组件6', 'fix-2', "<span  style='color:green'>↑63%</span>"],
        ['组件7', 'fix-4', "<span  style='color:green'>↑84%</span>"],
        ['组件8', 'fix-7', "<span  style='color:red'>↓46%</span>"],
        ['组件9', 'dev-2', "<span  style='color:red'>↓13%</span>"],
        ['组件10', 'dev-9', "<span  style='color:green'>↑76%</span>"]
    ],
    rowNum: 8, //表格行数
    headerHeight: 35,
    headerBGC: '#0f1325', //表头
    oddRowBGC: '#0f1325', //奇数行
    evenRowBGC: '#171c33', //偶数行
    index: true,
    columnWidth: [50],
    align: ['center']
}
</script>

<style scoped lang="less">

</style>