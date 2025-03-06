<template>
  <scroll-view :scroll-x="false" :scroll-y="true" class="explore" @click.stop="allClickEvent">
    <view class="head">
      <userSearchInfoNav styleType="light" />
      <scroll-view :scroll-x="true" :scroll-y="false" class="nav" :show-scrollbar="false">
        <view class="nav-box">
          <view class="nav-item" @click="switchNav('exploreLive')" :class="{'selected' : navType == 'exploreLive'}">
            生活
          </view>
          <view class="nav-item" @click="switchNav('exploreLocal')" :class="{'selected' : navType == 'exploreLocal'}"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="114397"><path d="M620.8 339.2c0-51.2-38.4-89.6-89.6-89.6s-89.6 38.4-89.6 89.6 38.4 89.6 89.6 89.6 89.6-38.4 89.6-89.6zM928 819.2c-12.8-12.8-38.4-19.2-70.4-25.6-19.2-6.4-57.6-6.4-83.2-6.4h-6.4c-12.8 0-19.2 12.8-19.2 25.6s12.8 25.6 25.6 25.6h25.6c51.2 6.4 76.8 12.8 83.2 25.6 6.4 6.4 12.8 19.2 12.8 25.6 0 12.8-25.6 32-89.6 51.2-70.4 19.2-166.4 25.6-275.2 25.6-115.2 0-204.8-6.4-275.2-25.6-76.8-19.2-96-44.8-96-51.2 0-12.8 6.4-19.2 12.8-25.6 12.8-6.4 32-12.8 70.4-19.2h32c12.8 0 25.6-12.8 25.6-25.6s-6.4-19.2-19.2-25.6h-6.4c-64 0-102.4 12.8-134.4 25.6-25.6 19.2-44.8 44.8-44.8 76.8 0 25.6 12.8 51.2 44.8 70.4 19.2 12.8 51.2 25.6 89.6 32 70.4 19.2 172.8 25.6 288 25.6 121.6 0 204.8-6.4 275.2-25.6 44.8-6.4 83.2-25.6 102.4-38.4 25.6-19.2 44.8-38.4 51.2-64 12.8-38.4 6.4-51.2-19.2-76.8z" fill="#666666" p-id="114398"></path><path d="M486.4 851.2c12.8 12.8 25.6 19.2 44.8 19.2 12.8 0 32-6.4 44.8-19.2 57.6-76.8 102.4-147.2 166.4-249.6 70.4-115.2 115.2-211.2 115.2-275.2 0-83.2-32-166.4-89.6-224-64-64-140.8-96-224-96h-12.8c-83.2 0-160 32-224 96s-96 147.2-89.6 224c-6.4 64 32 166.4 102.4 275.2 64 108.8 115.2 172.8 166.4 249.6z m-128-704c51.2-51.2 115.2-76.8 172.8-76.8 64 0 128 25.6 172.8 76.8 51.2 51.2 76.8 102.4 76.8 172.8 0 32-19.2 89.6-64 172.8-44.8 76.8-96 160-172.8 268.8 0 6.4-6.4 6.4-12.8 6.4s-12.8 0-12.8-6.4c-147.2-204.8-236.8-371.2-236.8-441.6 0-70.4 25.6-121.6 76.8-172.8z" fill="#666666" p-id="114399"></path></svg>
          同城
          </view>
          <view class="nav-item" @click="switchNav('homeMobilePhone')"
            :class="{'selected' : navType == 'homeMobilePhone'}">视频
            <!-- <view class="tag">国补</view> -->
          </view>
          <view class="nav-item" @click="switchNav('homeNearbyServiceHall')"
            :class="{'selected' : navType == 'homeNearbyServiceHall'}">游戏
          </view>
          <view class="nav-item" @click="switchNav('homeGovernmentEnterprise')"
            :class="{'selected' : navType == 'homeGovernmentEnterprise'}">阅读</view>
          <view class="nav-item" @click="switchNav('homeGovernmentEnterprise')"
            :class="{'selected' : navType == 'homeGovernmentEnterprise'}">无忧行</view>
        </view>
      </scroll-view>
    </view>
    
    <exploreLive v-if="navType == 'exploreLive'" />
    <exploreLocal v-else-if="navType == 'exploreLocal'" />

    
    
    
    


  </scroll-view>
</template>

<script lang="ts" setup>
  import userSearchInfoNav from '@/pages/main/components/userSearchInfoNav.vue' // 用户搜索信息
  
  import exploreLive from '@/pages/main/components/exploreLive.vue' // 探索-->生活
  import exploreLocal from '@/pages/main/components/exploreLocal.vue' // 探索-->生活
  

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

  }


  const scrollHeadSchedule = ref(0) // 滚动头部进度


  const navType = ref('exploreLive') // 导航类型
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
</script>

<style lang="scss" scoped>
  .explore {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
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
      background-image: linear-gradient(-180deg, #5c87f4, #f5f5f5);

      .nav {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 2vw;

        .nav-box {
          width: auto;
          display: flex;
          align-items: flex-end;
          box-sizing: border-box;
          padding-bottom: 2vw;

          .nav-item {
            font-size: 4vw;
            color: #000000;
            box-sizing: border-box;
            padding: 0 2vw;
            margin: 0 2vw;
            position: relative;
            flex-shrink: 0;
            display: flex;
            justify-content: center;

            &.selected {
              font-weight: bold;
              color: #000000;
              &:before {
                content: '';
                width: 5vw;
                height: 1vw;
                background-color: #3a84f7;
                border-radius: 5vw;
                position: absolute;
                bottom: -2vw;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            .icon {
              width: 5vw;
              height: 5vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              color: #3d3d3e;
              margin-right: 1vw;
            }

            .tag {
              position: absolute;
              font-size: 2vw;
              color: #fff;
              top: 0vw;
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