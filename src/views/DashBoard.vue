<template>
  <div class="index p-5 pt-10 h-screen">
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else class="flex flex-col h-full">
      <div class="lineone flex">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="w-2/3 flex">
            <dv-decoration-8 class="dv-dec-8" />
            <div class="onecenter relative">
              <dv-decoration-11
                  class="whitespace-nowrap
                  text-white
                  absolute bottom-0 left-1/2
                  transform
                  dec-11
                  -translate-x-1/2">
                {{ title }}
              </dv-decoration-11>
              <dv-decoration-6
                  class="dec-6
                  absolute -bottom-6
                  left-1/2
                  transform
                  -translate-x-1/2"
              />
            </div>
            <dv-decoration-8
                class="dv-dec-8"
                :reverse="true"
            />
          </div>
          <dv-decoration-10 class="rotate-180 dv-dec-10" />
      </div>
      <div class="flex justify-between linetwo overflow-hidden pl-5 pr-5">
        <div class="leftbox w-2/5 h-full flex">
          <div class="box1  h-full w-3/5 mr-4 skew relative bg">
            <div class="absolute top-0 -left-7 h-full w-1/3 rskew text-white text-2xl pl-5 bg flex items-center">
              <span class="whitespace-nowrap">数据融合</span>
            </div>
          </div>
          <div class="box2 bg h-full w-2/5 skew flex items-center justify-center">
            <span class="inline-block rskew text-white  text-2xl">任务分配</span>
          </div>
        </div>
        <div class="rightbox  w-2/5 h-full flex">
          <div class="box1 w-2/5 bg rskew flex items-center justify-center mr-4">
            <span class="inline-block skew text-white text-2xl">协同模式</span>
          </div>
          <div class="box2 w-3/5 rskew bg relative ">
            <div class="skew absolute top-0 -right-7 h-full w-2/3 bg flex items-center  justify-end pr-5">
              <span class="text-white text-xl whitespace-nowrap">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="main mt-5 flex-grow">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script setup>
import {formatTime} from '@/utils'
import {ref, reactive, onMounted} from "vue";
import Main from '@/components/Main.vue';

// * 加载标识
const loading = ref(true);
const title = "多重产业链企业群协同平台"
const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
// * 时间内容
const timeInfo = reactive({
  setInterval: 0,
  dateDay: '',
  dateYear: '',
  dateWeek: ''
})

onMounted(() => {
  handleTime();
  setTimeout(() => {
    loading.value = false;
  }, 1000);
})
// todo 处理时间监听
const handleTime = () => {
  timeInfo.setInterval = setInterval(() => {
    const date = new Date()
    timeInfo.dateDay = formatTime(date, 'HH: mm: ss')
    timeInfo.dateYear = formatTime(date, 'yyyy-MM-dd')
    timeInfo.dateWeek = WEEK[date.getDay()]
  }, 1000)
}
</script>

<style scoped lang="less">
.index {
  background-image: url('../assets/pageBg.png');

  .dv-dec-8 {
    width: 25%;
    height: 50px;
  }

  .onecenter {
    width: 70%;
  }
  .dv-dec-10 {
    width: 25%;
    height: 5px;
  }

  .dec-6 {
    height: 10px !important;
    width:50%;
  }
  .dec-11
  {
    width: 90%;
    font-size: 30px;
  }

  .linetwo {
    height: 6%;
  }

  .skew {
    transform: skewX(45deg);
  }

  .rskew {
    transform: skewX(-45deg);
  }

  .bg {
    background-color: #0f1325;
  }
}
</style>

