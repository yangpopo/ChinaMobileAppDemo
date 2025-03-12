<template>
  <scroll-view class="equities" scroll-y="true">
    <view class="nav-bar-box" :style="{'padding-bottom': isShowHintInfo ? '2vw' : '0vw'}">
      <uni-nav-bar class="nav-bar" :border="false" backgroundColor="#4a90f7">
        <view slot="left" @click="returnNextPage" class="left">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
            <path
              d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
              p-id="59073"></path>
          </svg>
        </view>
        <view class="title">中国移动权益超市</view>
        <view class="right" slot="right">
          <svg class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="61156">
            <path
              d="M115.479782 1024A115.536809 115.536809 0 0 1 0 908.520218V335.284284a115.479782 115.479782 0 0 1 115.536809-115.479782H280.5731L489.805356 10.686299a34.216232 34.216232 0 0 1 7.014328-5.702705 35.470827 35.470827 0 0 1 32.790555-1.710811l1.596758 0.741351 2.566217 1.482704 0.627297 0.399189a38.436234 38.436234 0 0 1 3.991894 3.079461l1.425676 1.311622 209.17523 209.118203h161.899803A115.479782 115.479782 0 0 1 1026.48695 335.284284v573.12188a115.479782 115.479782 0 0 1-115.479782 115.479782z m-41.059478-681.758416v555.899711a50.297861 50.297861 0 0 0 50.354887 50.29786H902.738245a50.297861 50.297861 0 0 0 50.297861-50.29786V342.241584a50.297861 50.297861 0 0 0-50.297861-50.29786H821.18956l50.012725 50.012725a35.470827 35.470827 0 0 1-50.126779 50.126779l-100.139505-100.139504H308.687437L208.547932 392.083228a35.470827 35.470827 0 0 1-50.126779-50.126779l50.012725-50.012725H124.832219a50.297861 50.297861 0 0 0-50.411915 50.29786z m306.349327-122.380055h268.027148L514.783205 85.904982zM263.636065 797.716655a29.254878 29.254878 0 1 1 0-57.027053h499.499955a29.254878 29.254878 0 1 1 0 57.027053z m0-228.108211a29.254878 29.254878 0 1 1 0-57.027053h499.499955a29.254878 29.254878 0 1 1 0 57.027053z"
              p-id="61157"></path>
          </svg>
          <view class="new-info"></view>
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="62588">
            <path
              d="M880.48 451.488l-14.72-64 54.96-94.976-117.6-146.464-105.28 32L637.92 149.6 597.472 48H409.248l-40.464 101.6-59.904 28.544-105.28-32.064-117.616 146.448 54.96 94.976-14.72 64-90.976 61.872 42.016 182.864 108.944 16.512 41.312 51.456-8.016 109.216 169.696 80.976L470.064 880h66.592l80.864 74.4L787.2 873.328l-8-109.168 41.296-51.424 108.96-16.496 42-182.864-90.992-61.888z m-16.816 173.808l-86 13.056-80.576 100.32 6.336 86.16-71.664 34.08L567.808 800h-128.896l-63.968 58.912-71.664-34.176 6.336-86.112-80.576-100.304-86-13.04-17.568-76.528 71.696-48.768 28.8-125.28-43.296-74.832 49.424-61.552 83.248 25.328 116.224-55.408L463.52 128h79.664l31.952 80.24 116.224 55.488 83.248-25.36 49.424 61.536-43.296 74.816 28.8 125.28 71.712 48.752-17.6 76.544zM504.88 336c-92.64 0-167.968 75.36-167.968 168s75.36 168 168 168 168-75.36 168-168S597.536 336 504.88 336z m0.032 256a88.112 88.112 0 0 1-88-88c0-23.504 9.152-45.6 25.76-62.224A87.392 87.392 0 0 1 504.928 416c48.512 0 88 39.488 88 88s-39.488 88-88 88z"
              p-id="62589"></path>
          </svg>
        </view>
      </uni-nav-bar>
      <view class="hint-info" v-if="isShowHintInfo">
        <svg class="icon-bulb" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65455">
          <path
            d="M401.048025 844.855924c0 20.341281 16.643052 36.984333 36.984333 36.984333l147.936307 0c20.341281 0 36.984333-16.643052 36.984333-36.984333L622.952998 807.872614 401.048025 807.872614 401.048025 844.855924zM512 142.159744c-142.943596 0-258.888282 115.944686-258.888282 258.888282 0 88.021729 44.011376 165.503405 110.951975 212.288964l0 83.58365c0 20.341281 16.643052 36.984333 36.984333 36.984333l221.903949 0c20.341281 0 36.984333-16.643052 36.984333-36.984333l0-83.58365c66.941622-46.784536 110.951975-124.266212 110.951975-212.288964C770.888282 258.104429 654.943596 142.159744 512 142.159744zM617.588827 552.682561l-31.621185 22.005176 0 85.248569L438.031335 659.936307l0-85.063351L406.41015 552.866756c-49.743938-34.764781-79.33079-91.350544-79.33079-151.634536 0-101.890598 83.029018-184.92064 184.92064-184.92064s184.92064 83.029018 184.92064 184.92064C696.919617 461.332017 667.332764 517.91778 617.588827 552.682561z"
            p-id="65456"></path>
        </svg>
        <view class="info-content">
          开启消息通知,专属提醒不错过!
        </view>
        <view class="operate-but">去开启</view>
        <svg class="icon-close" @click="switchHintInfoShow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="66084">
          <path
            d="M874.666667 791.466667L571.733333 490.666667 874.666667 189.866667c17.066667-17.066667 17.066667-44.8 0-59.733334-17.066667-17.066667-44.8-17.066667-59.733334 0L512 430.933333 211.2 128c-17.066667-14.933333-44.8-14.933333-61.866667 0s-14.933333 44.8 0 61.866667L452.266667 490.666667 149.333333 791.466667c-17.066667 17.066667-17.066667 44.8 0 59.733333 17.066667 17.066667 44.8 17.066667 59.733334 0L512 550.4 812.8 853.333333c17.066667 17.066667 44.8 17.066667 59.733333 0 17.066667-17.066667 17.066667-44.8 2.133334-61.866666z"
            p-id="66085"></path>
        </svg>
      </view>
    </view>


    <view class="main">
      <!-- 消息列表 -->
      <view class="general-info-list">
        <view class="info-item" v-for="item in 5" :key="item">
          <view class="head-portrait">
            <image class="img" src="/static/image/ai-head-portrait.png" mode="widthFix"></image>
            <view class="new-info"></view>
          </view>
          <view class="content">
            <view class="title">服务消息</view>
            <view class="info-content">消息内容消息内容消息内容消息内容消息内容消息内容</view>
          </view>
          <view class="time">03-12</view>
        </view>
      </view>

      <!-- 促销信息列表 -->
      <view class="promotion-info-list">
        <view class="info-item" v-for="item in 5" :key="item">
          <view class="head-portrait">
            <image class="img" src="/assets/image/messageCenter/info-icon.png" mode="widthFix"></image>
            <view class="new-info"></view>
          </view>
          <view class="content">
            <view class="title">服务消息</view>
            <view class="info-content">消息内容消息内容消息内容消息内容消息内容消息内容</view>
          </view>
          <view class="time">03-12</view>
        </view>
      </view>



    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue'

  const isShowHintInfo = ref(true) // 是否显示提示信息
  
  /**
   * 切换提示信息显示状态
*/
  const switchHintInfoShow = () => {
    isShowHintInfo.value = !isShowHintInfo.value
  }


  /**
    * 返回上一页
   */
  const returnNextPage = () => {
    uni.navigateBack({
      delta: 1
    })
  }
</script>

<style lang="scss" scoped>
  .equities {
    width: 100vw;
    height: 100vh;
    background-color: #f6f6f6;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 20vw;

    .nav-bar-box {
      width: 100%;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 99;
      background-color: #4a90f7;
      box-sizing: border-box;

      .nav-bar {
        width: 100%;

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
          color: #fff;

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          }
        }

        .title {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 4vw;
          font-weight: bold;
          color: #fff;
        }

        .right {
          display: flex;
          align-items: center;
          color: #fff;
          position: absolute;
          top: 50%;
          right: 3vw;
          transform: translateY(-50%);

          .new-info {
            width: 1.8vw;
            height: 1.8vw;
            border-radius: 50%;
            background-color: #d95c26;
            border: 1px solid #fff;
            position: absolute;
            top: -0.5vw;
            left: 5.6vw;
          }

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-left: 2vw;
          }
        }
      }

      .hint-info {
        width: 90%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 2vw;
        border-radius: 2vw;
        background-color: #f5f9fe;
        display: flex;
        align-items: center;
        position: relative;

        .icon-bulb {
          width: 6vw;
          height: 6vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-right: 1vw;
          color: #4a90f7;
        }

        .info-content {
          font-size: 3.5vw;
          color: #333333;
          margin-right: 1.5vw;
        }

        .operate-but {
          display: block;
          box-sizing: border-box;
          padding: 0.5vw 1.5vw;
          font-size: 3.2vw;
          border: 1px solid #4a90f7;
          border-radius: 5vw;
          color: #4a90f7;
        }

        .icon-close {
          position: absolute;
          top: 50%;
          right: 3vw;
          transform: translateY(-50%);
          width: 4vw;
          height: 4vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          color: #999999;
        }
      }
    }

    .main {
      width: 100%;
      box-sizing: border-box;

      .general-info-list {
        width: 100%;
        background-color: #fff;
        margin-bottom: 3vw;

        .info-item {
          width: 100%;
          display: flex;
          box-sizing: border-box;
          padding: 3vw;
          position: relative;

          &:last-of-type {
            &:before {
              display: none;
            }
          }

          &:before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            width: calc(100% - 12vw - 2vw);
            height: 1px;
            background-color: #e5e5e5;
          }

          .head-portrait {
            width: 12vw;
            height: 12vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 2vw;
            position: relative;

            .img {
              width: 12vw;
              height: 12vw;
              border-radius: 50%;
            }

            .new-info {
              position: absolute;
              top: 0vw;
              right: 0vw;
              width: 1.6vw;
              height: 1.6vw;
              border-radius: 50%;
              background-color: #d95c26;
              border: 1px solid #fff;
            }
          }

          .content {
            width: calc(100% - 12vw - 2vw - 12vw);
            flex-shrink: 0;

            .title {
              width: 100%;
              font-size: 3.8vw;
              font-weight: bold;
              color: #333333;
              margin-bottom: 1.5vw;
            }

            .info-content {
              width: 100%;
              font-size: 3.2vw;
              color: #999999;
              margin-bottom: 2vw;
              overflow: hidden;
              /* 超出部分隐藏 */
              white-space: nowrap;
              /* 保持文本在一行内显示 */
              text-overflow: ellipsis;
              /* 超出部分显示省略号 */
            }
          }

          .time {
            width: 100%;
            font-size: 3vw;
            color: #bbbbbb;
            text-align: right;
          }

        }
      }


      .promotion-info-list {
        width: 100%;
        background-color: #fff;
        margin-bottom: 3vw;

        .info-item {
          width: 100%;
          display: flex;
          box-sizing: border-box;
          padding: 3vw;
          position: relative;

          &:last-of-type {
            &:before {
              display: none;
            }
          }

          &:before {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
            width: calc(100% - 12vw - 2vw);
            height: 1px;
            background-color: #e5e5e5;
          }

          .head-portrait {
            width: 12vw;
            height: 12vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            margin-right: 2vw;
            position: relative;

            .img {
              width: 12vw;
              height: 12vw;
              border-radius: 2vw;
            }

            .new-info {
              position: absolute;
              top: 0vw;
              right: 0vw;
              width: 1.6vw;
              height: 1.6vw;
              border-radius: 50%;
              background-color: #d95c26;
              border: 1px solid #fff;
            }
          }

          .content {
            width: calc(100% - 12vw - 2vw - 12vw);
            flex-shrink: 0;

            .title {
              width: 100%;
              font-size: 3.8vw;
              font-weight: bold;
              color: #333333;
              margin-bottom: 1.5vw;
            }

            .info-content {
              width: 100%;
              font-size: 3.2vw;
              color: #999999;
              margin-bottom: 2vw;
              overflow: hidden;
              /* 超出部分隐藏 */
              white-space: nowrap;
              /* 保持文本在一行内显示 */
              text-overflow: ellipsis;
              /* 超出部分显示省略号 */
            }
          }

          .time {
            width: 100%;
            font-size: 3vw;
            color: #bbbbbb;
            text-align: right;
          }

        }
      }





    }


  }
</style>