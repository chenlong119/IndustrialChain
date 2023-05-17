<script setup>
import { ref} from "vue";
import TaskInputForm from "@/views/scheduling/components/TaskInputForm.vue";
import OperatorDialogBody from "@/views/scheduling/components/OperatorDialogBody.vue";
import{useOperatorStore} from "@/store/operator";

const operatorStore = useOperatorStore();
const currentPageOperatorList = ref(1);
const PageSize = 5;
const showOperatorDialog = ref(false);
const currentOperator = ref('');
const currentOperator2 = ref('');
const modifyIndex=ref(0);
const modifyOperator = (row,index)=> {
    currentOperator.value = row.name;
    showOperatorDialog.value = true;
    modifyIndex.value=index;
};
const dialogTableVisible3 = ref(false);
const gotoDetail = (index)=> {
    dialogTableVisible3.value = true;
    currentOperator2.value=operatorStore.operatorListData[index].name;
};
const submitChange = (index) => {
    showOperatorDialog.value = false;
    operatorStore.updateOperatorList(index);
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
              <el-button type="primary" @click="submitChange(modifyIndex)">
                确定
              </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog title="任务信息查看"
               v-model="dialogTableVisible3"
               width="30%">
        <TaskInputForm :current="currentOperator2"></TaskInputForm>
        <template #footer>
            <span class="mr-1">
              <el-button @click="dialogTableVisible3 = false">取消</el-button>
              <el-button type="primary" @click="dialogTableVisible3 = false">
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
                    <div @click="gotoDetail(scope.$index)">
                        {{ scope.row.taskId }}
                    </div>
                </el-link>
            </template>
        </el-table-column>

        <el-table-column label="操作员设置" min-width="45">
            <template #default="scope">
                <el-button @click="modifyOperator(scope.row,scope.$index)" type="text">操作员修改</el-button>
            </template>
        </el-table-column>

    </el-table>

    <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :total="operatorStore.operatorListData.length"
            style="margin-top: 0.5rem">
    </el-pagination>
</template>

<style scoped lang="less">

</style>