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
      <view class="title">我的卡券</view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-main">
      <view class="main">
        <view class="screen-box">
          <view class="head">
            <view class="class-item selected">可使用(6)</view>
            <view class="class-item" @click="skipPage('/pages/coupon/historyCoupon')">卡券历史</view>
          </view>
          <view class="footing" @click="switchScreenMenuShow">筛选<svg class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="32642">
              <path
                d="M646.037333 511.509333l224.874667-307.381333a74.741333 74.741333 0 0 0-16.074667-104.362667A74.485333 74.485333 0 0 0 810.773333 85.333333H213.226667C172.053333 85.333333 138.666667 118.762667 138.666667 160c0 15.872 5.045333 31.328 14.410666 44.128l224.885334 307.381333V906.666667c0 17.674667 14.304 32 31.957333 32a31.978667 31.978667 0 0 0 31.946667-32V501.034667c0-6.794667-2.165333-13.418667-6.176-18.912L204.629333 166.304A10.677333 10.677333 0 0 1 213.226667 149.333333h597.546666a10.666667 10.666667 0 0 1 8.586667 16.970667L588.298667 482.122667a32.032 32.032 0 0 0-6.176 18.912v315.413333c0 17.674667 14.304 32 31.957333 32a31.978667 31.978667 0 0 0 31.957333-32V511.509333z"
                p-id="32643"></path>
            </svg></view>
        </view>
        <view class="sort-box">
          <view class="sort-item" :class="{'selected': sortTpye == 'all'}" @click="switchSort('all')">综合排序</view>
          <view class="sort-item" :class="{'selected': sortTpye == 'newest'}" @click="switchSort('newest')">最近领取</view>
          <view class="sort-item" :class="{'selected': sortTpye == 'nearExpired'}" @click="switchSort('nearExpired')">
            即将失效</view>
        </view>

        <discountCouponItem data="5454" v-for="item in 5" :key="item" />

        <view class="choiceness-recommend-title">精选推荐</view>

        <image v-for="item in 5" :key="item" class="coupon-ad" src="/assets/image/coupon/coupon-ad.webp" mode="widthFix">
        </image>

        <view class="operate-more">
          <view class="operate-but"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="37567">
              <path
                d="M779.636 417.28a34.91 34.91 0 1 1 0 69.818h-555.03c-0.792 0-1.537-0.186-2.328-0.233-0.42 0.024-0.768 0.233-1.164 0.233a34.91 34.91 0 0 1-24.995-59.275l157.277-161.28a34.91 34.91 0 0 1 49.99 48.733L303.942 417.28h475.694z m3.608 118.714c7.517 0.791 14.94 3.491 20.759 9.193a34.91 34.91 0 0 1 0.628 49.361l-157.3 161.28a34.77 34.77 0 0 1-24.995 10.543 34.91 34.91 0 0 1-24.995-59.276l99.468-102.004H221.114a34.91 34.91 0 1 1 0-69.818H776.1c0.745 0 1.42 0.186 2.118 0.232 1.629-0.07 3.165 0.303 4.77 0.466l0.257 0.046z"
                p-id="37568"></path>
            </svg>券兑换</view>
          <view class="operate-but"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="38147">
              <path
                d="M822.144 96A137.856 137.856 0 0 1 960 233.856v146.688c0 10.272-4.576 20.032-12.48 26.56a154.656 154.656 0 0 0-56.448 119.68c0 46.88 20.928 90.304 56.416 119.648 7.904 6.528 12.512 16.256 12.512 26.528v112.256a137.856 137.856 0 0 1-137.856 137.856H201.856A137.856 137.856 0 0 1 64 785.216v-112.224c0-10.272 4.576-20.032 12.48-26.56a154.656 154.656 0 0 0 56.448-119.68 154.656 154.656 0 0 0-56.416-119.648A34.432 34.432 0 0 1 64 380.576V233.856A137.856 137.856 0 0 1 201.856 96h620.288z m0 68.928H201.856c-38.08 0-68.928 30.848-68.928 68.928v131.296a223.456 223.456 0 0 1 68.928 161.6 223.456 223.456 0 0 1-68.928 161.632v96.832c0 38.08 30.848 68.928 68.928 68.928h620.288c38.08 0 68.928-30.848 68.928-68.928v-96.832a223.456 223.456 0 0 1-68.928-161.6c0-61.984 25.376-119.872 68.928-161.632V233.856c0-38.08-30.848-68.928-68.928-68.928z m-152.64 123.712a32 32 0 0 1 14.144 53.984l-109.248 109.248H672a32 32 0 0 1 0 64h-128v64h128a32 32 0 0 1 0 64h-128v96a32 32 0 0 1-64 0v-96h-128a32 32 0 0 1 0-64h128v-64h-128a32 32 0 0 1 0-64h108.192l-109.248-109.248a32 32 0 0 1 45.248-45.248l121.12 121.088 121.088-121.088a32 32 0 0 1 31.136-8.736z"
                p-id="38148"></path>
            </svg>领券中心
            <view class="new-state"></view>
          </view>
        </view>
      </view>
    </scroll-view>

    <Transition name="screen-menu-fade">
      <view class="screen-menu-box" v-if="isShowScreenMenu">
        <view class="menu-box">
          <view class="title">
            筛选
            <svg class="icon" @click="switchScreenMenuShow" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="39136">
              <path
                d="M587.19 506.246l397.116-397.263a52.029 52.029 0 0 0 0-73.143l-2.194-2.194a51.98 51.98 0 0 0-73.143 0l-397.068 397.8-397.068-397.8a51.98 51.98 0 0 0-73.143 0l-2.146 2.194a51.054 51.054 0 0 0 0 73.143l397.069 397.263L39.544 903.461a52.029 52.029 0 0 0 0 73.142l2.146 2.195a51.98 51.98 0 0 0 73.143 0L511.9 581.583l397.068 397.215a51.98 51.98 0 0 0 73.143 0l2.194-2.146a52.029 52.029 0 0 0 0-73.143L587.19 506.246z"
                p-id="39137"></path>
            </svg>
          </view>

          <view class="filtrate-condition">
            <view class="filtrate-item" :class="{'selected': screenItem == 'all'}" @click="switchScreenItem('all')">
              全部(6)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all01'}" @click="switchScreenItem('all01')">
              话费券(0)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all02'}" @click="switchScreenItem('all02')">
              流量券(3)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all03'}" @click="switchScreenItem('all03')">
              商品实物券(0)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all04'}" @click="switchScreenItem('all04')">
              业务券(3)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all05'}" @click="switchScreenItem('all05')">
              合作券(0)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all06'}" @click="switchScreenItem('all06')">
              会员/权益券(0)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all07'}" @click="switchScreenItem('all07')">
              和包券(0)
            </view>
            <view class="filtrate-item" :class="{'selected': screenItem == 'all08'}" @click="switchScreenItem('all08')">
              其他(0)
            </view>
          </view>

          <view class="operate-box">
            <view class="operate-item" @click="screenItem = 'all'">重置</view>
            <view class="operate-item" @click="switchScreenMenuShow">确定</view>
          </view>

        </view>
      </view>
    </Transition>

  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import discountCouponItem from './components/discountCouponItem'

  // 跳转页面
  const skipPage = (data : string) => {
    uni.navigateTo({
      url: data
    })
  }

  const sortTpye = ref('all') // 排序方式
  /**
   * 切换排序
*/
  const switchSort = (val : string) => {
    sortTpye.value = val
  }

  const isShowScreenMenu = ref(false) // 是否显示筛选菜单

  /**
   * 切换筛选菜单显示
  */
  const switchScreenMenuShow = () => {
    isShowScreenMenu.value = !isShowScreenMenu.value
  }

  const screenItem = ref('all') // 筛选条件
  const switchScreenItem = (val : string) => {
    screenItem.value = val
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

      .screen-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        box-sizing: border-box;
        padding: 3vw;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 2;

        .head {
          display: flex;
          align-items: center;

          .class-item {
            color: #040404;
            font-size: 4vw;
            box-sizing: border-box;
            margin-right: 4vw;

            &.selected {
              color: #000;
              font-weight: bold;
            }
          }
        }

        .footing {
          font-size: 3.2vw;
          color: #3e3e3e;

          .icon {
            width: 3.2vw;
            height: 3.2vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-left: 1vw;
          }
        }
      }

      .sort-box {
        width: 100%;
        box-sizing: border-box;
        padding: 3vw;
        display: flex;
        background-color: #fff;
        margin-bottom: 3vw;

        .sort-item {
          box-sizing: border-box;
          margin-right: 3vw;
          font-size: 3.5vw;
          color: #505050;

          &.selected {
            color: #4d7af9;
          }
        }
      }

      .choiceness-recommend-title {
        width: 100%;
        font-size: 4vw;
        font-weight: bold;
        color: #000;
        box-sizing: border-box;
        padding: 3vw;
      }

      .coupon-ad {
        width: calc(100% - 6vw);
        display: block;
        margin: 0 auto 3vw auto;
      }

      .operate-more {
        position: sticky;
        left: 0;
        bottom: 0;
        background-color: #fff;
        padding: 4vw 3vw 10vw 3vw;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;

        .operate-but {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 4vw;
          color: #333333;
          position: relative;
          border-right: 1px solid #e5e5e5;

          &:last-of-type {
            border-right: none;
          }

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-right: 1vw;
          }

          .new-state {
            position: absolute;
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            background-color: #e15d46;
            top: 0vw;
            left: 35vw;
          }
        }
      }
    }

    .screen-menu-fade-enter-active,
    .screen-menu-fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .screen-menu-fade-enter-from,
    .screen-menu-fade-leave-to {
      opacity: 0;
    }

    .screen-menu-box {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(0, 0, 0, 0.5);

      .menu-box {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        padding: 3vw 3vw 8vw 3vw;
        border-radius: 3vw 3vw 0 0;

        .title {
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          font-size: 4vw;
          font-weight: bold;
          padding: 3vw;
          border-bottom: 1px solid #e5e5e5;
          position: relative;
          margin-bottom: 3vw;

          .icon {
            position: absolute;
            top: 50%;
            right: 1vw;
            transform: translateY(-50%);
            width: 3.5vw;
            height: 3.5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            color: #aaaaaa;
          }
        }

        .filtrate-condition {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-bottom: 3vw;

          .filtrate-item {
            width: 47%;
            height: 10vw;
            margin: 0 1vw 3vw 1vw;
            border: 1px solid #f6f6f6;
            background-color: #f6f6f6;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1vw 2vw;
            border-radius: 5vw;
            font-size: 3.8vw;

            &.selected {
              color: #367cf6;
              font-weight: bold;
              border: 1px solid #4b90f7;
              background-color: #f6fafe;
            }
          }
        }

        .operate-box {
          width: 100%;
          box-sizing: border-box;
          display: flex;

          .operate-item {
            width: 47%;
            height: 10vw;
            margin: 0 1vw 3vw 1vw;
            border: 1px solid #f6f6f6;
            background-color: #f6f6f6;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1vw 2vw;
            border-radius: 5vw;
            font-size: 3.8vw;
            font-weight: bold;

            &:nth-child(2) {
              color: #fff;
              background-color: #3980f7;
            }
          }
        }
      }
    }
  }
</style>