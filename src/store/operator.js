import {defineStore} from "pinia";
import {reactive,ref} from "vue";
export const useOperatorStore = defineStore('operator',()=>{
    const operatorListData = reactive([
        {
            'name': '操作员1',
            'id': 1,
            'taskId': 1,
        }, {
            'name': '操作员2',
            'id': 2,
            'taskId': 2,
        }, {
            'name': '操作员3',
            'id': 3,
            'taskId': 3,
        },
    ]);
    const currentOperatorRef = ref('');
    //添加操作员，传入操作员名字
    const addOperator = (name) => {
        operatorListData.push({
            'name': name,
            'id': operatorListData.length + 1,
            'taskId': 6,
        })
    };
    const modifyCurrentOperator = (operator) => {
        currentOperatorRef.value = operator;
    }
    return{
        operatorListData,
        addOperator,
        currentOperatorRef,
        modifyCurrentOperator
    }
})