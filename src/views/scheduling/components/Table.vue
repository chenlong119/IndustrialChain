<script setup>
import {computed, reactive, ref} from "vue";

const tasklist = reactive([
    {
        'name': '电动汽车生产',
        'amount': 100,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-01',
        'duration': 10,
        'state': '已分配',
        'number': 1
    },
    {
        'name': '汽车锂电池生产',
        'amount': 200,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-02',
        'duration': 20,
        'state': '已分配',
        'number': 2
    },
    {
        'name': '销售电动汽车',
        'amount': 300,
        'type': '销售任务',
        'priority': '低',
        'deadline': '2021-07-03',
        'duration': 30,
        'state': '未分配',
        'number': 3
    },
    {
        'name': '汽车发动机生产',
        'amount': 400,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-04',
        'duration': 40,
        'state': '未分配',
        'number': 4
    },
    {
        'name': '购买汽车轮胎',
        'amount': 500,
        'type': '采购任务',
        'priority': '中',
        'deadline': '2021-07-05',
        'duration': 50,
        'state': '已分配',
        'number': 5
    },
    {
        'name': '购买汽车玻璃',
        'amount': 600,
        'type': '采购任务',
        'priority': '低',
        'deadline': '2021-07-06',
        'duration': 60,
        'state': '未分配',
        'number': 6
    },
    {
        'name': '生产汽车玻璃',
        'amount': 700,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-07',
        'duration': 70,
        'state': '未分配',
        'number': 7
    },
    {
        'name': '生产汽车轮胎',
        'amount': 800,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-08',
        'duration': 80,
        'state': '未分配',
        'number': 8
    },
    {
        'name': '销售汽车玻璃',
        'amount': 900,
        'type': '销售任务',
        'priority': '低',
        'deadline': '2021-07-09',
        'duration': 90,
        'state': '未分配',
        'number': 9
    },
    {
        'name': '生产汽车车身',
        'amount': 1000,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-10',
        'duration': 100,
        'state': '未分配',
        'number': 10
    },
]);
//分页展示，每页展示8个任务
const pageSize = 8
//当前页
let currentPage = ref(1);
//当前页的任务列表
let currentTaskList = computed(()=>{
    return tasklist.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize);
})
const handleCurrentChange=(val)=> {
    currentPage.value = val
}
</script>

<template>
    <el-table :data="currentTaskList" style="width: 100%">
        <el-table-column prop="name" label="任务名称"></el-table-column>
        <el-table-column prop="number" label="任务编号"></el-table-column>
        <el-table-column prop="amount" label="任务金额"></el-table-column>
        <el-table-column prop="type" label="任务类型"></el-table-column>
        <el-table-column prop="priority" label="任务优先级"></el-table-column>
        <el-table-column prop="deadline" label="任务截止日期"></el-table-column>
        <el-table-column prop="duration" label="任务持续时长"></el-table-column>
        <el-table-column  label="任务状态">
            <template #default="{row}">
                <el-tag v-if="row.state === '未分配'" type="danger">未分配</el-tag>
                <el-tag v-else-if="row.state === '已分配'" type="success">已分配</el-tag>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="tasklist.length"
            @current-change="handleCurrentChange"
            class="mt-4"
    />
</template>

<style scoped lang="less">

</style>