<script setup>
import {ref} from "vue";
import {useOperatorStore} from "@/store/operator";

const operatorStore = useOperatorStore();
const props=defineProps({
    'currentOperator': {
        type: String,
        default: ''
    },
})
operatorStore.modifyCurrentOperator(props.currentOperator);
</script>

<template>
    <el-form label-width="180px">
        <el-form-item label="用户名称">
            <el-select>
                <el-option label="admin" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="操作员名称">
            <el-input v-model="operatorStore.currentOperatorRef" placeholder="请输入操作员名称"></el-input>
        </el-form-item>
    </el-form>
</template>

<style scoped lang="less">

</style>