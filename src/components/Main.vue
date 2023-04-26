<template>
  <el-row :gutter="10" class="h-3/5">
    <el-col :span="6">
      <dv-border-box-12 class="p-3 box-border"><LeftTop/></dv-border-box-12>
    </el-col>
    <el-col :span="12">
    </el-col>
    <el-col :span="6">
      <dv-border-box-12 class="p-3 box-border"><RightTop/></dv-border-box-12>
    </el-col>
  </el-row>
  <el-row :gutter="10" class="h-2/5 mt-2">
    <el-col :span="8">
      <dv-border-box-8 class="p-3 box-border"><BottomLeft/></dv-border-box-8>
    </el-col>
    <el-col :span="8">
      <dv-border-box-12>dv-border-box-10</dv-border-box-12>
    </el-col>
    <el-col :span="8">
      <dv-border-box-8>dv-border-box-10</dv-border-box-8>
    </el-col>
  </el-row>
</template>

<script setup>
import LeftTop from "@/components/leftTop/LeftTop.vue";
import RightTop from "@/components/rightTop/RightTop.vue";
import BottomLeft from "@/components/bottomLeft/BottomLeft.vue";
</script>

<style scoped>
</style>