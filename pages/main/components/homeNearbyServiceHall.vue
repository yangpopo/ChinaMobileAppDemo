<template>
  <view class="main">
    <!-- 背景 -->
    <view class="main-bg"></view>
    <view class="service-hall">
      <view class="head">
        <view class="title">北培营业厅</view>
        <view class="more">更多></view>
      </view>
      <view class="service-hall-info">
        <image class="service-hall-cover" src="/assets/image/home/service-hall-cover.webp" mode="widthFix"></image>
        <view class="info-data">
          <view class="address">重庆市北碚区中山路139号</view>
          <view class="time">营业时间:08:30-19:00</view>
        </view>
      </view>

      <view class="business-list">
        <view class="title">业务范围:</view>
        <view class="item">宽带业务</view>
        <view class="item">套餐受理</view>
        <view class="item">查询业务</view>
        <svg class="icon-more" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="64259">
          <path
            d="M751.552 551.936l-399.232 399.232c-22.080 22.080-57.792 22.080-79.872 0-22.016-22.016-22.080-57.792 0-79.872l359.296-359.296-359.296-359.296c-22.016-22.016-22.080-57.792 0-79.872s57.792-22.016 79.872 0l399.232 399.232c22.016 22.080 22.016 57.792 0 79.872z"
            p-id="64260"></path>
        </svg>
      </view>

      <view class="contact-way">
        <view class="contact-way-item"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="65672">
            <path
              d="M733.76 960 733.76 960l-4.352 0c-102.4-5.376-240.704-106.752-370.112-270.976L311.552 628.736C182.144 464.512 114.368 304.064 130.304 199.744 141.44 126.144 245.696 64 305.28 64c29.312 0 40 15.296 43.84 24.512C382.592 151.552 424.32 260.928 424.64 300.16l0 2.752L423.68 305.536C416.192 326.144 399.616 336 384.896 344.768 365.504 356.288 354.56 363.776 353.152 385.472 352.832 392 358.208 422.016 443.52 532.352L480 578.624c85.632 106.112 112.512 117.504 118.72 118.4 20.672 3.136 30.528-6.144 45.312-23.36 11.264-13.248 24.064-27.904 45.12-31.104l2.816-0.512 2.56 0.896c37.376 8 132.48 72.512 186.88 120.512 7.68 5.376 21.312 21.632 10.56 57.28C875.072 876.736 801.28 960 733.76 960L733.76 960z"
              p-id="65673"></path>
          </svg>电话联系</view>
        <view class="contact-way-item"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="66425">
            <path d="M894.185422 128.023792 129.814578 445.743994 445.99982 577.744353 571.860343 893.929596Z"
              p-id="66426"></path>
          </svg>导航到店</view>
      </view>
    </view>

    <view class="service-box">
      <view class="service-item">
        <image class="icon" src="/assets/image/home/service-icon-01.webp" mode="widthFix"></image>
        <view class="name">天天神券</view>
      </view>
      <view class="service-item">
        <image class="icon" src="/assets/image/home/service-icon-02.webp" mode="widthFix"></image>
        <view class="name">积分兑换</view>
      </view>
      <view class="service-item">
        <image class="icon" src="/assets/image/home/service-icon-03.webp" mode="widthFix"></image>
        <view class="name">装宽带</view>
      </view>
      <view class="service-item">
        <image class="icon" src="/assets/image/home/service-icon-04.webp" mode="widthFix"></image>
        <view class="name">微信客服</view>
      </view>
      <view class="service-item">
        <image class="icon" src="/assets/image/home/service-icon-05.webp" mode="widthFix"></image>
        <view class="name">查网龄</view>
      </view>
    </view>
    
    <view class="hot-recommend">热门推荐</view>
    <view class="hot-recommend-box">
      <view class="left-box">
        <view class="title">20GB爆款任你选</view>
        <view class="subhead">仅需1元畅享优惠</view>
        <image class="icon" src="/assets/image/home/hot-recommend-icon-01.webp" mode="widthFix"></image>
      </view>
      <view class="right-box">
        <view class="hot-recommend-item">
          <view class="title">月月领3元话费券+1GB</view>
          <image class="icon" src="/assets/image/home/hot-recommend-icon-02.webp" mode="widthFix"></image>
        </view>
        <view class="hot-recommend-item">
          <view class="title">7元10GB<text>浏览拼着买</text></view>
          <image class="icon" src="/assets/image/home/hot-recommend-icon-03.webp" mode="widthFix"></image>
        </view>
      </view>
    </view>

    <!-- 热卖手机 -->
    <view class="hot-phone">
      热卖手机
    </view>
    <view class="hot-phone-list">
      <view class="hot-phone-item">
        <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
        <view class="title">iPhone</view>
        <view class="subhead">移动正品保障</view>
        <view class="price">¥5454起</view>
      </view>
      <view class="hot-phone-item">
        <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
        <view class="title">iPhone</view>
        <view class="subhead">荣耀专区</view>
        <view class="price">¥5454起</view>
      </view>
      <view class="hot-phone-item">
        <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
        <view class="title">iPhone</view>
        <view class="subhead">OPPO专区</view>
        <view class="price">¥5454起</view>
      </view>
    </view>
  
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
    background-color: #fff;

    .main-bg {
      width: 100vw;
      height: 60vw;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(0deg, #4e9cfe, #3e62f5);
      z-index: 0;
      border-radius: 0 0 100% 100%;
    }

    .service-hall {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw;
      border-radius: 2vw;
      background-image: linear-gradient(-180deg, #e1e9fd, #ffffff);
      box-shadow: 0 0.2vw 1vw #e9e9e9;
      position: relative;
      z-index: 1;
      margin-bottom: 3vw;

      .head {
        width: 100%;
        box-sizing: border-box;
        padding: 1vw 0;
        margin-bottom: 2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
          font-size: 4.5vw;
          font-weight: bold;
          color: #000000;
        }

        .more {
          font-size: 3vw;
          color: #5f6065;
        }
      }

      .service-hall-info {
        width: 100%;
        display: flex;
        margin-bottom: 2vw;

        .service-hall-cover {
          width: 30vw;
          height: 30vw;
          border-radius: 2vw;
          margin-right: 2vw;
          flex-shrink: 0;
        }

        .info-data {
          width: 100%;
          box-sizing: border-box;
          padding: 2vw 0;

          .address {
            width: 100%;
            font-size: 4vw;
            color: #000000;
          }

          .time {
            width: 100%;
            font-size: 3.5vw;
            color: #666666;
          }
        }
      }

      .business-list {
        width: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-right: 15vw;
        color: #666666;
        position: relative;
        margin-bottom: 3vw;

        .title {
          font-size: 3.5vw;
        }

        .item {
          font-size: 3vw;
          box-sizing: border-box;
          padding: 1vw 1.5vw;
          border-radius: 2vw;
          border: 1px solid #f0f0f0;
          margin: 0 1vw;
          background-color: #fff;
        }

        .icon-more {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 2vw;
          width: 3.5vw;
          height: 3.5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          color: #666666;
        }
      }

      .contact-way {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .contact-way-item {
          box-sizing: border-box;
          padding: 2vw 2vw;
          width: 40%;
          border-radius: 5vw;
          background-color: #e7f2fe;
          font-size: 4vw;
          font-weight: bold;
          color: #367cf6;
          display: flex;
          justify-content: center;
          align-items: center;

          .icon {
            width: 5vw;
            height: 5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-right: 1vw;
          }
        }
      }
    }
    .service-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3vw;
      .service-item {
        .icon {
          width: 11vw;
          height: 11vw;
          display: block;
          margin: 0 auto 2vw auto;
        }
        .name {
          width: 100%;
          text-align: center;
          font-size: 3.4vw;
          color: #000000;
        }
      }
    }
    .hot-recommend {
      width: 100%;
      font-size: 4.5vw;
      font-weight: bold;
      color: #000000;
      margin-bottom: 2vw;
    }
    .hot-recommend-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3vw;
      .left-box {
        width: calc(50% - 1.5vw);
        box-sizing: border-box;
        padding: 5vw 3vw;
        background-color: #fff;
        border-radius: 2vw;
        box-shadow: 0vw 0.25vw 1vw #e9e9e9;
        flex-shrink: 0;
        .title {
          width: 100%;
          font-size: 4.5vw;
          font-weight: bold;
          color: #000;
          text-align: center;
          margin-bottom: 1vw;
        }
        .subhead {
          width: 100%;
          font-size: 3.2vw;
          color: #666666;
          text-align: center;
          margin-bottom: 3vw;
        }
        .icon {
          width: 95%;
          display: block;
          margin: 5vw auto 0 auto;
        }
      }
      .right-box {
        width: calc(50% - 1.5vw);
        .hot-recommend-item {
          width: 100%;
          box-sizing: border-box;
          padding: 2vw;
          background-color: #fff;
          border-radius: 2vw;
          box-shadow: 0vw 0.25vw 1vw #e9e9e9;
          &:nth-child(1) {
            margin-bottom: 3vw;
            background-image: linear-gradient(-180deg, #f7cfce 0%, #fff 30%);
          }
          &:nth-child(2) {
            background-image: linear-gradient(-180deg, #fcefd0 0%, #fff 30%);
          }
          .title {
            width: 100%;
            font-size: 3.5vw;
            font-weight: bold;
            color: #000;
            text-align: center;
            margin-bottom: 2vw;
          }
          .icon {
            width: 60%;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
    .hot-phone {
      width: 100%;
      font-size: 4.5vw;
      font-weight: bold;
      color: #000000;
      margin-bottom: 2vw;
    }
    .hot-phone-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3vw;
      .hot-phone-item {
        width: calc(33.33% - 2vw);
        background-color: #fff;
        border-radius: 2vw;
        box-shadow: 0vw 0.25vw 1vw #e9e9e9;
        box-sizing: border-box;
        padding: 2vw 3vw;
        .cover {
          width: 100%;
          margin-bottom: 1vw;
        }
        .title {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #000;
          text-align: center;
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 隐藏超出的内容 */
          text-overflow: ellipsis; /* 用省略号表示被隐藏的部分 */
          margin-bottom: 1vw;
        }
        .subhead {
          width: 100%;
          font-size: 3vw;
          color: #ea3323;
          text-align: center;
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 隐藏超出的内容 */
          text-overflow: ellipsis; /* 用省略号表示被隐藏的部分 */
          margin-bottom: 1vw;
        }
        .price {
          width: 100%;
          box-sizing: border-box;
          padding: 1.5vw 1vw;
          font-size: 3.5vw;
          color: #fff;
          border-radius: 5vw;
          background-image: linear-gradient(-90deg, #e64c3a, #f1ad7b);
          text-align: center;
        }
      }
    }
  }
</style>