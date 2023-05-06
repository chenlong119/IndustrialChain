<script setup>
import { ref,computed,reactive} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter();
const task = reactive({
    name: '',
    amount: '',
    type: '',
    priority: '',
    deadline: '',
    duration: ''
});
//编写19个任务
const tasklist = reactive([
    {
        'name': '任务1',
        'amount': 100,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-01',
        'duration': 10,
        'state': '已分配'
    },
    {
        'name': '任务2',
        'amount': 200,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-02',
        'duration': 20,
        'state': '已分配'
    },
    {
        'name': '任务3',
        'amount': 300,
        'type': '生产任务',
        'priority': '低',
        'deadline': '2021-07-03',
        'duration': 30,
        'state': '未分配'
    },
    {
        'name': '任务4',
        'amount': 400,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-04',
        'duration': 40,
        'state': '未分配'
    },
    {
        'name': '任务5',
        'amount': 500,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-05',
        'duration': 50,
        'state': '已分配'
    },
    {
        'name': '任务6',
        'amount': 600,
        'type': '生产任务',
        'priority': '低',
        'deadline': '2021-07-06',
        'duration': 60,
        'state': '未分配'
    },
    {
        'name': '任务7',
        'amount': 700,
        'type': '销售任务',
        'priority': '高',
        'deadline': '2021-07-07',
        'duration': 70,
        'state': '未分配'
    },
    {
        'name': '任务8',
        'amount': 800,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-08',
        'duration': 80,
        'state': '未分配'
    },
    {
        'name': '任务9',
        'amount': 900,
        'type': '销售任务',
        'priority': '低',
        'deadline': '2021-07-09',
        'duration': 90,
        'state': '未分配'
    },
    {
        'name': '任务10',
        'amount': 1000,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-10',
        'duration': 100,
        'state': '未分配'
    },
    {
        'name': '任务11',
        'amount': 1100,
        'type': '采购任务',
        'priority': '中',
        'deadline': '2021-07-11',
        'duration': 110,
        'state': '未分配'
    },
    {
        'name': '任务12',
        'amount': 1200,
        'type': '采购任务',
        'priority': '低',
        'deadline': '2021-07-12',
        'duration': 120,
        'state': '未分配'
    },
    {
        'name': '任务13',
        'amount': 1300,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-13',
        'duration': 130,
        'state': '已分配'
    },
    {
        'name': '任务14',
        'amount': 1400,
        'type': '采购任务',
        'priority': '中',
        'deadline': '2021-07-14',
        'duration': 140,
        'state': '已分配'
    },
    {
        'name': '任务15',
        'amount': 1500,
        'type': '生产任务',
        'priority': '低',
        'deadline': '2021-07-15',
        'duration': 150,
        'state': '未分配'
    },
    {
        'name': '任务16',
        'amount': 1600,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-16',
        'duration': 160,
        'state': '已分配'
    },
    {
        'name': '任务17',
        'amount': 1700,
        'type': '生产任务',
        'priority': '中',
        'deadline': '2021-07-17',
        'duration': 170,
        'state': '未分配'
    },
    {
        'name': '任务18',
        'amount': 1800,
        'type': '生产任务',
        'priority': '低',
        'deadline': '2021-07-18',
        'duration': 180,
        'state': '已分配'
    },
    {
        'name': '任务19',
        'amount': 1900,
        'type': '生产任务',
        'priority': '高',
        'deadline': '2021-07-19',
        'duration': 190,
        'state': '未分配'
    }
]);
//分页展示，每页展示8个任务
const pageSize = 8
//当前页
let currentPage = ref(1);
//当前页的任务列表
let currentTaskList = computed(()=>{
    return tasklist.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize);
})

const submit=()=>{
    //提交任务,对task.deadline进行日期格式化,最终形式为yyyy-MM-dd
    let date= new Date(task.deadline);
    task.deadline = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    tasklist.unshift({
        ...task,
        'state': '未分配'
    });
}
//页面改变
const handleCurrentChange=(val)=> {
    currentPage.value = val
}
const handleCoalition=()=>{
    //tasklist中任务状态全变为已分配
    for(let i=0;i<tasklist.length;i++){
        tasklist[i].state='已分配';
    }
}

const showAllocation=()=>{
    router.push('/allocation');
}
</script>

<template>
  <!--//一个用于输入任务的表单，任务属性包括任务名称、任务金额、 任务类型（生产任务、采购任务、销售任务三种）、任务优先级（3级）、任务截止日期、任务持续时长等。-->
  <!--  //任务类型和任务优先级使用下拉菜单选择，任务截止日期使用日期选择器选择，任务持续时长使用数字输入框输入。-->
    <div class="bg-white">
        <h1 class="text-center text-xl font-bold mb-5">请填写任务相关信息</h1>
        <el-form :model="task" style="width: 500px" :label-width="'180px'" class="mx-auto">
            <el-form-item label="任务名称" required>
                <el-input v-model="task.name" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item label="任务金额" required>
                <el-input v-model="task.amount" style="width: 200px"></el-input>
                <span>万元</span>
            </el-form-item>
            <el-form-item label="任务类型" required>
                <el-select v-model="task.type">
                    <el-option label="生产任务" value="生产任务"></el-option>
                    <el-option label="采购任务" value="采购任务"></el-option>
                    <el-option label="销售任务" value="销售任务"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任务优先级" required>
                <el-select v-model="task.priority">
                    <el-option label="高" value="高"></el-option>
                    <el-option label="中" value="中"></el-option>
                    <el-option label="低" value="低"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任务截止日期" required>
                <el-date-picker v-model="task.deadline" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="任务持续时长" required>
                <el-input v-model="task.duration" style="width: 200px"></el-input>
                <span>小时</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
<!--将tasklist作为表格显示-->
    <div class="bg-white">
        <h1 class="text-center text-xl font-bold mb-5">任务列表</h1>
        <div class="my-1.5 text-center">
            <el-button type="primary"  @click="handleCoalition">联盟形成</el-button>
            <el-button type="primary"  @click="showAllocation">查看分配情况</el-button>
        </div>
        <el-table :data="currentTaskList" style="width: 100%">
            <el-table-column prop="name" label="任务名称"></el-table-column>
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
    </div>
</template>

<style scoped lang="less">

</style>