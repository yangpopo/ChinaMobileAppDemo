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
      <view class="title">卡券详情</view>
    </uni-nav-bar>

    <scroll-view :scroll-y="true" :show-scrollbar="false" class="scroll-main">
      <view class="main">
        <view class="coupon-info">
          <view class="head">
            <view class="left">
              <view class="cover">
                <image class="cover-img" src="/assets/image/coupon/ticket-type-icon-01.png" mode="widthFix"></image>
              </view>
              <view class="name">8GB+黄金会员</view>
            </view>
            <view class="right">
              <view class="type">专享券</view>
            </view>
          </view>
          <view class="detail-list">
            <view class="detail-item">
              <view class="titel">券类型:</view>
              <view class="explain">业务券</view>
            </view>
            <view class="detail-item">
              <view class="titel">券详情:</view>
              <view class="explain">享3元话费券</view>
            </view>
            <view class="detail-item">
              <view class="titel">有效期:</view>
              <view class="explain">2025.03.01 09:00至2025.03.30 23:59</view>
            </view>
            <view class="detail-item">
              <view class="titel">券来源:</view>
              <view class="explain">周三充值专场</view>
            </view>
          </view>
        </view>


        <view class="explain-box">
          <view class="title">使用说明</view>
          <view class="explain-detail">
            1.该卡券限在中国移动APP进行使用<br />
            2.阿萨德噶多少噶是的发的鬼地方APP进行使用<br />
            3.发给就让我特然vAPP进行使用<br />
            4.额冠军飞将而我同行业染发APP进行使用<br />
            5.待发货单方事故APP进行使用<br />
            6.发给交通工具我让他鸡儿二天涯惹他惹他玩儿若APP进行使用
          </view>
        </view>

        <view class="footer-box">
          <view class="go-but">去使用</view>
        </view>

      </view>
    </scroll-view>



  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'




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
      background-color: #f4f4f4;
    }

    .main {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 0 10vw 0;

      .coupon-info {
        width: calc(100% - 6vw);
        margin: 0 auto 3vw auto;
        box-sizing: border-box;
        padding: 3vw;
        border-radius: 3vw;
        background-color: #fff;
        margin-bottom: 3vw;

        .head {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3vw;

          .left {
            display: flex;
            align-items: center;

            .cover {
              width: 15vw;
              height: 15vw;
              overflow: hidden;
              border-radius: 2vw;
              margin-right: 2vw;

              .cover-img {
                width: 100%;
                height: 100%;
              }
            }

            .name {
              font-size: 3.6vw;
              font-weight: bold;
              color: #000;
            }
          }

          .right {
            .type {
              font-size: 4vw;
              font-weight: bold;
              color: #e15d46;
            }
          }
        }

        .detail-list {
          width: 100%;
          box-sizing: border-box;
          padding: 3vw;
          border-radius: 2vw;
          background-color: #fafafa;

          .detail-item {
            width: 100%;
            display: flex;
            font-size: 3.5vw;
            box-sizing: border-box;
            padding: 2vw 0;

            .titel {
              color: #333333;
              font-weight: bold;
              margin-right: 3vw;
              flex-shrink: 0;
            }

            .explain {
              color: #666666;
            }
          }
        }

      }

      .explain-box {
        width: calc(100% - 6vw);
        margin: 0 auto;
        background-color: #fff;
        box-sizing: border-box;
        padding: 5vw;
        border-radius: 3vw;

        .title {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #000000;
          margin-bottom: 3vw;
        }

        .explain-detail {
          font-size: 3.5vw;
          line-height: 5.5vw;
          color: #666666;

        }
      }

      .footer-box{
        width: 100%;
        background-color: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 3vw 3vw 10vw 3vw;
        box-sizing: border-box;
        .go-but {
          width: 100%;
          background-color: #3a84f7;
          box-sizing: border-box;
          padding: 3vw;
          text-align: center;
          font-size: 4vw;
          font-weight: bold;
          color: #fff;
          border-radius: 5vw;
        }
      }




    }




  }
</style>