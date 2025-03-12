<template>
  <scroll-view class="equities" scroll-y="true">
    <uni-nav-bar class="nav-bar" shadow :border="false">
      <view class="title">中国移动权益超市</view>
      <view class="right" slot="right" >
        <svg class="icon" @click="skipSearchPage" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="140011">
          <path
            d="M473.088 106.496c200.704 0 362.496 161.792 362.496 362.496 0 200.704-161.792 362.496-362.496 362.496-200.704 0-362.496-161.792-362.496-362.496-2.048-198.656 161.792-362.496 362.496-362.496m0-59.392C239.616 47.104 51.2 235.52 51.2 468.992S239.616 890.88 473.088 890.88c233.472 0 421.888-188.416 421.888-421.888S706.56 47.104 473.088 47.104z m0 0M993.28 940.032l-38.912 38.912L741.376 768l38.912-38.912L993.28 940.032z m0 0"
            p-id="140012"></path>
        </svg>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="142133">
          <path
            d="M141.3 420.1V188.8l231.2-0.1 0.1 231.3-231.3 0.1z m231.3-308.4H141.2c-42.5 0.1-76.9 34.5-77 77v231.5c0.1 42.5 34.5 76.9 77 77h231.5c42.5-0.1 76.9-34.5 77-77V188.7c-0.2-42.5-34.6-76.9-77.1-77zM141.3 882.6V651.2l231.2-0.1 0.1 231.3-231.3 0.2z m231.3-308.4H141.2c-42.5 0.1-76.9 34.5-77 77v231.5c0.1 42.5 34.5 76.9 77 77h231.5c42.5-0.1 76.9-34.5 77-77V651.1c-0.2-42.4-34.6-76.8-77.1-76.9zM719.4 468L555.8 304.4l163.4-163.6 163.7 163.5L719.4 468z m218-218L773.7 86.4c-30.1-30-78.7-30-108.8 0L501.3 250a76.744 76.744 0 0 0-22.5 54.3c-0.1 20.5 8 40.1 22.5 54.6L665 522.6c30.1 30 78.8 30 108.8 0l163.7-163.7c29.9-30.2 29.9-78.9-0.1-108.9zM603.7 882.6V651.2l231.2-0.1 0.1 231.3-231.3 0.2z m231.4-308.4H603.6c-42.5 0.1-76.9 34.5-77 77v231.5c0.1 42.5 34.5 76.9 77 77h231.5c42.5-0.1 76.9-34.5 77-77V651.1c-0.1-42.4-34.6-76.8-77-76.9z"
            p-id="142134"></path>
        </svg>
      </view>
    </uni-nav-bar>

    <view class="main">
      <view class="column-box">
        <view class="column-item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/equities-column-icon-01.png" mode="widthFix"></image>
          </view>
          <view class="title">黄金会员</view>
        </view>
        <view class="column-item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/equities-column-icon-02.png" mode="widthFix"></image>
          </view>
          <view class="title">1元享会员</view>
        </view>
        <view class="column-item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/equities-column-icon-03.png" mode="widthFix"></image>
          </view>
          <view class="title">权益领取</view>
        </view>
        <view class="column-item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/equities-column-icon-04.png" mode="widthFix"></image>
          </view>
          <view class="title">我的权益</view>
        </view>
        <view class="column-item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/equities-column-icon-05.png" mode="widthFix"></image>
          </view>
          <view class="title">超市订单</view>
        </view>
      </view>

      <!-- 会员信息 -->
      <view class="member-info" :style="{'height': isShowMore ? '112vw' : '80vw'}">
        <view class="info-data">
          <view class="phone-number">158****1234</view>
          <view class="balance">话费余额:¥154<svg class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="871">
              <path
                d="M512 64A448 448 0 1 0 960 512 448.5 448.5 0 0 0 512 64z m0 832a384 384 0 1 1 384-384 384.5 384.5 0 0 1-384 384z"
                p-id="872"></path>
              <path
                d="M512 736a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM512 224a160 160 0 0 0-160 160 32 32 0 0 0 64 0 96 96 0 1 1 137.4 86.6A129.4 129.4 0 0 0 480 586.4V640a32 32 0 1 0 64 0v-53.6a64.3 64.3 0 0 1 37.1-58.1A160 160 0 0 0 512 224z"
                p-id="873"></path>
            </svg></view>
        </view>

        <view class="future-equities">
          <view class="title">限时升级领取更多权益</view>
          <view class="equities-list">
            <view class="equities-item">
              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1404">
                <path
                  d="M821.333333 138.666667c64.8 0 117.333333 52.533333 117.333334 117.333333v149.333333a32 32 0 0 1-32 32 74.666667 74.666667 0 0 0 0 149.333334 32 32 0 0 1 32 32v149.333333c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V618.666667a32 32 0 0 1 32-32 74.666667 74.666667 0 0 0 0-149.333334 32 32 0 0 1-32-32V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666zM428.576 329.994667a32 32 0 0 0-43.733333-2.581334l-1.514667 1.344a32 32 0 0 0-2.581333 43.733334L452.565333 458.666667H405.333333l-1.877333 0.053333A32 32 0 0 0 373.333333 490.666667l0.053334 1.877333A32 32 0 0 0 405.333333 522.666667h80v42.666666H405.333333l-1.877333 0.053334A32 32 0 0 0 373.333333 597.333333l0.053334 1.877334A32 32 0 0 0 405.333333 629.333333h80v42.666667l0.053334 1.877333A32 32 0 0 0 517.333333 704l1.877334-0.053333A32 32 0 0 0 549.333333 672v-42.666667H618.666667l1.877333-0.053333A32 32 0 0 0 650.666667 597.333333l-0.053334-1.877333A32 32 0 0 0 618.666667 565.333333h-69.333334v-42.666666H618.666667l1.877333-0.053334A32 32 0 0 0 650.666667 490.666667l-0.053334-1.877334A32 32 0 0 0 618.666667 458.666667h-47.253334l71.84-86.186667 1.248-1.589333a32 32 0 0 0-50.421333-39.381334L512 430.016l-82.08-98.506667z"
                  p-id="1405"></path>
              </svg>权益券
            </view>
            <view class="equities-item">
              <svg class="icon"
                style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11035">
                <path
                  d="M 478.694 221.005 c 0 0 112.811 59.648 104.755 101.581 c 0 0 7.936 85.8453 -200.047 35.0208 c 0 0 -98.8843 -25.1392 -77.3547 -90.2912 c 25.5659 -77.4059 367.659 -54.3915 451.26 -38.6987 c 0 0 247.458 37.12 246.579 249.924 c 0 0 27.4859 293.82 -360.986 367.087 c 0 0 -105.882 11.2299 -179.277 4.49707 c -144.486 -13.2864 -243.337 -76.5696 -348.484 -198.613 c 0 0 -240.819 -319.266 42.6325 -459.964 C 157.764 191.556 285.508 123.068 478.694 221.005 L 478.694 221.005 Z"
                  p-id="11036"></path>
              </svg>权益豆
            </view>
            <view class="equities-item">
              <svg class="icon"
                style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14070">
                <path
                  d="M512 42.666667C251.733333 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667z m0 704L277.333333 512 512 277.333333l234.666667 234.666667-234.666667 234.666667z"
                  p-id="14071"></path>
              </svg>积分
            </view>
          </view>
        </view>

        <view class="more-equities" style="top: 33vw;">
          <view class="head">
            <view class="title">免费领权益</view>
            <view class="subhead">领权益福袋</view>
          </view>
          <view class="equities-list">
            <view class="equities-item" v-for="item in 3" :key="item">
              <view class="cover">
                <image class="cover-img" src="/assets/image/equities/kugou-logo.png" mode=""></image>
                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14943">
                  <path
                    d="M713.04314 394.841279l-33.486639 0 0-67.070491c0-93.874947-73.742441-167.623528-167.620458-167.623528-93.777733 0-167.572362 73.748581-167.572362 167.623528l0 67.070491-33.533711 0c-36.82466 0-67.019326 30.147594-67.019326 66.965091l0 335.251148c0 36.817497 30.194666 66.965091 67.019326 66.965091l402.212146 0c36.922897 0 67.069468-30.147594 67.069468-66.965091L780.111584 461.806369C780.113631 424.989896 749.966037 394.841279 713.04314 394.841279M511.937067 696.500388c-36.820567 0-67.019326-30.194666-67.019326-67.067421 0-36.875825 30.198759-67.070491 67.019326-67.070491 36.920851 0 67.070491 30.194666 67.070491 67.070491C579.007558 666.306746 548.857917 696.500388 511.937067 696.500388M615.877243 394.841279l-207.830211 0 0-67.070491c0-57.006285 46.933892-103.892081 103.889011-103.892081 57.053357 0 103.9412 46.885797 103.9412 103.892081L615.877243 394.841279z"
                    p-id="14944"></path>
                </svg>
              </view>
              <view class="title">酷狗周卡</view>
            </view>
          </view>
        </view>
        
        <view class="more-equities" style="top: 53vw;">
          <view class="head">
            <view class="title">月月有福利</view>
            <view class="subhead">领权益福袋</view>
          </view>
          <view class="equities-list">
            <view class="equities-item" v-for="item in 3" :key="item">
              <view class="cover">
                <image class="cover-img" src="/assets/image/equities/kugou-logo.png" mode=""></image>
                <!-- <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14943">
                  <path
                    d="M713.04314 394.841279l-33.486639 0 0-67.070491c0-93.874947-73.742441-167.623528-167.620458-167.623528-93.777733 0-167.572362 73.748581-167.572362 167.623528l0 67.070491-33.533711 0c-36.82466 0-67.019326 30.147594-67.019326 66.965091l0 335.251148c0 36.817497 30.194666 66.965091 67.019326 66.965091l402.212146 0c36.922897 0 67.069468-30.147594 67.069468-66.965091L780.111584 461.806369C780.113631 424.989896 749.966037 394.841279 713.04314 394.841279M511.937067 696.500388c-36.820567 0-67.019326-30.194666-67.019326-67.067421 0-36.875825 30.198759-67.070491 67.019326-67.070491 36.920851 0 67.070491 30.194666 67.070491 67.070491C579.007558 666.306746 548.857917 696.500388 511.937067 696.500388M615.877243 394.841279l-207.830211 0 0-67.070491c0-57.006285 46.933892-103.892081 103.889011-103.892081 57.053357 0 103.9412 46.885797 103.9412 103.892081L615.877243 394.841279z"
                    p-id="14944"></path>
                </svg> -->
              </view>
              <view class="title">酷狗周卡</view>
            </view>
          </view>
        </view>
        
        
        <view class="more-equities hide" style="top: 72vw;" v-if="isShowMore">
          <view class="equities-list">
            <view class="equities-item" v-for="item in 6" :key="item">
              <view class="cover">
                <image class="cover-img" src="/assets/image/equities/kugou-logo.png" mode=""></image>
                <!-- <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14943">
                  <path
                    d="M713.04314 394.841279l-33.486639 0 0-67.070491c0-93.874947-73.742441-167.623528-167.620458-167.623528-93.777733 0-167.572362 73.748581-167.572362 167.623528l0 67.070491-33.533711 0c-36.82466 0-67.019326 30.147594-67.019326 66.965091l0 335.251148c0 36.817497 30.194666 66.965091 67.019326 66.965091l402.212146 0c36.922897 0 67.069468-30.147594 67.069468-66.965091L780.111584 461.806369C780.113631 424.989896 749.966037 394.841279 713.04314 394.841279M511.937067 696.500388c-36.820567 0-67.019326-30.194666-67.019326-67.067421 0-36.875825 30.198759-67.070491 67.019326-67.070491 36.920851 0 67.070491 30.194666 67.070491 67.070491C579.007558 666.306746 548.857917 696.500388 511.937067 696.500388M615.877243 394.841279l-207.830211 0 0-67.070491c0-57.006285 46.933892-103.892081 103.889011-103.892081 57.053357 0 103.9412 46.885797 103.9412 103.892081L615.877243 394.841279z"
                    p-id="14944"></path>
                </svg> -->
              </view>
              <view class="title">酷狗周卡</view>
            </view>
          </view>
        </view>


        <view class="switch-more" @click="switchShowMore">
          <svg :style="{'transform': isShowMore ? 'rotate(180deg)' : 'rotate(0deg)'}" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15451"><path d="M510.919389 801.24466c-4.403287 0-8.809643-1.282203-12.622482-3.846608L73.471338 511.923252c-10.370185-6.971785-13.130042-21.032012-6.158257-31.406291 6.971785-10.375302 21.032012-13.135158 31.406291-6.163373l412.200016 276.993638 412.19797-276.993638c10.370185-6.971785 24.429389-4.217045 31.406291 6.163373 6.971785 10.374278 4.211928 24.434505-6.161327 31.406291L523.535731 797.398052C519.722892 799.963481 515.320629 801.24466 510.919389 801.24466L510.919389 801.24466zM510.919389 547.405371c-4.403287 0-8.809643-1.283226-12.622482-3.846608L73.471338 258.081916c-10.370185-6.971785-13.130042-21.030989-6.158257-31.406291 6.971785-10.379395 21.032012-13.133112 31.406291-6.161327l412.200016 276.992615 412.19797-276.992615c10.370185-6.976902 24.429389-4.211928 31.406291 6.161327 6.971785 10.375302 4.211928 24.434505-6.161327 31.406291L523.535731 543.558763C519.722892 546.122145 515.320629 547.405371 510.919389 547.405371L510.919389 547.405371zM510.919389 547.405371" p-id="15452"></path></svg>
        </view>
      </view>
      
      <!-- 推荐促销 -->
      <view class="recommend-promotion">
        <swiper class="promotion-ad" :autoplay="true" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
          <swiper-item v-for="item in 5" :key="item">
            <image class="ad-item" src="/assets/image/home/government-enterprise-ad.png" mode="widthFix"></image>
          </swiper-item>
        </swiper>
        
        <view class="more-promotion">
          <view class="promotion-item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/equities/recommend-icon-01.png" mode="widthFix"></image>
            </view>
            <view class="title">黄金会员</view>
          </view>
          <view class="promotion-item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/equities/recommend-icon-02.png" mode="widthFix"></image>
            </view>
            <view class="title">随心系</view>
          </view>
          <view class="promotion-item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/equities/recommend-icon-03.png" mode="widthFix"></image>
            </view>
            <view class="title">随心购</view>
          </view>
          <view class="promotion-item">
            <view class="cover">
              <image class="cover-img" src="/assets/image/equities/recommend-icon-04.png" mode="widthFix"></image>
            </view>
            <view class="title">公告</view>
          </view>
        </view>
      </view>
      
      <image class="promotion-group-ad" src="/assets/image/equities/promotion-ad.png" mode="widthFix"></image>
      
      <swiper class="slideshow-ad" :autoplay="true" :indicator-dots="true" indicator-color="rgba(255, 255, 255, 0.5)" indicator-active-color="rgba(255, 255, 255, 1)" :circular="true">
        <swiper-item v-for="item in 5" :key="item">
          <image class="ad-item" src="/assets/image/equities/slideshow-ad.png" mode="widthFix"></image>
        </swiper-item>
      </swiper>
      
      <view class="signi-column-box">
        <view class="signi-column-item">
          <image class="cover" src="/assets/image/equities/column-icon-01.png" mode="widthFix"></image>
          <view class="title">流量秒杀</view>
        </view>
        <view class="signi-column-item">
          <image class="cover" src="/assets/image/equities/column-icon-02.png" mode="widthFix"></image>
          <view class="title">爱优特会员</view>
        </view>
        <view class="signi-column-item">
          <image class="cover" src="/assets/image/equities/column-icon-03.png" mode="widthFix"></image>
          <view class="title">权益福袋</view>
        </view>
        <view class="signi-column-item">
          <image class="cover" src="/assets/image/equities/column-icon-04.png" mode="widthFix"></image>
          <view class="title">领话费</view>
        </view>
        <view class="signi-column-item">
          <image class="cover" src="/assets/image/equities/column-icon-05.png" mode="widthFix"></image>
          <view class="title">生活费</view>
        </view>
      </view>
      
      <scroll-view class="hot-class-nav" :scroll-x="true" :show-scrollbar="false">
        <view class="class-nav-box">
          <view class="class-nav-item" :class="{'selected': classNavSelected == 'faddish'}" @click="switchClassNav">爆款好物</view>
          <view class="class-nav-item" :class="{'selected': classNavSelected == 'fineFood'}" @click="switchClassNav">美食特惠</view>
          <view class="class-nav-item" :class="{'selected': classNavSelected == 'audition'}" @click="switchClassNav">试听专区</view>
          <view class="class-nav-item" :class="{'selected': classNavSelected == 'lifeStyle'}" @click="switchClassNav">生活无忧</view>
        </view>
      </scroll-view>
      
      <view class="member-privilege">
        <view class="privilege-item" v-for="item in 10" :key="item">
          <view class="cover">
            <image class="cover-img" src="/assets/image/equities/kugou-logo.png" mode="widthFix"></image>
            <view class="tag">爆款</view>
          </view>
          <view class="title">车主权益包</view>
          <view class="original-price">原价¥32</view>
          <view class="vip-price">
            <view class="price">¥32.9</view>
            <view class="title">会员价</view>
          </view>
          
        </view>
      </view>
      

    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue'

  
  const isShowMore = ref(false) // 是否显示更多
  /**
   * 切换显示更多
*/
  const switchShowMore = () => {
    isShowMore.value = !isShowMore.value
  }
  
  const classNavSelected = ref('faddish') // 类型导航选中
  
  /**
   * 切换类型导航
*/
  const switchClassNav = (val: string) => {
    classNavSelected.value = val
  }
  
  /**
   * 跳转搜索
  */
  const skipSearchPage = () => {
    console.log('564564564')
    uni.navigateTo({
      url: '/pages/search/equitiesSearch'
    })
  }
  
</script>

<style lang="scss" scoped>
  .equities {
    width: 100vw;
    height: 100vh;
    background-color: #f4f5f6;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 20vw;

    .nav-bar {
      width: 100%;
      position: sticky;
      top: 0;
      left: 0;
      z-index: 99;

      .title {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vw;
        font-weight: bold;
      }

      .right {
        display: flex;
        align-items: center;
        color: #000000;
        position: absolute;
        top: 50%;
        right: 3vw;
        transform: translateY(-50%);

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

    .main {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw;
    }

    .column-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3vw;

      .column-item {
        width: 20%;

        .cover {
          width: 11vw;
          height: 11vw;
          box-sizing: border-box;
          padding: 3vw;
          border-radius: 2vw;
          background-image: linear-gradient(0deg, #f2f9fe, #f2f9fe);
          box-shadow: 0 0.5vw 0vw #bbd4fb;
          position: relative;
          display: block;
          margin: 0 auto 2vw auto;

          .cover-img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 7vw;
            height: 7vw;
          }
        }

        .title {
          width: 100%;
          text-align: center;
          font-size: 3.5vw;
          color: #333333;
        }
      }
    }

    .member-info {
      width: 100%;
      height: 80vw;
      border-radius: 5vw;
      background-color: #fff;
      border: 1px solid #f6e2e1;
      box-shadow: 0 0.5vw 0vw #f6e2e1;
      box-sizing: border-box;
      padding: 5vw 4vw 6vw 4vw;
      position: relative;
      background-image: url('/assets/image/equities/member-bg.png');
      background-repeat: no-repeat;
      background-size: 100% auto;
      z-index: 1;
      margin-bottom: 10vw;
      .switch-more {
        position: absolute;
        border-radius: 0 0 5vw 5vw;
        background-color: #fff;
        // border: 1px solid #f6e2e1;
        box-shadow: 0 0.5vw 0vw #f6e2e1;
        width: 20vw;
        height: 10vw;
        top: 94%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        box-sizing: border-box;
        padding-bottom: 1vw;
        font-size: 3vw;
        color: #8c6a50;
        .icon {
          width: 5vw;
          height: 5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
        }
      }

      .info-data {
        position: absolute;
        top: 12vw;
        left: 4%;
        display: flex;
        align-items: center;

        .phone-number {
          font-size: 5vw;
          font-weight: bold;
          color: #88402c;
          margin-right: 2vw;
        }

        .balance {
          font-size: 3.2vw;
          color: #b87446;
          display: flex;
          align-items: center;

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

      .future-equities {
        width: calc(100% - 6% - 3%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 21vw;
        left: 4%;

        .title {
          font-size: 3.5vw;
          color: #b87446;
        }

        .equities-list {
          display: flex;
          align-items: center;

          .equities-item {
            display: flex;
            align-items: center;
            margin: 0 2vw 2vw 0;
            color: #b87446;
            font-size: 3.5vw;

            .icon {
              width: 3.5vw;
              height: 3.5vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              margin-right: 1vw;
            }
          }
        }
      }

      .more-equities{
        position: absolute;
        left: 4%;
        display: flex;
        width: 92%;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        &.hide {
          .equities-list {
            width: 100%;
            flex-wrap: wrap;
            justify-content: flex-start;
            .equities-item {
              margin: 0 0.5vw;
            }
          }
        }
        .head {
          .title {
            font-size: 4.2vw;
            font-weight: bold;
            color: #333333;
            margin-bottom: 3vw;
          }
          .subhead {
            font-size: 3.5vw;
            color: #999999;
          }
        }
        .equities-list {
          display: flex;
          align-items: center;
          .equities-item {
            width: 20vw;
            .cover {
              width: 12vw;
              height: 12vw;
              position: relative;
              display: block;
              margin: 0 auto;
              .cover-img {
                width: 8vw;
                height: 8vw;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 3vw;
              }
              .icon {
                width: 4vw;
                height: 4vw;
                vertical-align: middle;
                fill: currentColor;
                overflow: hidden;
                position: absolute;
                top: 0vw;
                right: 0vw;
                z-index: 1;
                color: #d6d6d6;
              }
            }
            .title {
              text-align: center;
              font-size: 3.2vw;
              color: #333333;
            }
          }
        }
        
        
        
      }

    }
    
    .recommend-promotion {
      width: 100%;
      box-sizing: border-box;
      border-radius: 2vw;
      background-image: linear-gradient(0deg, #fff, transparent);
      padding-bottom: 3vw;
      margin-bottom: 3vw;
      .promotion-ad {
        width: 100%;
        height: 35.8vw;
        margin-bottom: 3vw;
        .ad-item {
          width: 100%;
        }
      }
      .more-promotion {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .promotion-item {
          width: 23%;
          .cover {
            position: relative;
            width: 10vw;
            height: 10vw;
            display: block;
            margin: 0 auto 2vw auto;
            .cover-img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
            }
          }
          .title{
            width: 100%;
            text-align: center;
            font-size: 3.2vw;
            font-weight: bold;
            color: #333333;
          }
        }
      }
      
    }
    
    .promotion-group-ad {
      width: 100%;
      margin-bottom: 3vw;
    }
    .slideshow-ad {
      width: 100%;
      height: 23vw;
      margin-bottom: 3vw;
      .ad-item {
        width: 100%;
      }
    }
    
    .signi-column-box {
      width: 100%;
      box-sizing: border-box;
      padding: 4vw 1vw;
      background-color: #fff;
      border-radius: 3vw;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3vw;
      .signi-column-item {
        width: 20%;
        .cover {
          width: 50%;
          display: block;
          margin: 0 auto 2vw auto;
        }
        .title {
          width: 100%;
          text-align: center;
          font-size: 3.2vw;
          color: #404040;
        }
      }
    }
    .hot-class-nav {
      width: 100%;
      margin-bottom: 3vw;
      .class-nav-box{
        width: 100%;
        display: flex;
        .class-nav-item {
          box-sizing: border-box;
          padding: 1vw 3vw;
          font-size: 3.2vw;
          color: #666666;
          background-color: #f1f1f1;
          border: 1px solid #e7e7e7;
          border-radius: 5vw;
          margin-right: 2vw;
          &.selected {
            color: #ec6e3e;
            background-color: #fdf6eb;
            border: 1px solid #ec6e3e;
          }
        }
      }
    }
    .member-privilege {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      .privilege-item {
        width: 30.9%;
        box-sizing: border-box;
        border: 1px solid #ffffff;
        border-radius: 2vw;
        margin: 0 1.2% 1.5% 1.2%;
        .cover {
          width: 100%;
          height: 21vw;
          border-radius: 2vw 2vw 0 0;
          background-color: #fdf6f6;
          position: relative;
          overflow: hidden;
          margin-bottom: 1vw;
          .cover-img {
            width: 11vw;
            height: 11vw;
            border-radius: 3vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .tag{
            width: 20vw;
            height: 10vw;
            background-color: #da5655;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3.5vw;
            font-weight: bold;
            color: #fff;
            position: absolute;
            transform: rotate(45deg);
            top: -2vw;
            right: -7vw;
            box-sizing: border-box;
            padding-top: 3vw;
          }
        }
        >.title {
          width: 100%;
          text-align: center;
          overflow: hidden; /* 超出部分隐藏 */
          white-space: nowrap; /* 保持文本在一行内显示 */
          text-overflow: ellipsis; /* 超出部分显示省略号 */
          box-sizing: border-box;
          padding: 1vw 2vw;
          font-size: 3.5vw;
          color: #333333;
        }
        .original-price {
          width: 100%;
          font-size: 3.2vw;
          text-align: center;
          color: #c9c9c9;
          box-sizing: border-box;
          padding: 1vw 2vw;
          text-decoration: line-through;
        }
        .vip-price {
          width: 100%;
          height: 8vw;
          box-sizing: border-box;
          padding: 0 2vw;
          border-radius: 5vw;
          background-color: #ed8641;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          &:before {
            content: '';
            position: absolute;
            z-index: 1;
            display: block;
            width: 20vw;
            height: 15vw;
            background-color: #f7d494;
            top: -2vw;
            right: -6vw;
            transform: rotate(20deg);
          }
          .price {
            font-size: 4vw;
            font-weight: bold;
            color: #fff;
            position: relative;
            z-index: 2;
          }
          .title {
            font-size: 3.5vw;
            font-weight: bold;
            color: #6b3b20;
            position: relative;
            z-index: 2;
          }
        }
      }
    }
  }
</style>