<template>
  <view class="family-user-info">
    <view class="main">
      <view class="menu-type">
        <view class="menu-type-item" :class="{'selected': menuType == 'broadBand'}" @click="switchMenuType('broadBand')">家庭宽带</view>
        <view class="menu-type-item" :class="{'selected': menuType == 'familyCircle'}" @click="switchMenuType('familyCircle')">爱家亲情圈</view>
      </view>
      <!-- 家庭宽带 -->
      <template v-if="menuType == 'broadBand'">
        <view class="uset-info">
          <view class="phone">158****1234</view>
          <view class="valid-time">
            到期时间:2026-05-01
          </view>
          <view class="address">
            宽带地址:发撒地方撒旦撒的发生大
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  
  const menuType = ref('broadBand') // 菜单类型
  /*
   * 切换菜单类型
  */
  const switchMenuType = (val: string) => {
    menuType.value = val
  }
  
</script>

<style lang="scss" scoped>
  .family-user-info {
    width: 100vw;
    box-sizing: border-box;
    .main {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw;
      border-radius: 2vw;
      background-color: #fff;
      .menu-type {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 3vw;
        .menu-type-item {
          font-size: 4vw;
          font-weight: bold;
          color: #000000;
          box-sizing: border-box;
          padding: 1vw 2vw 2vw 1vw;
          position: relative;
          &.selected {
            &:before {
              content: '';
              position: absolute;
              width: 8vw;
              height: 1vw;
              left: 50%;
              bottom: 0vw;
              transform: translateX(-50%);
              background-color: #3980f7;
              border-radius: 2vw;
            }
          }
        }
      }
      .uset-info {
        width: 100%;
        position: relative;
        .phone {
          font-size: 4vw;
          font-weight: bold;
          color: #191919;
          margin-bottom: 1vw;
        }
        .valid-time {
          font-size: 3.5vw;
          color: #191919;
        }
        .address {
          font-size: 3.5vw;
          color: #191919;
        }
      }
    }
  }
</style>