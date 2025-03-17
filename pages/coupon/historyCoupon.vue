<template>
  <view class="my-coupon">
    <uni-nav-bar class="nav-bar" :border="false">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <view class="title">卡券历史</view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-main">
      <view class="main">
        <view class="screen-box">
          <view class="screen-item" :class="{'selected': screenState == 'used'}" @click="switchScreen('used')">已使用
          </view>
          <view class="screen-item" :class="{'selected': screenState == 'loseEfficacy'}"
            @click="switchScreen('loseEfficacy')">已过期</view>
        </view>

        <discountCouponItem data="5454" :state="screenState == 'used' ? 0 : 1" v-for="item in 5" :key="item" />

      </view>
    </scroll-view>



  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import discountCouponItem from './components/discountCouponItem'




  const screenState = ref('used') // 筛选状态
  /**
   * 切换筛选状态
  */
  const switchScreen = (val : string) => {
    screenState.value = val
  }

  /**
    * 返回上一页
   */
  const returnNextPage = () => {
    uni.navigateBack({
      delta: 1
    })
  }

  onMounted(() => {
  })
</script>

<style lang="scss" scoped>
  .my-coupon {
    width: 100vw;
    height: 100vh;
    position: relative;


    .nav-bar {
      width: 100%;
      position: relative;
      border-bottom: 1px solid #eff0f1;

      .left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 10vw;
        top: 50%;
        left: 3vw;
        transform: translateY(-50%);
        color: #000000;

        .icon {
          width: 5vw;
          height: 5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        }
      }

      .title {
        position: absolute;
        top: 50%;
        left: 49%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vw;
        font-weight: bold;
      }

      .right {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 10vw;
        top: 50%;
        right: 3vw;
        transform: translateY(-50%);
        color: #000000;
        font-size: 3.8vw;
      }
    }

    .scroll-main {
      width: 100%;
      height: calc(100vh - 12.5vw);
      box-sizing: border-box;
      padding: 0;
      background-color: #f4f7f9;
    }

    .main {
      width: 100%;
      box-sizing: border-box;
      padding-bottom: 10vw;

      .screen-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-sizing: border-box;
        padding: 3vw 3vw 5vw 3vw;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;
        margin-bottom: 3vw;

        .screen-item {
          width: 50%;
          text-align: center;
          font-size: 3.8vw;
          color: #333333;
          position: relative;

          &.selected {
            font-weight: bold;

            &:before {
              content: '';
              position: absolute;
              width: 10vw;
              height: 1vw;
              border-radius: 2vw;
              left: 50%;
              bottom: -3vw;
              transform: translateX(-50%);
              background-color: #4a90f7;
            }
          }
        }



      }

      .ticket-item {
        width: calc(100% - 6vw);
        margin: 0 auto 3vw auto;
        background-color: #fff;
        border-radius: 3vw;
        box-sizing: border-box;
        padding: 4vw 3vw;
        position: relative;

        .type {
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          padding: 0.8vw 2.5vw;
          border-radius: 3vw 0 3vw 0;
          font-size: 3vw;
          z-index: 1;
          // &.orange {
          color: #734c2b;
          font-weight: bold;
          background-color: #ffeacd;
          // }
        }

        .head {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 3vw;
          margin-bottom: 3vw;
          border-bottom: 1px dashed #e3e3e3;

          .left {
            display: flex;
            align-items: center;

            .cover {
              width: 15vw;
              height: 15vw;
              border-radius: 2vw;
              overflow: hidden;
              position: relative;
              flex-shrink: 0;
              margin-right: 2vw;

              .cover-img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .info {
              width: 100%;

              .title {
                font-size: 3.8vw;
                font-weight: bold;
                color: #363636;
                margin-bottom: 2vw;
              }

              .subhead {
                font-size: 3vw;
                color: #9c9c9e;
              }
            }

          }

          .right {
            flex-shrink: 0;

            .title {
              width: 100%;
              text-align: center;
              font-size: 4vw;
              font-weight: bold;
              color: #ee5a4e;
              margin-bottom: 2vw;
            }

            .go-use {
              background-image: linear-gradient(0deg, #fb6f3a, #f05948);
              box-sizing: border-box;
              padding: 1.2vw 3vw;
              border-radius: 5vw;
              font-size: 3.2vw;
              color: #fff;

            }
          }

        }

        .footing {
          display: flex;
          width: 100%;
          box-sizing: border-box;

          .title {
            font-size: 3vw;
            color: #636363;
            margin-right: 2vw;
          }

          .subhead {
            font-size: 3vw;
            color: #9b9b9b;
          }
        }
      }





    }




  }
</style>