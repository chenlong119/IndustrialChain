<script setup>
import {useRoute} from "vue-router";
const route=useRoute();
const tname=route.query.tname;
const tableData=[
    {
        ename:'企业1',
        eaddr:'地址1',
        erkinds:20,
        tname,
    }, {
        ename:'企业2',
        eaddr:'地址2',
        erkinds:20,
        tname,
    }, {
        ename:'企业3',
        eaddr:'地址3',
        erkinds:20,
        tname,
    }, {
        ename:'企业4',
        eaddr:'地址4',
        erkinds:20,
        tname,
    }, {
        ename:'企业5',
        eaddr:'地址5',
        erkinds:20,
        tname,
    },{
        ename:'企业6',
        eaddr:'地址6',
        erkinds:20,
        tname,
    },
]
</script>

<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="ename" label="企业名称"></el-table-column>
        <el-table-column prop="eaddr" label="企业所在地"></el-table-column>
        <el-table-column prop="erkinds" label="企业拥有资源种类"></el-table-column>
        <el-table-column prop="tname" label="正在执行任务" width="180"></el-table-column>
    </el-table>
</template>

<style scoped lang="less">

</style>