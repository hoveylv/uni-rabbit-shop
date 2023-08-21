<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 页面加载
onLoad(async () => {
  await Promise.all([getHomeBannerData()])
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
</template>

<style lang="scss">
//
</style>
