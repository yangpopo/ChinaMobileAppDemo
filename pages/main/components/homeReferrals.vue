<template>
  <view class="main">
    <!-- 背景 -->
    <view class="main-bg"></view>
    <view class="type-nav">
      <view class="type-nav-item" @click="skipPage('/pages/coupon/myCoupon')">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36903">
          <path d="M0 0h1024v1024H0z" opacity=".01" p-id="36904"></path>
          <path
            d="M68.266667 204.8a102.4 102.4 0 0 1 102.4-102.4h682.666666a102.4 102.4 0 0 1 102.4 102.4v546.133333a170.666667 170.666667 0 0 1-170.666666 170.666667H238.933333a170.666667 170.666667 0 0 1-170.666666-170.666667V204.8z m68.266666 238.933333v307.2a102.4 102.4 0 0 0 102.4 102.4h546.133334a102.4 102.4 0 0 0 102.4-102.4v-307.2h-204.765867a4.881067 4.881067 0 0 0-1.3312 0.955734 15.086933 15.086933 0 0 0-3.959467 7.133866 170.734933 170.734933 0 0 1-330.820266 0 15.086933 15.086933 0 0 0-3.959467-7.168A4.846933 4.846933 0 0 0 341.333333 443.733333H136.533333z m750.933334-68.266666V307.2H136.533333v68.266667h204.8c39.185067 0 64.238933 31.232 71.406934 59.4944a102.468267 102.468267 0 0 0 198.485333 0C618.427733 406.698667 643.4816 375.466667 682.666667 375.466667h204.8z m0-170.666667a34.133333 34.133333 0 0 0-34.133334-34.133333H170.666667a34.133333 34.133333 0 0 0-34.133334 34.133333v34.133333h750.933334V204.8z"
            p-id="36905"></path>
        </svg>
        我的卡券
      </view>
      <view class="type-nav-item" @click="skipPage('/pages/voucherCenter/index')">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38512">
          <path
            d="M643.328 568.32h-93.5424v-52.6848h93.5424a30.72 30.72 0 0 0 0-61.44h-56.32l62.6176-71.3728a30.72 30.72 0 1 0-46.08-40.5504l-84.48 96.0512-84.2752-96.0512a30.72 30.72 0 0 0-46.08 40.5504l62.5152 71.3728h-56.32a30.72 30.72 0 0 0 0 61.44h93.44V568.32H394.8032a30.72 30.72 0 0 0 0 61.44h93.5424v54.784a30.72 30.72 0 0 0 61.44 0V629.76h93.5424a30.72 30.72 0 0 0 0-61.44z"
            p-id="38513"></path>
          <path
            d="M861.5936 927.8976h-352.768a414.3104 414.3104 0 1 1 379.904-248.4224 30.72 30.72 0 1 1-56.32-24.6272 353.28 353.28 0 1 0-323.6352 211.6096h278.6816l-83.5584-83.5584a30.72 30.72 0 0 1 43.4176-43.4176L883.3536 875.52a30.72 30.72 0 0 1-21.76 52.4288z"
            p-id="38514"></path>
        </svg>
        充值·缴费
      </view>
      <view class="type-nav-item" @click="skipPage('/pages/bill/billHome')">
        <svg class="icon" viewBox="0 0 1264 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40040">
          <path
            d="M195.549257 571.605519a45.126752 45.126752 0 0 1 0-90.253503h300.84501a45.126752 45.126752 0 0 1 0 90.253503h-300.84501z m722.028024 391.188767a285.80276 285.80276 0 1 1 0-571.605519 285.80276 285.80276 0 0 1 0 571.605519z m0-90.253503a195.549257 195.549257 0 1 0 0-391.098513 195.549257 195.549257 0 0 0 0 391.098513zM195.549257 782.197026a45.126752 45.126752 0 0 1 0-90.253503h300.84501a45.126752 45.126752 0 0 1 0 90.253503h-300.84501z m143.77383 240.736178a44.525062 44.525062 0 0 1-45.126752-44.434808 45.126752 45.126752 0 0 1 45.126752-45.126752H619.740721a45.126752 45.126752 0 0 1 45.126751 45.126752 44.525062 44.525062 0 0 1-45.126751 44.434808h-280.447719zM196.2412 361.014012a45.156836 45.156836 0 1 1 0-90.253503h300.694588a45.156836 45.156836 0 1 1 0 90.253503H196.2412zM1173.29554 225.633758a45.126752 45.126752 0 0 1 90.253503 0v132.191297a45.126752 45.126752 0 0 1-90.253503 0V225.633758z m27.467149 145.518731c-16.937574-16.396053-27.467149-19.434588-27.467149-44.855991V150.512759a60.169002 60.169002 0 0 0-60.169002-60.169002H150.422505a60.169002 60.169002 0 0 0-60.169002 60.169002v722.689883a60.169002 60.169002 0 0 0 60.169002 60.169002h426.417718c24.39853 0 8.604167 13.598194 24.849797 29.332389l-24.849797 60.229171H150.422505c-83.063307 0-150.422505-66.667254-150.422505-149.730562V150.512759a150.422505 150.422505 0 0 1 150.422505-150.422505h962.704033a150.422505 150.422505 0 0 1 150.422505 150.422505v175.783739l-62.786354 44.855991z m-149.640308 533.30795a45.126752 45.126752 0 0 1 63.839311-63.809227l105.2055 105.2055a45.126752 45.126752 0 1 1-63.809226 63.809227l-105.235585-105.2055z"
            p-id="40041"></path>
        </svg>
        账单查询
      </view>
      <view class="type-nav-item" @click="skipPage('/pages/signIn/index')">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41211">
          <path
            d="M117.55962 401.92717h788.690103V274.780526c3.574312-51.342859-17.45613-69.691397-47.161789-69.846598h-100.225911c0 26.130009-14.094551 47.150417-38.984957 47.150417-24.927199 0-41.6682-21.020408-41.668199-47.150417H350.736167c0 26.130009-16.106147 48.497056-40.990531 48.497056-24.928537 0-40.20516-22.367047-40.20516-48.497056h-93.408427c-24.927199 0-60.962662 9.275953-58.572429 69.846598v127.146644z m856.888357-5.565839v307.471803c0.267588 171.106069-112.61191 263.540474-251.549838 263.540474H303.582405c-138.93659 0-252.045545-104.372194-251.549837-263.540474V264.571359c-3.148847-97.933347 56.304617-131.755185 125.795322-131.755186h91.13125v-43.926645c0-24.252876 15.698075-43.931998 38.833769-43.931998 23.175164 0 41.527047 19.679121 41.527047 43.931998v43.926645h327.969075v-43.926645c0-24.252876 18.551236-43.931998 41.691614-43.931998 23.175164 0 39.999117 19.679121 39.999117 43.931998v43.926645h89.672892c69.490705 0 131.36852 25.86309 125.795323 131.755186v131.789972zM118.833341 473.418767v231.955007c7.979487 108.74325 75.168263 194.566884 172.999257 194.566884h442.880239c97.832333 0 168.893782-106.373755 170.948861-194.566884V473.418767H118.833341z m21.042484 10.801207"
            p-id="41212"></path>
        </svg>
        签到领奖
      </view>
    </view>
    <image src="/assets/image/home/home-ad.png" class="home-ad" mode="widthFix" @click="skipPage('/pages/activity/topUpReturnCash')" />
    <view class="content">
      <view class="info-box">
        <view class="info-item" @click="skipPage('/pages/queryPage/marginQuery')">
          <view class="info-val">
            <view class="em">
              5.2
            </view>
            GB
          </view>
          <view class="name">
            通用流量剩余
          </view>
        </view>
        <view class="info-item" @click="skipPage('/pages/queryPage/remainingSumQuery')">
          <view class="info-val">
            <view class="em">
              797
            </view>
            元
          </view>
          <view class="name">
            话费余额
          </view>
        </view>
        <view class="info-item" @click="skipPage('/pages/queryPage/marginQuery')">
          <view class="info-val">
            <view class="em">
              157
            </view>
            分钟
          </view>
          <view class="name">
            通用通话剩余
          </view>
        </view>
        <view class="info-item" @click="skipPage('/pages/queryPage/pointsZone')">
          <view class="info-val">
            <view class="em">
              157
            </view>
            分
          </view>
          <view class="name">
            积分
          </view>
        </view>
      </view>
      <homeColumn />
      <view class="hot-column">
        <view class="hot-item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
          <view class="title">
            20GB系列
          </view>
          <view class="subhead">
            仅需1元起
          </view>
          <image class="img-icon" src="/assets/image/home/001.png" mode="widthFix"></image>
        </view>
        <view class="hot-item" @click="skipPage('/pages/activity/daysTicket')">
          <view class="title">
            天天神券
          </view>
          <view class="subhead">
            领国补神券
          </view>
          <image class="img-icon" src="/assets/image/home/002.png" mode="widthFix"></image>
        </view>
        <view class="hot-item" @click="skipPage('/pages/activity/supercardGuard')">
          <view class="title">
            得3元话费
          </view>
          <view class="subhead">
            月月领1GB
          </view>
          <image class="img-icon" src="/assets/image/home/003.png" mode="widthFix"></image>
        </view>
        <view class="hot-item" @click="skipPage('/pages/activity/getSecondaryCalliper')">
          <view class="title">
            领取副卡
          </view>
          <view class="subhead">
            共享主卡套餐
          </view>
          <image class="img-icon" src="/assets/image/home/004.png" mode="widthFix"></image>
        </view>
      </view>

      <swiper class="notice-board" :autoplay="true" :interval="3000" :disable-touch="true" :vertical="true">
        <swiper-item class="notice-board-item">
          <view class="title">
            头条
          </view>
          <view class="content">
            <view class="tag">
              活动
            </view>
            <view class="data">
              阿斯顿发申达股份萨达嘎洒多发期说法嘎洒
            </view>
          </view>
          <view class="more">更多&nbsp;></view>
        </swiper-item>
        <swiper-item class="notice-board-item">
          <view class="title">
            头条
          </view>
          <view class="content">
            <view class="tag">
              活动
            </view>
            <view class="data">
              阿斯顿发申达股份萨达嘎洒多发期说法嘎洒
            </view>
          </view>
          <view class="more">更多&nbsp;></view>
        </swiper-item>
        <swiper-item class="notice-board-item">
          <view class="title">
            头条
          </view>
          <view class="content">
            <view class="tag">
              活动
            </view>
            <view class="data">
              阿斯顿发申达股份萨达嘎洒多发期说法嘎洒
            </view>
          </view>
          <view class="more">更多&nbsp;></view>
        </swiper-item>
      </swiper>

    </view>
    <!-- 热门活动 -->
    <view class="hot-activity">
      <view class="more-activity-but">
        更多优惠>
      </view>
      <image @click="skipPage('/pages/activity/flow20gb-1yuan')" class="main-activity" src="/assets/image/home/activity-ad-01.png" mode="widthFix"></image>
      <view class="activity-box">
        <image @click="skipPage('/pages/activity/daysTicket')" class="activity" src="/assets/image/home/activity-ad-02.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/supercardGuard')" class="activity" src="/assets/image/home/activity-ad-03.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/getSecondaryCalliper')" class="activity" src="/assets/image/home/activity-ad-04.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/flow20gb-1yuan')" class="activity" src="/assets/image/home/activity-ad-05.png" mode="widthFix"></image>
      </view>
    </view>

    <!-- 流量专区 -->
    <view class="flow-area">
      <view class="head-title">
        <view class="title">
          流量专区
        </view>
        <view class="more">
          更多>
        </view>
      </view>
      <view class="flow-swiper-ad-box">
        <z-swiper class="flow-swiper-ad" grabCursor loop :autoplay="{ delay:3000, disableOnInteraction: true }"
          :slidesPerView="3" :spaceBetween="-50" centeredSlides centeredSlidesBounds effect="coverflow"
          :coverflowEffect="{
          depth: 200,
          rotate: 80,
          scale: 0.6,
          stretch: 0,
          modifier: 1,
          slideShadows: false,
        }" :modules="modules">
          <z-swiper-item v-for="item in 8" :key="item">
            <image class="flow-swiper-item" @click="skipPage('/pages/activity/flow20gb-1yuan')" src="/assets/image/home/activity-ad-02.png" mode="widthFix"></image>
          </z-swiper-item>
        </z-swiper>
      </view>
      <view class="flow-ad-2">
        <image @click="skipPage('/pages/activity/flow20gb-1yuan')" class="ad-item" src="/assets/image/home/flow-swiper-ab-01.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/daysTicket')" class="ad-item" src="/assets/image/home/flow-swiper-ab-02.png" mode="widthFix"></image>
      </view>
      <view class="flow-ad-3">
        <image @click="skipPage('/pages/activity/supercardGuard')" class="ad-item" src="/assets/image/home/flow-swiper-ab-03.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/getSecondaryCalliper')" class="ad-item" src="/assets/image/home/flow-swiper-ab-04.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/flow20gb-1yuan')" class="ad-item" src="/assets/image/home/flow-swiper-ab-05.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/daysTicket')" class="ad-item" src="/assets/image/home/flow-swiper-ab-06.png" mode="widthFix"></image>
      </view>
    </view>

    <!-- 权益专区 -->
    <view class="benefit-area">
      <view class="head-title">
        <view class="title">
          权益专区
        </view>
        <view class="more">
          更多>
        </view>
      </view>
      <view class="benefit-ad-01">
        <image @click="skipPage('/pages/activity/flow20gb-1yuan')" class="ad-item" src="/assets/image/home/benefit-01.png" mode="widthFix"></image>
        <image @click="skipPage('/pages/activity/daysTicket')" class="ad-item" src="/assets/image/home/benefit-02.png" mode="widthFix"></image>
      </view>
      <view class="benefit-ad-02">
        <view class="ad-item" @click="skipPage('/pages/activity/supercardGuard')">
          <image class="icon" src="/assets/image/home/benefit-icon-01.png" mode="widthFix"></image>
          <view class="title">1.9元返2元</view>
          <view class="explain">月月领1GB</view>
        </view>
        <view class="ad-item" @click="skipPage('/pages/activity/getSecondaryCalliper')">
          <image class="icon" src="/assets/image/home/benefit-icon-02.png" mode="widthFix"></image>
          <view class="title">会员+10GB</view>
          <view class="explain">每月1元畅享</view>
        </view>
        <view class="ad-item" @click="skipPage('/pages/activity/flow20gb-1yuan')">
          <image class="icon" src="/assets/image/home/benefit-icon-03.png" mode="widthFix"></image>
          <view class="title">爱奇艺+18GB</view>
          <view class="explain">四屏通用</view>
        </view>
        <view class="ad-item" @click="skipPage('/pages/activity/daysTicket')">
          <image class="icon" src="/assets/image/home/benefit-icon-04.png" mode="widthFix"></image>
          <view class="title">美食权益+18GB</view>
          <view class="explain">50+美食任选</view>
        </view>
        <view class="ad-item" @click="skipPage('/pages/activity/supercardGuard')">
          <image class="icon" src="/assets/image/home/benefit-icon-05.png" mode="widthFix"></image>
          <view class="title">25元家庭用电</view>
          <view class="explain">月月领8GB</view>
        </view>
        <view class="ad-item" @click="skipPage('/pages/activity/getSecondaryCalliper')">
          <image class="icon" src="/assets/image/home/benefit-icon-06.png" mode="widthFix"></image>
          <view class="title">加油/充电券</view>
          <view class="explain">移动为你加油</view>
        </view>
      </view>

    </view>

    <!-- 套餐专区 -->
    <view class="set-meal-area">
      <view class="head-title">
        <view class="title">
          套餐专区
        </view>
        <view class="more">
          更多>
        </view>
      </view>
      <view class="set-meal-ad-01">
        <view class="set-meal-item">
          <image class="icon" src="/assets/image/home/set-meal-icon-01.png" mode=""></image>
          <view class="explain">
            <view class="title">今日办流量翻倍</view>
            <view class="info">网龄长,翻倍高</view>
          </view>
        </view>
        <view class="set-meal-item">
          <image class="icon" src="/assets/image/home/set-meal-icon-02.png" mode=""></image>
          <view class="explain">
            <view class="title">5G套餐7折</view>
            <view class="info">大流量+视频会员</view>
          </view>
        </view>
      </view>
      <view class="set-meal-ad-02">
        <view class="set-meal-item">
          <image class="icon" src="/assets/image/home/set-meal-icon-03.png" mode=""></image>
          <view class="title">5G智享套餐</view>
          <view class="info">权益上新</view>
        </view>
        <view class="set-meal-item">
          <image class="icon" src="/assets/image/home/set-meal-icon-04.png" mode=""></image>
          <view class="title">全家享套餐</view>
          <view class="info">直升全球通</view>
        </view>
        <view class="set-meal-item">
          <image class="icon" src="/assets/image/home/set-meal-icon-05.png" mode=""></image>
          <view class="title">4G套餐</view>
          <view class="info">全球通超级家</view>
        </view>

      </view>
      
      
      
    </view>
    
  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { Autoplay } from '@/uni_modules/zebra-swiper/modules' // 滚动自动播放
  import { EffectCoverflow } from '@/uni_modules/zebra-swiper/modules' // 滚动切换效果

  const modules = ref([Autoplay, EffectCoverflow])
  
  // 跳转页面
  const skipPage = (data: string) => {
    uni.navigateTo({
      url: data
    })
  }

  /*
  * 首页广告
  */
  const adHome = () => {
    console.log('首页广告')
  }
</script>

<style lang="scss" scoped>
  @use '@/uni_modules/zebra-swiper/index.scss';

  .main {
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 3vw;
    // position: relative;
    // z-index: 1;
    .main-bg {
      width: 100vw;
      height: 80vw;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #4e9cfe;
      z-index: 0;
    }

    .type-nav {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .type-nav-item {
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3.5vw;
        color: #fff;

        .icon {
          width: 9vw;
          height: 9vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          color: #fff;
          margin-bottom: 1vw;
        }
      }
    }

    .home-ad {
      width: 100vw;
      margin-left: -3vw;
      display: block;
    }

    >.content {
      width: 100vw;
      box-sizing: border-box;
      padding: 3vw;
      margin-left: -3vw;
      background-color: #fff;

      .info-box {
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 4vw 3vw;
        border-radius: 2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0.5vw 1vw #c0d3ea;
        margin-bottom: 3vw;

        .info-item {
          width: 25%;

          .info-val {
            width: 100%;
            font-size: 3vw;
            color: #373737;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 1vw;

            .em {
              font-size: 4.5vw;
              font-weight: bold;
            }
          }

          .name {
            font-size: 2.5vw;
            text-align: center;
            color: #6a6a6a;
          }
        }
      }

      .hot-column {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3vw;

        .hot-item {
          width: 23.85%;
          box-sizing: border-box;
          padding: 2vw 1.5vw;
          border-radius: 2vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &:nth-child(1) {
            background-color: #edf6fd;
          }

          &:nth-child(2) {
            background-color: #faf0f1;
          }

          &:nth-child(3) {
            background-color: #fff0f5;
          }

          &:nth-child(4) {
            background-color: #ebfdff;
          }

          .title {
            width: 100%;
            font-size: 4vw;
            font-weight: bold;
            color: #30343d;
            margin-bottom: 1vw;
            text-align: center;
          }

          .subhead {
            width: 100%;
            font-size: 3vw;
            color: #63686e;
            margin-bottom: 1vw;
            text-align: center;
          }

          .img-icon {
            width: 80%;
          }
        }
      }
    }

    .notice-board {
      width: 100%;
      height: 14vw;
      background-color: #f5f6fa;
      box-sizing: border-box;
      padding: 1vw 2vw;
      border-radius: 1.5vw;

      .notice-board-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .title {
          text-align: center;
          width: 15%;
          flex-shrink: 0;
          font-size: 4vw;
          font-weight: bold;
          color: #3181fe;
          margin-right: 2vw;
          border-right: 1px solid #c4c9df;
        }

        .content {
          display: flex;
          align-items: center;
          width: 65%;

          .tag {
            flex-shrink: 0;
            white-space: nowrap;
            font-size: 2.8vw;
            color: #5078e9;
            border: 1px solid #5078e9;
            border-radius: 0.8vw;
            box-sizing: border-box;
            padding: 0.2vw 1vw;
            margin-right: 1.5vw;
          }

          .data {
            font-size: 3.5vw;
            color: #343539;
            width: 100%;
            white-space: nowrap;
            /* 防止文本换行 */
            overflow: hidden;
            /* 隐藏溢出的文本 */
            text-overflow: ellipsis;
            /* 使用省略号表示溢出的文本 */
          }
        }

        .more {
          width: 100%;
          text-align: center;
          font-size: 3vw;
          color: #a3a4a8;
        }
      }
    }

    .hot-activity {
      width: 100%;
      background-image: url('/assets/image/home/hot-activity-title.png');
      background-size: 100% auto;
      background-repeat: no-repeat;
      box-sizing: border-box;
      padding: 14vw 3vw 3vw 3vw;
      border-radius: 3vw;
      position: relative;
      background-color: #eff6ff;
      display: flex;
      margin-bottom: 3vw;

      .more-activity-but {
        position: absolute;
        top: 3vw;
        right: 2vw;
        background-image: linear-gradient(0deg, #569df9, #76c7fe);
        font-size: 3.2vw;
        color: #fff;
        padding: 1vw 2.5vw;
        border-radius: 3vw;
      }

      .main-activity {
        width: 43%;
      }

      .activity-box {
        width: 57%;
        display: flex;
        flex-wrap: wrap;

        .activity {
          width: 47%;
          margin: 0 0 3% 3%;
        }
      }
    }

    .flow-area {
      width: 100%;

      .head-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vw;

        .title {
          font-size: 4vw;
          font-weight: bold;
          color: #333333;
        }

        .more {
          font-size: 3vw;
          color: #999999;
        }
      }

      .flow-swiper-ad-box {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 53vw;
        margin-bottom: 3vw;

        .flow-swiper-ad {
          width: 135%;
          height: 53vw;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);

          :deep(.swiper-wrapper) {
            display: flex;
          }

          .flow-swiper-item {
            width: 100%;
          }

        }
      }

      .flow-ad-2 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2vw;

        .ad-item {
          width: 49%;
        }
      }

      .flow-ad-3 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3vw;

        .ad-item {
          width: 23.5%;
        }
      }
    }

    .benefit-area {
      width: 100%;
      margin-bottom: 3vw;

      .head-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vw;

        .title {
          font-size: 4vw;
          font-weight: bold;
          color: #333333;
        }

        .more {
          font-size: 3vw;
          color: #999999;
        }
      }

      .benefit-ad-01 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vw;

        .ad-item {
          width: 49%;
        }
      }

      .benefit-ad-02 {
        width: 100%;
        height: 64vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;

        .ad-item {
          width: 31.5%;
          box-sizing: border-box;
          padding: 3vw;
          border-radius: 2vw;
          box-shadow: 0 0.3vw 1vw #e1e1e5;

          .icon {
            width: 12vw;
            height: 12vw;
            ;
            display: block;
            margin: 0 auto 2vw auto;
          }

          .title {
            width: 100%;
            white-space: nowrap;
            /* 防止文本换行 */
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 4vw;
            font-weight: bold;
            color: #333333;
            text-align: center;
            margin-bottom: 1vw;
          }

          .explain {
            width: 100%;
            white-space: nowrap;
            /* 防止文本换行 */
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 3vw;
            color: #999999;
            text-align: center;
          }
        }
      }
    }
    .set-meal-area {
      width: 100%;
      margin-bottom: 3vw;
    
      .head-title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vw;
    
        .title {
          font-size: 4vw;
          font-weight: bold;
          color: #333333;
        }
    
        .more {
          font-size: 3vw;
          color: #999999;
        }
      }
      .set-meal-ad-01{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vw;
        .set-meal-item {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 2vw;
          box-shadow: 0 0.5vw 1vw #c0d3ea;
          border-radius: 2vw;
          width: 48.5%;
          .icon {
            display: block;
            width: 12vw;
            height: 12vw;
            margin-right: 2vw;
          }
          .explain {
            width: calc(100% - 10vw - 2vw);
            white-space: nowrap;
            /* 防止文本换行 */
            overflow: hidden;
            text-overflow: ellipsis;
            
            .title {
              font-size: 3.8vw;
              font-weight: bold;
              color: #333333;
              margin-bottom: 2vw;
            }
            .info {
              font-size: 3vw;
              color: #999999;
            }
          }
        }
      }
      .set-meal-ad-02 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .set-meal-item {
          width: 31.5%;
          box-sizing: border-box;
          box-shadow: 0 0.3vw 1vw #e1e1e5;
          border-radius: 2vw;
          padding: 3vw 3vw;
          .icon {
            display: block;
            width: 12vw;
            height: 12vw;
            margin: 0 auto 2vw auto;
          }
          .title {
            font-size: 3.8vw;
            font-weight: bold;
            color: #333333;
            margin-bottom: 2vw;
            text-align: center;
          }
          .info {
            font-size: 3vw;
            color: #999999;
            text-align: center;
          }
        }
      }
    }
  }
</style>