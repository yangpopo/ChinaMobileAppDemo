<template>
  <view class="discount-coupon" :class="{'completed': props.state === 0, 'past-due': props.state === 1}" @click.stop="skipPage('/pages/coupon/couponDetails')">
    <view class="tag" v-if="props.state === 0">已使用</view>
    <view class="tag" v-else-if="props.state === 1">已过期</view>
    <view class="type" v-if="discountCouponData.type == 1">业务券</view>
    <view class="type" v-else-if="discountCouponData.type == 2">流量券</view>
    <view class="head">
      <view class="left">
        <view class="cover">
          <image class="cover-img" v-if="discountCouponData.type == 1"
            src="/assets/image/coupon/ticket-type-icon-01.webp" mode="widthFix"></image>
          <image class="cover-img" v-else-if="discountCouponData.type == 2"
            src="/assets/image/coupon/ticket-type-icon-02.webp" mode="widthFix"></image>
        </view>
        <view class="info">
          <view class="title">{{ discountCouponData.title }}</view>
          <view class="subhead">有效期至{{ discountCouponData.subhead }}</view>
        </view>
      </view>
      <view class="right">
        <view class="title">专享券</view>
        <view class="go-use" v-if="props.state == undefined">去使用</view>
      </view>
    </view>
    <view class="footing">
      <view class="title">{{ discountCouponData.remark.title }}</view>
      <view class="subhead">{{ discountCouponData.remark.subhead }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted, reactive, defineProps } from 'vue'
  
  const props = defineProps(['data', 'state']) // 接收参数
  
  
  const discountCouponData = reactive({
    type: 1,
    cover: '/assets/image/coupon/ticket-type-icon-01.webp',
    title: '8GB周包+黄金会员',
    subhead: '2025.03.17 23:59',
    remark: {
      title: '首月1元',
      subhead: '大渝流量'
    }
  })

  // 跳转页面
  const skipPage = (data : string) => {
    uni.navigateTo({
      url: data
    })
  }



  onMounted(() => {
  })
</script>

<style lang="scss" scoped>
  .discount-coupon {
    width: calc(100% - 6vw);
    margin: 0 auto 3vw auto;
    background-color: #fff;
    border-radius: 3vw;
    box-sizing: border-box;
    padding: 4vw 3vw;
    position: relative;
    .tag {
      position: absolute;
      width: 20vw;
      height: 20vw;
      border-radius: 50%;
      border: 2px solid #333;
      font-size: 5vw;
      color: #333;
      top: 4vw;
      right: 17vw;
      transform: rotate(45deg);
      z-index: 2;
      opacity: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.completed {
      filter: grayscale(90%);
    }
    &.past-due {
      filter: grayscale(90%);
    }

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
</style>