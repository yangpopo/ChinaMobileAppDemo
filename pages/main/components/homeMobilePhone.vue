<template>
  <view class="main">
    <!-- 背景 -->
    <view class="main-bg"></view>
    <swiper class="cover-ad" :autoplay="true" :indicator-dots="true" :interval="3000"
      indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 1)">
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.png" mode="widthFix"></image>
      </swiper-item>
    </swiper>

    <view class="menu-list">
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-pingguo.png" mode="widthFix"></image>
        <view class="name">iPhone</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-hongmeng.png" mode="widthFix"></image>
        <view class="name">荣耀</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-xiaomi.png" mode="widthFix"></image>
        <view class="name">小米</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-oppo.png" mode="widthFix"></image>
        <view class="name">oppo</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-vivo.png" mode="widthFix"></image>
        <view class="name">vivo</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-mobile-phone.png" mode="widthFix"></image>
        <view class="name">购机直降</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-mianfei.png" mode="widthFix"></image>
        <view class="name">分期免息</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-huawei.png" mode="widthFix"></image>
        <view class="name">华为</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-shouji.png" mode="widthFix"></image>
        <view class="name">千元专区</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-ai.png" mode="widthFix"></image>
        <view class="name">智能硬件</view>
      </view>
    </view>

    <!-- 新品日历 -->
    <view class="new-product">
      <view class="head">
        <view class="title">新品日历</view>
        <view class="more">更多></view>
      </view>
      <scroll-view class="product-box" :scroll-x="true">
        <view class="container">
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
        </view>
      </scroll-view>
    </view>
    
    <view class="hot-activity">
      <image class="left-box" src="/assets/image/home/hot-activity-01.png" mode="widthFix"></image>
      <view class="right-box">
        <view class="title">
          0元送60GB+会员全家桶
        </view>
        <view class="content">
          <view class="content-item">
            <view class="item-container">
              <image class="cover" src="/assets/image/home/phone-brand-cover.png" mode="widthFix"></image>
              <view class="content">免息购机</view>
              <view class="title">专享特惠</view>
            </view>
            
          </view>
        </view>
      </view>
    </view>
    
    
    

  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    box-sizing: border-box;
    padding: 3vw;
    background-color: #fafafa;

    .main-bg {
      width: 100vw;
      height: 29vw;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #4e9cfe;
      z-index: 0;
    }

    .cover-ad {
      width: 100%;
      height: 35vw;
      margin-bottom: 3vw;

      .cover-item {
        width: 100%;
      }
    }

    .menu-list {
      width: 100%;
      box-sizing: border-box;
      padding: 2vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .menu-item {
        width: 20%;
        margin-bottom: 5vw;

        .icon {
          display: block;
          width: 8vw;
          height: 8vw;
          margin: 0 auto 2vw auto;
        }

        .name {
          width: 100%;
          text-align: center;
          font-size: 3.5vw;
          color: #000;
        }
      }
    }

    .new-product {
      width: 100%;
      box-sizing: border-box;
      padding: 2vw 3vw;
      border-radius: 2vw;
      background-color: #fff;
      margin-bottom: 3vw;

      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vw;

        .title {
          font-size: 4vw;
          font-weight: bold;
          color: #000000;
        }

        .more {
          font-size: 3.5vw;
          color: #c0bfbf;
        }
      }

      .product-box {
        width: 100%;
        .container {
          width: auto;
          display: flex;
          .item {
            width: 26vw;
            flex-shrink: 0;
            margin: 0 1vw;
            background-color: #f9f9f9;
            border-radius: 2vw;
          
            .cover {
              width: 100%;
              height: 26vw;
              position: relative;
          
              .cover-img {
                width: 100%;
                position: relative;
                z-index: 0;
              }
              .tag {
                position: absolute;
                z-index: 1;
                background-color: #60cc70;
                font-size: 3vw;
                color: #fff;
                box-sizing: border-box;
                padding: 0.5vw 1.5vw;
                border-radius: 2vw 0 2vw 0;
                top: 0;
                left: 0;
              }
              .info {
                width: 95%;
                position: absolute;
                z-index: 1;
                background-color: #ef4d4d;
                font-size: 3vw;
                text-align: center;
                color: #fff;
                box-sizing: border-box;
                padding: 0.5vw 1.5vw;
                border-radius: 0 2vw 0 0;
                left: 0;
                bottom: 0;
              }
            }
            .brand {
              width: 100%;
              box-sizing: border-box;
              padding: 1.5vw 1vw;
              font-size: 3.5vw;
              text-align: center;
              color: #313232;
            }
          }
        }
      }
    }
    .hot-activity {
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-radius: 2vw;
      .left-box {
        width: 50%;
      }
      .right-box {
        width: 50%;
        box-sizing: border-box;
        padding: 2vw;
        >.title {
          width: 100%;
          font-size: 3.5vw;
          font-weight: bold;
          margin-bottom: 2vw;
        }
        >.content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          
          .content-item {
            background-color: #f6f6f6;
            border-radius: 2vw;
            width: 45%;
            .item-container {
              background-color: #fff;
              border-radius: 4vw;
              position: relative;
              .cover {
                width: 100%;
              }
              .content {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                padding: 1vw 2vw;
                background-color: rgba(0, 0, 0, 0.8);
                color: #fff;
                width: 100%;
                font-size: 3.5vw;
                font-weight: bold;
                text-align: center;
                border-radius: 5vw;
                box-sizing: border-box;
              }
              .title {
                width: 100%;
                text-align: center;
                font-size: 3.5vw;
                color: #eb5839;
              }
            }
          }
        }
      }
    }
    
    
    
    
  }
</style>