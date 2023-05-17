<script setup>

import OperatorDialogBody from "@/views/scheduling/components/OperatorDialogBody.vue";
import { ref} from "vue";
import {useOperatorStore} from "@/store/operator";
const operatorStore = useOperatorStore();
const showOperatorDialog = ref(false);
const changeOperator = () => {
    showOperatorDialog.value = true;
};
const addOperator = () => {
    showOperatorDialog.value = false;
    operatorStore.addOperator(operatorStore.currentOperatorRef);
};
</script>

<template>
    <el-dialog title="操作员增改"
               v-model="showOperatorDialog"
               width="30%"
    >
        <operator-dialog-body></operator-dialog-body>
        <template #footer>
            <span class="mr-1">
              <el-button @click="showOperatorDialog = false">取消</el-button>
              <el-button type="primary" @click="addOperator">
                确定
              </el-button>
            </span>
        </template>
    </el-dialog>
<div class="header">
    <el-button-group>
        <el-button @click="$router.push({name:'table'})">表格视图</el-button>
        <el-button @click="$router.push({name:'flowchart'})">流程图视图</el-button>
        <el-button @click="$router.push({name:'operator'})">操作员列表</el-button>
        <el-button @click="changeOperator">新增操作员</el-button>
    </el-button-group>
</div>
  <router-view></router-view>
</template>

<style scoped lang="less">

</style>