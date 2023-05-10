<template>
    <el-container>
        <el-aside width="200px">
            <el-menu router default-active="/dashboard">
                <el-menu-item index="/dashboard">
                    <el-icon><PieChart /></el-icon>
                    <span>项目首页</span>
                </el-menu-item>
                <el-menu-item index="/input">
                    <el-icon><Edit /></el-icon>
                    <span>任务输入</span>
                </el-menu-item>
                <el-menu-item index="/allocation">
                    <el-icon><Tickets /></el-icon>
                    <span>任务分配</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>

</script>

<style scoped lang="less">

</style>