<template>
  <view class="explore-column-container">
    <scroll-view class="explore-column" :scroll-x="true" :scroll-y="false" :show-scrollbar="false" @scroll="scrollEvent">
      <view class="column-list" ref="columnList">
        <view class="column-item" @click="skipPage('/pages/activity/supercardGuard')">
          <image class="icon" src="/assets/image/home/explore-icon-01.webp" mode="widthFix"></image>
          选号码
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/getSecondaryCalliper')">
          <image class="icon" src="/assets/image/home/explore-icon-02.webp" mode="widthFix"></image>
          看直播抽好礼
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
          <image class="icon" src="/assets/image/home/explore-icon-03.webp" mode="widthFix"></image>
          装宽带
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/supercardGuard')">
          <image class="icon" src="/assets/image/home/explore-icon-03.webp" mode="widthFix"></image>
          抽立减金
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/getSecondaryCalliper')">
          <image class="icon" src="/assets/image/home/explore-icon-04.webp" mode="widthFix"></image>
          0元福利
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
          <image class="icon" src="/assets/image/home/explore-icon-05.webp" mode="widthFix"></image>
          咪咕视频会员
        </view>
        <view class="column-item" @click="skipPage('/pages/activity/supercardGuard')">
          <image class="icon" src="/assets/image/home/explore-icon-06.webp" mode="widthFix"></image>
          全球购
        </view>
        <view class="column-item"@click="skipPage('/pages/activity/getSecondaryCalliper')">
          <image class="icon" src="/assets/image/home/explore-icon-07.webp" mode="widthFix"></image>
          积分兑爆品
        </view>
        <view class="column-item">
          <image class="icon" src="/assets/image/home/explore-icon-08.webp" mode="widthFix"></image>
          更多
        </view>
      </view>
    </scroll-view>
    
    <!-- 滑块 -->
    <view class="sliding-block">
      <view class="dowel" :style="{'left' : scrollSchedule * 50 + '%'}">
      </view>
    </view>
  </view>
  
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  
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
  
  // 跳转页面
  const skipPage = (data: string) => {
    uni.navigateTo({
      url: data
    })
  }
</script>

<style lang="scss" scoped>
  .explore-column-container {
    width: 100%;
    position: relative;
    .explore-column {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 0 5vw 0;
      position: relative;
    
      .column-list {
        width: 200%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 2vw 0vw;
    
        .column-item {
          width: 20vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 3vw;
          color: #2e2e2e;
    
          .icon {
            width: 8vw;
            height: 8vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-bottom: 1.5vw;
          }
        }
      }
      
    }
    
    .sliding-block {
      position: absolute;
      bottom: 4vw;
      left: 50%;
      transform: translateX(-50%);
      width: 8vw;
      height: 1vw;
      border-radius: 2vw;
      background-color: #e2e2e2;
      .dowel {
        width: 50%;
        height: 1vw;
        border-radius: 2vw;
        background-color: #4891f0;
        position: absolute;
        left: 0%;
      }
    }
  }
  
</style>