<template>
  <view class="main">
    <swiper class="cover-ad" :autoplay="true" :interval="4000" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
      <swiper-item>
        <image class="cover-ad-image" src="/assets/image/home/government-enterprise-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-ad-image" src="/assets/image/home/government-enterprise-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-ad-image" src="/assets/image/home/government-enterprise-ad.png" mode="widthFix"></image>
      </swiper-item>
    </swiper>
    
    <exploreColumn />
    
    <view class="activity-list">
      <view class="activity-list-item">
        <view class="activity-item">
          <image class="item-ad" src="/assets/image/home/explore-live-ad-02.png" mode="widthFix"></image>
        </view>
        <view class="activity-item">
          <image class="item-ad" src="/assets/image/home/explore-live-ad-02.png" mode="widthFix"></image>
        </view>
      </view>
      <view class="activity-list-item">
        <view class="activity-item">
          <image class="item-ad" src="/assets/image/home/explore-live-ad-01.png" mode="widthFix"></image>
        </view>
        <view class="activity-item">
          <image class="item-ad" src="/assets/image/home/explore-live-ad-02.png" mode="widthFix"></image>
        </view>
      </view>
    </view>
    
  </view>
  
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import exploreColumn from '@/pages/main/components/exploreColumn.vue' // 用户搜索信息
  
  const scrollSchedule = ref(0) // 滚动进度
  
  const columnList = ref() // 项目列对象
  
  /*
   * 监听滚动事件
  */
  const scrollEvent = (data:any) => {
    // 获取高度
    let columnWidth = columnList.value.$el.offsetWidth / 2
    scrollSchedule.value = data.detail.scrollLeft / columnWidth
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 3vw;
    .cover-ad {
      width: 100%;
      height: 36vw;
      margin: 0 auto;
      .cover-ad-image {
        width: 100%;
      }
    }
    .activity-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .activity-list-item {
        width: calc(50% - 1vw);
        .activity-item {
          width: 100%;
          margin-bottom: 2vw;
          .item-ad {
            width: 100%;
          }
        }
        
      }
    }
  }
  

  
</style>