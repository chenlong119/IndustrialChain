<script setup>
import {ref} from "vue";
defineProps({
    'current': {
        type: String,
        default: ''
    },
})
const status = ref(0);
const workingTime = ref(666);
</script>

<template>
    <div class="task-input-box">
        <el-form label-width="100px">

            <el-form-item label="任务名称">
                <el-input  placeholder="电动汽车购买" disabled></el-input>
            </el-form-item>

            <el-form-item label="操作员">
                <el-input :model-value="current" placeholder="请输入操作员名称" disabled></el-input>
            </el-form-item>

            <el-form-item label="任务状态" >
                <el-select v-model="status" placeholder="请选择任务状态" disabled>
                    <el-option label="任务未执行" value=0></el-option>
                    <el-option label="任务正常" value=1></el-option>
                    <el-option label="任务异常" value=2></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="工作时间">
                <el-input v-model="workingTime" placeholder="请输入workingTime" disabled></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">

</style>