<script setup>
import {useRouter, useRoute} from "vue-router";

const route = useRoute();
const router = useRouter();
const title = route.query.cname;
const tname = route.query.tname;

const onClickQuery = () => {
    router.push({path: '/coalition/table', query: {tname}});
}
const onClickQueryMap = () => {
    router.push({path: '/coalition/map'});
}
const goBack = () => {
    router.push({path: '/allocation'});
}
</script>

<template>
    <h1 class="text-2xl text-center font-bold">{{ title }}详情</h1>
    <div class="text-center mt-2">
    <el-button-group>
        <el-button type="primary" @click="onClickQuery">表格视图</el-button>
        <el-button  type="primary" @click="onClickQueryMap">地图视图</el-button>
        <el-button  type="primary" @click="goBack">返回</el-button>
    </el-button-group>
    </div>
    <div class="mt-3">
        <router-view></router-view>
    </div>
</template>

<style scoped lang="less">

</style>