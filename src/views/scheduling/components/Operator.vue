<script setup>
import {reactive, ref} from "vue";
import OperatorDialogBody from "@/views/scheduling/components/OperatorDialogBody.vue";
import{useOperatorStore} from "@/store/operator";

const operatorStore = useOperatorStore();
const currentPageOperatorList = ref(1);
const PageSize = 5;
const showOperatorDialog = ref(false);
const currentOperator = ref('');
const changeOperator = row => {
    currentOperator.value = row.name;
    showOperatorDialog.value = true;
};

</script>

<template>
    <el-dialog title="操作员增改"
               v-model="showOperatorDialog"
               width="30%"
    >
        <operator-dialog-body :currentOperator="currentOperator"></operator-dialog-body>
        <template #footer>
            <span class="mr-1">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="showOperatorDialog = false">
                确定
              </el-button>
            </span>
        </template>
    </el-dialog>
    <el-table
            :data="operatorStore.operatorListData.slice((currentPageOperatorList-1)*PageSize,currentPageOperatorList*PageSize)"
            style="width: 100%"
            :row-style="{height: '40px'}"
            :cell-style="{padding:'0px'}">

        <el-table-column label="序号" prop="id" min-width="25"></el-table-column>

        <el-table-column label="操作员名称" min-width="45" prop="name"></el-table-column>

        <el-table-column label="当前任务编号" min-width="60" prop="taskId">
            <template #default="scope">
                <el-link type="primary">
                    <div @click="gotoDetail(scope.row)">
                        {{ scope.row.taskId }}
                    </div>
                </el-link>
            </template>
        </el-table-column>

        <el-table-column label="操作员设置" min-width="45">
            <template #default="scope">
                <el-button @click="changeOperator(scope.row)" type="text">操作员修改</el-button>
            </template>
        </el-table-column>

    </el-table>

    <el-pagination
            :page-size="PageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="operatorListData.length"
            style="margin-top: 0.5rem">
    </el-pagination>
</template>

<style scoped lang="less">

</style>