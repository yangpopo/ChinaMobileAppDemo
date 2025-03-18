<template>
  <view class="main">
    <!-- 背景 -->
    <view class="main-bg"></view>
    <swiper class="cover-ad" :autoplay="true" :indicator-dots="true" :interval="3000" :circular="true"
      indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 1)">
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.webp" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.webp" mode="widthFix"></image>
      </swiper-item>
      <swiper-item>
        <image class="cover-item" src="/assets/image/home/mobile-phone-ad.webp" mode="widthFix"></image>
      </swiper-item>
    </swiper>

    <view class="menu-list">
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-pingguo.webp" mode="widthFix"></image>
        <view class="name">iPhone</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-hongmeng.webp" mode="widthFix"></image>
        <view class="name">荣耀</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-xiaomi.webp" mode="widthFix"></image>
        <view class="name">小米</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-oppo.webp" mode="widthFix"></image>
        <view class="name">oppo</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-vivo.webp" mode="widthFix"></image>
        <view class="name">vivo</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-mobile-phone.webp" mode="widthFix"></image>
        <view class="name">购机直降</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-mianfei.webp" mode="widthFix"></image>
        <view class="name">分期免息</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-huawei.webp" mode="widthFix"></image>
        <view class="name">华为</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-shouji.webp" mode="widthFix"></image>
        <view class="name">千元专区</view>
      </view>
      <view class="menu-item">
        <image class="icon" src="/assets/image/home/brand-ai.webp" mode="widthFix"></image>
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
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
          <view class="item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="tag">上新</view>
              <view class="info">至高24期免息</view>
            </view>
            <view class="brand">iPhone 16e</view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="hot-activity">
      <image class="left-box" src="/assets/image/home/hot-activity-01.webp" mode="widthFix"></image>
      <view class="right-box">
        <view class="title">
          0元送60GB+会员全家桶
        </view>
        <view class="content">
          <view class="content-item">
            <view class="item-container">
              <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="content">免息购机</view>
              <view class="title">专享特惠</view>
            </view>
          </view>
          <view class="content-item">
            <view class="item-container">
              <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
              <view class="content">免息购机</view>
              <view class="title">专享特惠</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="hot-commodity">
      <image class="left-commodity" src="/assets/image/home/hot-commodity-01.webp" mode="widthFix"></image>
      <view class="right-commodity">
        <image class="right-item" src="/assets/image/home/hot-commodity-02.webp" mode="widthFix"></image>
        <image class="right-item" src="/assets/image/home/hot-commodity-03.webp" mode="widthFix"></image>
      </view>
    </view>

    <!-- 移动优选 -->
    <view class="move-optimization">
      <view class="title">移动优选</view>
      <view class="screen-condition">
        <view class="screen-01">
          <view class="item" :class="{'selected': queryCondition == 'all'}" @click="updateQueryCondition('all')">综合</view>
          <view class="item" :class="{'selected': queryCondition == 'sales'}" @click="updateQueryCondition('sales')">销量</view>
          <view class="item" :class="{'selected': queryCondition == 'price'}" @click="updateQueryCondition('price')">价格<svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="55047"><path d="M547.072 103.68a42.666667 42.666667 0 0 0-70.144 0l-192 277.333333A42.666667 42.666667 0 0 0 320 448h384a42.666667 42.666667 0 0 0 35.072-66.986667l-192-277.333333zM320 576a42.666667 42.666667 0 0 0-35.072 66.986667l192 277.333333a42.666667 42.666667 0 0 0 70.144 0l192-277.333333a42.666667 42.666667 0 0 0-35.072-66.986667h-384z" fill="#000000" p-id="55048"></path></svg></view>
        </view>
        <scroll-view :show-scrollbar="false" class="screen-02" :scroll-x="true">
          <view class="container">
            <view class="item">iPhone</view>
            <view class="item">荣耀</view>
            <view class="item">OPPO</view>
            <view class="item">小米</view>
            <view class="item">vivo</view>
          </view>
        </scroll-view>
      </view>
    </view>
    
    <!-- 商品列表 -->
    <view class="commodity-list">
      <view class="commodity-item" v-for="index in 10" :key="index">
        <image class="cover" src="/assets/image/home/phone-brand-cover.webp" mode="widthFix"></image>
        <view class="name">
          小米15
        </view>
        <view class="buy-but">
          <view class="price">
             ¥<text class="val">545</text>起
          </view>
        </view>
      </view>
    </view>



  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  
  const queryCondition = ref('all') // 查询条件
  /*
  * 更新查询条件
  */
  const updateQueryCondition = (val: string) => {
    queryCondition.value = val
  }
  
  
  
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 3vw;
    background-color: #fafafa;
    // position: relative;

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
      margin-bottom: 3vw;

      .left-box {
        width: 50%;
      }

      .right-box {
        width: 50%;
        box-sizing: border-box;
        padding: 2vw 2vw 0 2vw;

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
            width: 46.5%;

            .item-container {
              background-color: #fff;
              border-radius: 4vw;
              position: relative;
              box-sizing: border-box;
              padding: 2vw;

              .cover {
                width: 100%;
                margin-bottom: 4vw;
              }

              .content {
                position: absolute;
                top: 15vw;
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
    
    .hot-commodity {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      position: relative;
      padding: 3vw;
      background-color: #fff;
      border-radius: 2vw;
      margin-bottom: 3vw;
      &:before {
        content: '';
        width: 1px;
        height: calc(100%);
        background-color: #ebeaeb;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
      .left-commodity {
        width: 48%;
        flex-shrink: 0;
      }
      .right-commodity {
        width: 48%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        &:before {
          content: '';
          width: 100%;
          height: 1px;
          background-color: #ebeaeb;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 1;
        }
        .right-item {
          width: 100%;
        }
      }
    }
    .move-optimization {
      position: sticky;
      top: 27.5vw;
      z-index: 2;
      margin-bottom: 3vw;
      background-color: #fff;
      border-radius: 2vw;
      .title {
        font-size: 4.5vw;
        font-weight: bold;
        color: #323333;
        position: relative;
        box-sizing: border-box;
        padding: 3vw 2vw 2vw 2vw;
        // margin-bottom: 2vw;
        &:before {
          content: '';
          width: 10vw;
          height: 1vw;
          border-radius: 3vw;
          background-color: #3e86f7;
          position: absolute;
          bottom: 0;
          left: 6.4%;
          transform: translateY(-50%);
          z-index: 1;
        }
      }
      .screen-condition {
        box-sizing: border-box;
        padding: 3vw;
        background-color: #fff;
        border-radius: 2vw;
        .screen-01 {
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 2vw;
          .item {
            font-size: 3.5vw;
            color: #333333;
            display: flex;
            justify-content: center;
            align-items: center;
            &.selected {
              color: #4a90f7;
              font-weight: bold;
            }
          }
        }
        .screen-02 {
          width: 100%;
          .container {
            width: auto;
            display: flex;
            .item {
              flex-shrink: 0;
              box-sizing: border-box;
              padding: 1.5vw 3.5vw;
              background-color: #f6f6f6;
              border-radius: 4vw;
              font-size: 3.5vw;
              color: #333333;
              margin-right: 4vw;
            }
          }
        }
      }
    }
    .commodity-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .commodity-item {
        width: 49%;
        box-sizing: border-box;
        background-color: #fff;
        padding: 2vw;
        border-radius: 3vw;
        margin-bottom: 2vw;
        .cover {
          width: 100%;
          margin-bottom: 2vw;
        }
        .name {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #000;
          text-align: center;
          margin-bottom: 2vw;
        }
        .buy-but {
          background-image: url('/assets/image/home/buy-but.webp');
          background-size: 100% 100%;
          width: 41.9vw;
          height: 10vw;
          position: relative;
          .price {
            position: absolute;
            top: 50%;
            left: 34%;
            transform: translate(-50%, -50%);
            font-size: 3vw;
            color: #fff;
            .val{
              font-size: 4vw;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>