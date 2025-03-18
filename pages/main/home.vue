<template>
  <scroll-view :scroll-x="false" :scroll-y="true" class="home" :scroll-top="scrollTop" @scroll="scrollEvent" @click.stop="allClickEvent">
    <view class="head" :style="{'visibility': isScroll ? 'hidden' : 'visible'}" id="headId">
      <userSearchInfoNav styleType="light" />
      <scroll-view :scroll-x="true" :scroll-y="false" class="nav" :show-scrollbar="false">
        <view class="nav-box">
          <view class="nav-item" @click="switchNav('homeReferrals')" :class="{'selected' : navType == 'homeReferrals'}">推荐
          </view>
          <view class="nav-item" @click="switchNav('homeFamily')" :class="{'selected' : navType == 'homeFamily'}">爱家</view>
          <view class="nav-item" @click="switchNav('homeMobilePhone')" :class="{'selected' : navType == 'homeMobilePhone'}">手机
            <view class="tag">国补</view>
          </view>
          <view class="nav-item" @click="switchNav('homeNearbyServiceHall')" :class="{'selected' : navType == 'homeNearbyServiceHall'}">附近厅
          </view>
          <view class="nav-item" @click="switchNav('homeGovernmentEnterprise')"
            :class="{'selected' : navType == 'homeGovernmentEnterprise'}">政企</view>
        </view>
      </scroll-view>
    </view>
    <view class="head dark"
      :style="{'visibility': !isScroll ? 'hidden' : 'visible', 'opacity': scrollHeadSchedule * 1}">
      <userSearchInfoNav styleType="dark" />
      <scroll-view :scroll-x="true" :scroll-y="false" class="nav">
        <view class="nav-box">
          <view class="nav-item" @click="switchNav('homeReferrals')" :class="{'selected' : navType == 'homeReferrals'}">推荐
          </view>
          <view class="nav-item" @click="switchNav('homeFamily')" :class="{'selected' : navType == 'homeFamily'}">爱家</view>
          <view class="nav-item" @click="switchNav('homeMobilePhone')" :class="{'selected' : navType == 'homeMobilePhone'}">手机
            <view class="tag">国补</view>
          </view>
          <view class="nav-item" @click="switchNav('homeNearbyServiceHall')" :class="{'selected' : navType == 'homeNearbyServiceHall'}">附近厅
          </view>
          <view class="nav-item" @click="switchNav('homeGovernmentEnterprise')"
            :class="{'selected' : navType == 'homeGovernmentEnterprise'}">政企</view>
        </view>
      </scroll-view>
    </view>
    
   <homeReferrals v-if="navType == 'homeReferrals'" />
   <homeFamily v-else-if="navType == 'homeFamily'" />
   <homeMobilePhone v-else-if="navType == 'homeMobilePhone'" />
   <homeNearbyServiceHall v-else-if="navType == 'homeNearbyServiceHall'" />
   <homeGovernmentEnterprise v-else-if="navType == 'homeGovernmentEnterprise'" />
   
   
  </scroll-view>
</template>

<script lang="ts" setup>
  import userSearchInfoNav from '@/pages/main/components/userSearchInfoNav.vue' // 用户搜索信息
  import homeReferrals from '@/pages/main/components/homeReferrals.vue' // 家-->推荐
  import homeFamily from '@/pages/main/components/homeFamily.vue' // 家-->爱家
  import homeMobilePhone from '@/pages/main/components/homeMobilePhone.vue' // 家-->手机
  import homeNearbyServiceHall from '@/pages/main/components/homeNearbyServiceHall.vue' // 家-->附近营业厅
  import homeGovernmentEnterprise from '@/pages/main/components/homeGovernmentEnterprise.vue' // 家-->政企
  import { ref, nextTick } from 'vue'
  import { useUserSearchInfoNavStore } from '@/stores/userSearchInfoNav' // 引入用户搜索信息状态

  const userSearchInfoNavState = useUserSearchInfoNavStore()
  
  const scrollTop = ref(0) // 滚动值
  
  /*
  * 监听全部点击事件
  */
  const allClickEvent = () => {
    if (userSearchInfoNavState.isShowMenu) {
      // 关闭-->用户搜索信息状态
      userSearchInfoNavState.isShowMenu = false
    }
    if (userSearchInfoNavState.isShowUserMenu) {
      // 关闭-->用户搜索信息状态
      userSearchInfoNavState.isShowUserMenu = false
    }
  }


  const isScroll = ref(false)
  const scrollHeadSchedule = ref(0) // 滚动头部进度
  /*
  * 监听滚动事件
  */
  const scrollEvent = (data : any) : void => {
    isScroll.value = data.detail.scrollTop > 5 ? true : false
    if (data.detail.scrollTop <= 100) {
      scrollHeadSchedule.value = data.detail.scrollTop / 100
    } else if (data.detail.scrollTop > 100) {
      scrollHeadSchedule.value = 0.95
    }
  };

  const navType = ref('homeReferrals') // 导航类型
  /*
   * 切换导航类型
  */
  const switchNav = (val : string) : void => {
    scrollTop.value = 10
    navType.value = val
    nextTick(() => {
      scrollTop.value = 0 // 初始化滚动条
    })
  }

  /*
  * 栏目跳转
  */
  const columnSkip = (val : string) : void => {

  }


</script>

<style lang="scss" scoped>
  .home {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 20vw;

    .head {
      width: 100vw;
      box-sizing: border-box;
      padding-top: 5vw;
      background-color: transparent;
      position: sticky;
      z-index: 5;
      top: 0;

      &.dark {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;

        .nav-item {
          box-sizing: border-box;
          color: #2d2d2f !important;
        }
      }

      .nav {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 0vw 2vw 2vw 2vw;

        .nav-box {
          width: auto;
          display: flex;
          align-items: flex-end;
          padding-top: 2vw;

          .nav-item {
            font-size: 3.5vw;
            color: #c4ecf8;
            box-sizing: border-box;
            padding: 0 2vw;
            margin: 0 2vw;
            position: relative;
            flex-shrink: 0;
            display: flex;
            justify-content: center;

            &.selected {
              font-size: 4vw;
              font-weight: bold;
              color: #fff;
            }

            .tag {
              position: absolute;
              font-size: 2vw;
              color: #fff;
              top: -2vw;
              right: -2vw;
              background-color: #ff4d43;
              padding: 0.5vw 1.5vw;
              border-radius: 3vw;
            }
          }
        }

      }
    }

    
  }
</style>