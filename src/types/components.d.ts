import XtxSwiper from '@/components/XtxSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}

export type XtxSwiperInstance = InstanceType<typeof XtxSwiper>
