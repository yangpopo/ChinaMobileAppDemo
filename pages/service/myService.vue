<template>
  <view class="my-service">
    <uni-nav-bar class="nav-bar" :border="false">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <view class="title">我的客服</view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="main">
      <swiper class="service-ad" :autoplay="true" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)"
        indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
        <swiper-item v-for="item in 2" :key="item">
          <image class="service-ad-img" src="/assets/image/service/service-ad.png" mode="widthFix"></image>
        </swiper-item>
      </swiper>

      <!-- 特色服务 -->
      <view class="feature-serve">
        <view class="title">特色服务</view>
        <view class="serve-list">
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-01.png" mode="widthFix"></image>
            <view class="name">我的投诉</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-02.png" mode="widthFix"></image>
            <view class="name">我的订单</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-03.png" mode="widthFix"></image>
            <view class="name">我的套餐</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-04.png" mode="widthFix"></image>
            <view class="name">余量查询</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-05.png" mode="widthFix"></image>
            <view class="name">积分查询</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-06.png" mode="widthFix"></image>
            <view class="name">我的账单</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-07.png" mode="widthFix"></image>
            <view class="name">在售资费</view>
          </view>
          <view class="serve-item">
            <image class="icon" src="/assets/image/service/serve-icon-08.png" mode="widthFix"></image>
            <view class="name">话费充值</view>
          </view>
        </view>
      </view>

      <!-- 猜你想问 -->
      <view class="guess-box">
        <view class="title">猜你想问</view>
        <scroll-view class="scroll-nav" scroll-x="true" :scroll-with-animation="true" :show-scrollbar="false"
          :scroll-into-view="scrollIntoViewId">
          <view class="container">
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item01'}" id="item01"
              @click="switchNavItem('item01', $event)">热点问题</view>
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item02'}" id="item02"
              @click="switchNavItem('item02', $event)">排障专区</view>
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item03'}" id="item03"
              @click="switchNavItem('item03', $event)">查账单</view>
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item04'}" id="item04"
              @click="switchNavItem('item04', $event)">查积分</view>
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item05'}" id="item05"
              @click="switchNavItem('item05', $event)">要兑换</view>
            <view class="nav-item" :class="{'selected': scrollIntoViewId == 'item06'}" id="item06"
              @click="switchNavItem('item06', $event)">已订业务</view>
            <view class="nav-state" :style="{'left': navStateX + 'px'}"></view>
          </view>
        </scroll-view>

        <view class="question-list">
          <view class="question-item" v-for="item in 10" :key="item">
            <view class="head">我要充话费{{ scrollIntoViewId }}</view>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29488">
              <path
                d="M696.32 532.48c0-12.57472-4.17792-20.93056-12.53376-29.32736l-326.0416-326.73792a40.3456 40.3456 0 0 0-58.49088 0 40.5504 40.5504 0 0 0 0 58.65472L596.00896 532.48l-296.7552 297.41056a40.5504 40.5504 0 0 0 0 58.65472 40.3456 40.3456 0 0 0 58.53184 0l326.00064-326.73792c8.35584-8.3968 12.53376-16.7936 12.53376-29.32736z"
                p-id="29489"></path>
            </svg>
          </view>
        </view>
      </view>

      <view class="annotation">Copyright@2025&nbsp;中国移动</view>

      <view class="more-but">
        <view class="phone-service" @click="dialPhoneService"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="30964">
            <path
              d="M787.10272 971.99616c-106.7264 0-280.43776-107.4432-453.35552-280.40704-108.52864-108.49792-194.27328-220.8768-241.44896-316.43136-47.73376-96.6912-53.0432-170.9312-14.93504-209.03936l90.84928-90.84928v-1.00864c1.1008-0.6912 2.57024-1.67424 4.08064-3.12832a93.87008 93.87008 0 0 1 56.54016-19.0208c28.37504 0 54.29248 12.54912 71.1168 34.42688l101.94944 128.22528c30.57664 36.71552 27.99104 87.94112-6.04672 121.9328L339.46624 400.08704l2.77504 4.53632c38.56896 63.08352 78.6688 115.12832 122.59328 159.104 44.06272 44.01664 96.10752 84.13184 159.104 122.6496l4.81792 2.944 59.83744-59.88864c17.55136-17.54624 40.43264-27.20768 64.44032-27.20768 20.97664 0 40.79104 7.28064 57.30816 21.05856l127.98976 101.71904 6.2464 6.29248c17.29536 15.8464 26.97216 37.34528 27.48416 60.76416 0.5376 24.65792-9.472 49.12128-27.46368 67.11296l-88.74496 88.75008c-16.57856 15.94368-39.74656 24.07424-68.75136 24.07424zM227.98336 104.39168c-9.1136 0-18.31936 2.97472-25.25184 8.15616l-0.4096 0.31232-92.33408 92.38016c-7.72608 7.73632-11.60704 19.47648-11.53536 34.90304 0.34304 75.17696 100.6336 251.1872 267.86304 415.5904 155.21792 152.60672 334.42816 267.68384 416.86016 267.68384h0.01536c14.73024 0 26.01472-3.8144 33.536-11.33568 0 0 89.56928-89.55392 90.0096-90.01984 14.23872-14.98112 14.18752-38.43584 0.27136-53.35552a10.24 10.24 0 0 0-6.7072-6.4256l-126.75584-104.01792c-7.64928-5.72928-15.97952-8.6528-24.34048-8.6528-10.19904 0-19.89632 4.28544-28.03712 12.3904l-75.57632 75.57632a27.55072 27.55072 0 0 1-19.3792 7.87968 27.50464 27.50464 0 0 1-11.91424-2.69312 844.46208 844.46208 0 0 1-191.86688-143.19616 844.62592 844.62592 0 0 1-143.35488-192.19968c-4.81792-10.11712-2.72896-22.71744 5.37088-31.01184l71.96672-75.2128c7.6288-5.93408 12.11904-14.82752 12.66688-25.1136 0.50688-9.53856-2.55488-19.49184-8.3968-27.30496l-12.90752-17.25952v1.06496l-88.82688-111.7696c-6.44608-10.40896-17.69984-16.36864-30.96576-16.36864z m649.43616 378.07104c-15.84128 0-25.68192-9.84064-25.68192-25.68704 0-148.90496-121.1648-270.04416-270.10048-270.04416-15.84128 0-25.68192-9.84064-25.68192-25.68704 0-15.87712 9.84064-25.73824 25.68192-25.73824 177.2544 0 321.4592 144.20992 321.4592 321.46432 0.00512 15.85152-9.83552 25.69216-25.6768 25.69216z m-131.46624 0c-15.84128 0-25.68192-9.84064-25.68192-25.68704-0.20992-76.24192-62.39744-138.4192-138.61376-138.62912-15.86176 0-25.7024-9.84064-25.7024-25.68704 0-15.84128 9.84064-25.68704 25.68192-25.68704 104.45824 0.30208 189.70624 85.54496 189.99808 190.02368 0.00512 15.82592-9.83552 25.66656-25.68192 25.66656z"
              p-id="30965"></path>
          </svg>电话客服</view>
        <view class="line-service"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="31745">
            <path
              d="M927.616 465.6C923.328 236.704 745.888 51.808 528 51.808h-32c-217.888 0-395.328 184.896-399.616 413.76C58.112 487.744 32 528.672 32 576v64c0 70.592 57.408 128 128 128s128-57.408 128-128v-64a128.064 128.064 0 0 0-126.784-127.872C173.728 262.688 318.912 115.808 496 115.808h32c177.12 0 322.272 146.88 334.784 332.32A128.064 128.064 0 0 0 736 576v64c0 57.792 38.72 106.176 91.392 122.016a337.504 337.504 0 0 1-191.936 124.48A79.712 79.712 0 0 0 560 832a80 80 0 1 0 0 160 79.68 79.68 0 0 0 67.872-38.112 402.432 402.432 0 0 0 278.24-193.6C955.968 742.816 992 695.776 992 640v-64c0-47.328-26.112-88.256-64.384-110.4zM224 576v64c0 35.296-28.704 64-64 64s-64-28.704-64-64v-64c0-35.296 28.704-64 64-64s64 28.704 64 64z m704 64c0 34.304-27.2 62.176-61.12 63.712l-2.496-1.184c-0.224 0.512-0.576 0.928-0.8 1.408A64 64 0 0 1 800 640v-64c0-35.296 28.704-64 64-64s64 28.704 64 64v64z"
              p-id="31746"></path>
          </svg>在线客服</view>
      </view>

    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'

  const scrollIntoViewId = ref('item01') // 滚动id

  const updateNavStateX = (id : string = 'item01') => {
    let objDom = document.getElementById(id)
    let offsetLeft = objDom.offsetLeft
    let offsetWidth = objDom.offsetWidth
    navStateX.value = offsetLeft + (offsetWidth / 3)
  }

  const navStateX = ref(0) // 导航状态x位置
  /**
   * 切换导航项目
*/
  const switchNavItem = (val : string, obj : any) => {
    scrollIntoViewId.value = val
    updateNavStateX(obj.currentTarget.id)
  }

  /**
    * 返回上一页
   */
  const returnNextPage = () => {
    uni.navigateBack({
      delta: 1
    })
  }
  
  /**
   * 电话客服
*/
const dialPhoneService = () => {
  uni.makePhoneCall({
  	phoneNumber: '10086' //仅为示例
  });
}

  onMounted(() => {
    updateNavStateX()
  })
</script>

<style lang="scss" scoped>
  .my-service {
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

    .main {
      width: 100%;
      height: calc(100vh - 12.5vw);
      box-sizing: border-box;
      padding: 3vw 0;
      background-color: #f4f7f9;

      .service-ad {
        width: calc(100% - 6vw);
        margin: 0 auto 3vw auto;
        height: 29.8vw;

        .service-ad-img {
          width: 100%;
        }
      }

      .feature-serve {
        width: calc(100% - 6vw);
        margin: 0 auto 3vw auto;
        box-sizing: border-box;
        padding: 3vw;
        border-radius: 3vw;
        background-color: #fff;
        box-shadow: 0vw 0.25vw 0.5vw #e9ecee;

        >.title {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #333333;
          box-sizing: border-box;
          padding: 2vw 0;
          margin-bottom: 3vw;
        }

        .serve-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .serve-item {
            width: 25%;
            margin-bottom: 5vw;

            .icon {
              width: 10vw;
              height: 10vw;
              margin: 0 auto 2vw auto;
              display: block;
            }

            .name {
              width: 100%;
              text-align: center;
              font-size: 3.5vw;
              color: #2d2d2d;
            }
          }
        }
      }

      .guess-box {
        width: calc(100% - 6vw);
        margin: 0 auto 3vw auto;
        box-sizing: border-box;
        padding: 3vw;
        border-radius: 3vw;
        background-color: #fff;
        box-shadow: 0vw 0.25vw 0.5vw #e9ecee;

        >.title {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #333333;
          box-sizing: border-box;
          padding: 2vw 0;
          margin-bottom: 3vw;
        }

        .scroll-nav {
          width: 100%;

          .container {
            width: auto;
            display: flex;
            position: relative;
            box-sizing: border-box;
            padding-bottom: 2.5vw;

            .nav-state {
              content: '';
              display: block;
              width: 6vw;
              height: 1vw;
              background-color: #4a90f7;
              border-radius: 2vw;
              position: absolute;
              left: 0;
              bottom: 0vw;
              transition: all 0.5s;
            }

            .nav-item {
              box-sizing: border-box;
              padding: 1vw 3.5vw;
              white-space: nowrap;
              font-size: 3.5vw;
              color: #646566;

              &.selected {
                font-weight: bold;
                color: #323233;
              }
            }
          }
        }

        .question-list {
          width: 100%;
          box-sizing: border-box;
          padding: 0vw 3vw;

          .question-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 3vw 0;
            border-bottom: 1px solid #ecedf0;

            &:last-of-type {
              border-bottom: none;
            }

            .head {
              width: 80%;
              font-size: 3.5vw;
              color: #323233;
              overflow: hidden;
              /* 超出部分隐藏 */
              white-space: nowrap;
              /* 保持文本在一行内显示 */
              text-overflow: ellipsis;
              /* 超出部分显示省略号 */
            }

            .icon {
              width: 4vw;
              height: 4vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              color: #969798;
            }
          }

        }
      }

      .annotation {
        width: 100%;
        box-sizing: border-box;
        padding: 5vw 0 3vw 0;
        text-align: center;
        font-size: 3vw;
        color: #848484;
      }

      .more-but {
        width: calc(100%);
        display: block;
        box-sizing: border-box;
        background-color: #fff;
        padding: 4vw;
        display: flex;
        justify-content: center;

        .phone-service {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 3vw;
          border: 1px solid #cccccc;
          border-radius: 6vw;
          font-size: 3.5vw;
          color: #000;
          background-color: #fff;

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-right: 2vw;
          }

        }

        .line-service {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 3vw;
          border: 1px solid #cccccc;
          border-radius: 6vw;
          font-size: 3.5vw;
          color: #fff;
          background-color: #478ef7;

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-right: 2vw;
          }
        }
      }

    }
  }
</style>