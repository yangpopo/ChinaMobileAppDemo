<template>
  <view class="main">
    <!-- 背景 -->
    <view class="main-bg"></view>
    <!-- 家庭--封面 -->
    <view class="family-cover-box">
      <image class="family-cover" src="/assets/image/home/family-cover.png" mode="widthFix"></image>
      <view class="user-phone">158****1234</view>
      <view class="subscribe-tga">预约信息查询</view>
    </view>
    <image class="family-networking-ad" src="/assets/image/home/family-networking.png" mode="widthFix"></image>
    <familyUserInfo />
    
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import familyUserInfo from './familyUserInfo.vue'



</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 3vw;
    background-color: #f5f5f5;
    .main-bg {
      width: 100vw;
      height: 80vw;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #4e9cfe;
      z-index: 0;
    }
    .family-cover-box {
      width: 100%;
      position: relative;
      .family-cover {
        width: calc(100% + 6vw);
        margin-left: -3vw;
      }
      .user-phone {
        position: absolute;
        top: 1vw;
        left: 1vw;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        padding: 0.5vw 2.5vw;
        border-radius: 3vw;
        font-size: 3.2vw;
        color: #fff;
      }
      .subscribe-tga {
        position: absolute;
        top: 1vw;
        right: -3vw;
        background-color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        padding: 1vw 2.5vw 1vw 4vw;
        border-radius: 4vw 0 0 4vw;
        font-size: 3.5vw;
        color: #fff;
      }
    }
    .family-networking-ad {
      width: 100%;
      margin-top: -5vw;
      margin-bottom: 3vw;
    }
    

}
</style>