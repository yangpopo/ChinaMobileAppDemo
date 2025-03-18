<template>
  <view class="search">
    <uni-nav-bar class="nav-bar" :border="false">
      <view slot="left" @click="returnNextPage" class="left">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="59072">
          <path
            d="M753.28950857 874.92315429c0 14.83337143-11.86669714 28.18340571-23.23894857 39.55565714-11.86669714 11.86669714-37.08342857 37.08342857-63.28905143 11.86669714l-376.76763428-376.76763428c-8.90002286-8.90002286-19.77782857-22.74450286-19.77782858-37.57787429s10.87780571-28.67785143 19.77782858-37.57787429l376.76763428-376.76763428c10.38336-10.38336 21.75561143-13.35003429 34.11675429-8.90002286 9.39446857 3.46112 18.29449143 11.37225143 28.67785143 21.75561143 14.33892571 14.33892571 21.75561143 28.67785143 21.75561142 41.03899429 0 7.91113143-2.96667429 15.82226286-9.39446857 21.75561142L403.22194286 512l339.18976 339.18976c6.92224 7.41668571 10.87780571 15.32781714 10.87780571 23.73339429z"
            p-id="59073"></path>
        </svg>
      </view>
      <input confirm-type="search" class="nav-bar-input" type="text" maxlength="20" placeholder="输入搜索关键词" />
      <view slot="right" class="right">
        搜索
      </view>
    </uni-nav-bar>

    <view class="main">
      <view class="history-key">
        <view class="history-item">
          移动请你吃美食
        </view>
        <view class="history-item">
          周三充值日
        </view>
        <view class="history-item">
          腾讯会员 15GB
        </view>
      </view>

      <view class="title-box">
        <view class="title">
          搜索发现
        </view>
        <view class="more" @click="switchSearchDiscoverShow">
          <!-- 开眼 -->
          <svg class="icon" v-if="!isShowSearchDiscover" viewBox="0 0 1117 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="60143">
            <path
              d="M1108.945455 470.109091C1099.636364 453.818182 915.781818 93.090909 559.709091 93.090909S19.781818 453.818182 10.472727 470.109091c-13.963636 25.6-13.963636 58.181818 0 83.781818 9.309091 16.290909 193.163636 377.018182 549.236364 377.018182s539.927273-360.727273 549.236364-377.018182c11.636364-25.6 11.636364-58.181818 0-83.781818zM559.709091 837.818182C257.163636 837.818182 94.254545 512 94.254545 512S257.163636 186.181818 559.709091 186.181818s465.454545 325.818182 465.454545 325.818182-162.909091 325.818182-465.454545 325.818182z"
              p-id="60144"></path>
            <path
              d="M559.709091 325.818182c-102.4 0-186.181818 83.781818-186.181818 186.181818s83.781818 186.181818 186.181818 186.181818 186.181818-83.781818 186.181818-186.181818-83.781818-186.181818-186.181818-186.181818z m0 279.272727c-51.2 0-93.090909-41.890909-93.090909-93.090909s41.890909-93.090909 93.090909-93.090909 93.090909 41.890909 93.090909 93.090909-41.890909 93.090909-93.090909 93.090909z"
              p-id="60145"></path>
          </svg>
          <!-- 闭眼 -->
          <svg class="icon" v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="60235">
            <path
              d="M512.022187 546.417778c-184.177778 0-368.071111-55.921778-499.114667-167.537778a37.575111 37.575111 0 0 1-3.498667-53.162667 37.944889 37.944889 0 0 1 53.418667-3.470222c231.082667 198.826667 668.302222 198.826667 898.389333 0a37.944889 37.944889 0 0 1 53.418667 3.470222c13.767111 15.644444 12.231111 39.452444-3.498667 53.191111C880.093298 490.496 696.199964 546.417778 512.022187 546.417778z m-136.760889 164.522666a30.833778 30.833778 0 0 1-6.741334 0c-10.325333-1.422222-19.626667-7.111111-25.543111-15.644444-5.944889-8.561778-7.964444-19.228444-5.632-29.354667l24.945778-146.631111a37.973333 37.973333 0 0 1 43.918222-30.805333 37.831111 37.831111 0 0 1 30.947556 43.747555l-24.945778 146.602667a37.376 37.376 0 0 1-36.949333 32.085333z m561.009778-74.581333c-9.955556 0-19.512889-4.039111-26.453334-11.178667l-123.022222-124.245333a37.176889 37.176889 0 0 1 16.042667-64.455111 37.546667 37.546667 0 0 1 37.091555 12.259556l123.050667 124.245333c14.592 14.563556 14.592 38.144 0 52.707555-7.224889 6.826667-16.782222 10.638222-26.737778 10.666667z m-848.497778 0a38.997333 38.997333 0 0 1-24.945778-10.666667 37.176889 37.176889 0 0 1 0-52.707555l123.022222-124.245333a37.518222 37.518222 0 0 1 67.470222 14.136888 37.205333 37.205333 0 0 1-15.815111 38.058667l-123.022222 124.245333a37.006222 37.006222 0 0 1-26.709333 11.178667z m562.744889 74.581333a37.376 37.376 0 0 1-36.693334-30.833777l-24.945777-146.631111a37.176889 37.176889 0 0 1 9.756444-38.826667 37.546667 37.546667 0 0 1 39.424-7.68c13.539556 5.319111 22.755556 17.92 23.694222 32.341333l24.945778 146.631111c1.820444 9.728-0.341333 19.768889-6.030222 27.904-5.688889 8.135111-14.364444 13.653333-24.177778 15.36a30.805333 30.805333 0 0 1-5.973333 1.706667z"
              p-id="60236"></path>
          </svg>
        </view>
      </view>

      <view class="key-list" v-if="!isShowSearchDiscover">
        <view class="key-item">
          周三充值日
        </view>
        <view class="key-item">
          办权益副卡送会员
        </view>
        <view class="key-item">
          1分钱购会员
        </view>
        <view class="key-item">
          首月返5元话费
        </view>
        <view class="key-item">
          腾讯会员+30G
        </view>
        <template v-if="isShowSearchDiscoverMore">
          <view class="key-item">
            周三充值日
          </view>
          <view class="key-item">
            办权益副卡送会员
          </view>
          <view class="key-item">
            1分钱购会员
          </view>
          <view class="key-item">
            首月返5元话费
          </view>
          <view class="key-item">
            腾讯会员+30G
          </view>
        </template>
        <view class="more-but" @click="switchShowSearchDiscoverMoreShow"
          :style="{'transform': isShowSearchDiscoverMore ? 'rotate(180deg)' : 'rotate(0deg)'}">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="60540">
            <path
              d="M512.0512 768c3.456 0.042667 6.741333-0.554667 10.112-1.322667 1.450667-0.341333 2.858667-0.554667 4.266667-1.066666 6.954667-2.304 13.525333-5.717333 18.688-11.477334l382.762666-427.178666a42.461867 42.461867 0 0 0-3.754666-60.288c-17.834667-15.573333-45.312-13.909333-61.098667 3.712L512.0512 662.101333l-351.061333-391.722666c-15.786667-17.621333-43.264-19.285333-61.098667-3.712a42.461867 42.461867 0 0 0-3.754667 60.288l382.848 427.178666c5.162667 5.76 11.733333 9.173333 18.688 11.477334 1.408 0.512 2.816 0.725333 4.266667 1.066666 3.370667 0.768 6.656 1.365333 10.112 1.322667"
              p-id="60541"></path>
          </svg>
        </view>
      </view>

      <!-- 热搜 -->
      <view class="wire-hot-search" v-if="!isShowSearchSwitch">
        <view class="search-key-item" v-for="item in 9" :key="item">
          <view class="head">
            <text class="tag">{{item}}</text>
            <text class="title">周三充值日</text>
          </view>
          <view class="footing">热搜指数&nbsp;100w</view>
        </view>
      </view>
      <view class="hot-search-switch" @click="switchSearchSwitchShow">
        <!-- 开眼 -->
        <svg class="icon" v-if="!isShowSearchSwitch" viewBox="0 0 1117 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="60143">
          <path
            d="M1108.945455 470.109091C1099.636364 453.818182 915.781818 93.090909 559.709091 93.090909S19.781818 453.818182 10.472727 470.109091c-13.963636 25.6-13.963636 58.181818 0 83.781818 9.309091 16.290909 193.163636 377.018182 549.236364 377.018182s539.927273-360.727273 549.236364-377.018182c11.636364-25.6 11.636364-58.181818 0-83.781818zM559.709091 837.818182C257.163636 837.818182 94.254545 512 94.254545 512S257.163636 186.181818 559.709091 186.181818s465.454545 325.818182 465.454545 325.818182-162.909091 325.818182-465.454545 325.818182z"
            p-id="60144"></path>
          <path
            d="M559.709091 325.818182c-102.4 0-186.181818 83.781818-186.181818 186.181818s83.781818 186.181818 186.181818 186.181818 186.181818-83.781818 186.181818-186.181818-83.781818-186.181818-186.181818-186.181818z m0 279.272727c-51.2 0-93.090909-41.890909-93.090909-93.090909s41.890909-93.090909 93.090909-93.090909 93.090909 41.890909 93.090909 93.090909-41.890909 93.090909-93.090909 93.090909z"
            p-id="60145"></path>
        </svg>
        <!-- 闭眼 -->
        <svg class="icon" v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="60235">
          <path
            d="M512.022187 546.417778c-184.177778 0-368.071111-55.921778-499.114667-167.537778a37.575111 37.575111 0 0 1-3.498667-53.162667 37.944889 37.944889 0 0 1 53.418667-3.470222c231.082667 198.826667 668.302222 198.826667 898.389333 0a37.944889 37.944889 0 0 1 53.418667 3.470222c13.767111 15.644444 12.231111 39.452444-3.498667 53.191111C880.093298 490.496 696.199964 546.417778 512.022187 546.417778z m-136.760889 164.522666a30.833778 30.833778 0 0 1-6.741334 0c-10.325333-1.422222-19.626667-7.111111-25.543111-15.644444-5.944889-8.561778-7.964444-19.228444-5.632-29.354667l24.945778-146.631111a37.973333 37.973333 0 0 1 43.918222-30.805333 37.831111 37.831111 0 0 1 30.947556 43.747555l-24.945778 146.602667a37.376 37.376 0 0 1-36.949333 32.085333z m561.009778-74.581333c-9.955556 0-19.512889-4.039111-26.453334-11.178667l-123.022222-124.245333a37.176889 37.176889 0 0 1 16.042667-64.455111 37.546667 37.546667 0 0 1 37.091555 12.259556l123.050667 124.245333c14.592 14.563556 14.592 38.144 0 52.707555-7.224889 6.826667-16.782222 10.638222-26.737778 10.666667z m-848.497778 0a38.997333 38.997333 0 0 1-24.945778-10.666667 37.176889 37.176889 0 0 1 0-52.707555l123.022222-124.245333a37.518222 37.518222 0 0 1 67.470222 14.136888 37.205333 37.205333 0 0 1-15.815111 38.058667l-123.022222 124.245333a37.006222 37.006222 0 0 1-26.709333 11.178667z m562.744889 74.581333a37.376 37.376 0 0 1-36.693334-30.833777l-24.945777-146.631111a37.176889 37.176889 0 0 1 9.756444-38.826667 37.546667 37.546667 0 0 1 39.424-7.68c13.539556 5.319111 22.755556 17.92 23.694222 32.341333l24.945778 146.631111c1.820444 9.728-0.341333 19.768889-6.030222 27.904-5.688889 8.135111-14.364444 13.653333-24.177778 15.36a30.805333 30.805333 0 0 1-5.973333 1.706667z"
            p-id="60236"></path>
        </svg>
        {{
          !isShowSearchSwitch ? '隐藏全网热搜' : '显示全网热搜'
        }}
      </view>


      <view class="title-box">
        <view class="title">
          移动优选
        </view>
        <view class="more" @click="switchOptimizationShow">
          <!-- 开眼 -->
          <svg class="icon" v-if="!isShowOptimization" viewBox="0 0 1117 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="60143">
            <path
              d="M1108.945455 470.109091C1099.636364 453.818182 915.781818 93.090909 559.709091 93.090909S19.781818 453.818182 10.472727 470.109091c-13.963636 25.6-13.963636 58.181818 0 83.781818 9.309091 16.290909 193.163636 377.018182 549.236364 377.018182s539.927273-360.727273 549.236364-377.018182c11.636364-25.6 11.636364-58.181818 0-83.781818zM559.709091 837.818182C257.163636 837.818182 94.254545 512 94.254545 512S257.163636 186.181818 559.709091 186.181818s465.454545 325.818182 465.454545 325.818182-162.909091 325.818182-465.454545 325.818182z"
              p-id="60144"></path>
            <path
              d="M559.709091 325.818182c-102.4 0-186.181818 83.781818-186.181818 186.181818s83.781818 186.181818 186.181818 186.181818 186.181818-83.781818 186.181818-186.181818-83.781818-186.181818-186.181818-186.181818z m0 279.272727c-51.2 0-93.090909-41.890909-93.090909-93.090909s41.890909-93.090909 93.090909-93.090909 93.090909 41.890909 93.090909 93.090909-41.890909 93.090909-93.090909 93.090909z"
              p-id="60145"></path>
          </svg>
          <!-- 闭眼 -->
          <svg class="icon" v-else viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="60235">
            <path
              d="M512.022187 546.417778c-184.177778 0-368.071111-55.921778-499.114667-167.537778a37.575111 37.575111 0 0 1-3.498667-53.162667 37.944889 37.944889 0 0 1 53.418667-3.470222c231.082667 198.826667 668.302222 198.826667 898.389333 0a37.944889 37.944889 0 0 1 53.418667 3.470222c13.767111 15.644444 12.231111 39.452444-3.498667 53.191111C880.093298 490.496 696.199964 546.417778 512.022187 546.417778z m-136.760889 164.522666a30.833778 30.833778 0 0 1-6.741334 0c-10.325333-1.422222-19.626667-7.111111-25.543111-15.644444-5.944889-8.561778-7.964444-19.228444-5.632-29.354667l24.945778-146.631111a37.973333 37.973333 0 0 1 43.918222-30.805333 37.831111 37.831111 0 0 1 30.947556 43.747555l-24.945778 146.602667a37.376 37.376 0 0 1-36.949333 32.085333z m561.009778-74.581333c-9.955556 0-19.512889-4.039111-26.453334-11.178667l-123.022222-124.245333a37.176889 37.176889 0 0 1 16.042667-64.455111 37.546667 37.546667 0 0 1 37.091555 12.259556l123.050667 124.245333c14.592 14.563556 14.592 38.144 0 52.707555-7.224889 6.826667-16.782222 10.638222-26.737778 10.666667z m-848.497778 0a38.997333 38.997333 0 0 1-24.945778-10.666667 37.176889 37.176889 0 0 1 0-52.707555l123.022222-124.245333a37.518222 37.518222 0 0 1 67.470222 14.136888 37.205333 37.205333 0 0 1-15.815111 38.058667l-123.022222 124.245333a37.006222 37.006222 0 0 1-26.709333 11.178667z m562.744889 74.581333a37.376 37.376 0 0 1-36.693334-30.833777l-24.945777-146.631111a37.176889 37.176889 0 0 1 9.756444-38.826667 37.546667 37.546667 0 0 1 39.424-7.68c13.539556 5.319111 22.755556 17.92 23.694222 32.341333l24.945778 146.631111c1.820444 9.728-0.341333 19.768889-6.030222 27.904-5.688889 8.135111-14.364444 13.653333-24.177778 15.36a30.805333 30.805333 0 0 1-5.973333 1.706667z"
              p-id="60236"></path>
          </svg>
        </view>
      </view>

      <view class="recommend-list" v-if="!isShowOptimization">
        <view class="recommend-item">
          <image class="icon" src="/assets/image/search/recommend-icon-01.webp" mode="widthFix"></image>
          <view class="title">1分钱会员</view>
        </view>
        <view class="recommend-item">
          <image class="icon" src="/assets/image/search/recommend-icon-02.webp" mode="widthFix"></image>
          <view class="title">流量优惠</view>
        </view>
        <view class="recommend-item">
          <image class="icon" src="/assets/image/search/recommend-icon-03.webp" mode="widthFix"></image>
          <view class="title">套餐办理</view>
        </view>
        <view class="recommend-item">
          <image class="icon" src="/assets/image/search/recommend-icon-02.webp" mode="widthFix"></image>
          <view class="title">权益副卡</view>
        </view>
      </view>

      <image class="search-preference-ad" src="/assets/image/search/search-ad.webp" mode="widthFix"></image>
    </view>

  </view>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const isShowSearchDiscover = ref(false) // 是否显示搜索发现
  /**
   * 切换搜索发现显示
*/
  const switchSearchDiscoverShow = () => {
    isShowSearchDiscover.value = !isShowSearchDiscover.value
  }

  const isShowSearchDiscoverMore = ref(false) // 是否显示搜索发现更多
  /**
   * 切换搜索发现更多显示
*/
  const switchShowSearchDiscoverMoreShow = () => {
    isShowSearchDiscoverMore.value = !isShowSearchDiscoverMore.value
  }

  const isShowSearchSwitch = ref(false) // 是否显示全网热搜
  
  /**
   * 切换全网热搜显示
  */
  const switchSearchSwitchShow = () => {
    isShowSearchSwitch.value = !isShowSearchSwitch.value
  }


  const isShowOptimization = ref(false) // 是否显示移动优选
  /**
   * 切换移动优选显示
*/
  const switchOptimizationShow = () => {
    isShowOptimization.value = !isShowOptimization.value
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
  .search {
    width: 100vw;
    min-height: 100vh;
    position: relative;

    .nav-bar {
      width: 100%;
      position: relative;

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

      .nav-bar-input {
        position: absolute;
        top: 50%;
        left: 49%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 8vw;
        display: block;
        border: 1px solid #4a90f7;
        border-radius: 5vw;
        box-sizing: border-box;
        padding: 1vw 3vw;
        font-size: 3.5vw;
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
      min-height: 100vh;
      box-sizing: border-box;
      padding: 3vw;

      .history-key {
        width: 100%;
        margin-bottom: 3vw;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        .history-item {
          box-sizing: border-box;
          padding: 1vw 3vw;
          font-size: 3.5vw;
          background-color: #f8f8f8;
          border-radius: 4vw;
          margin-right: 2vw;
          margin-bottom: 3vw;
        }
      }

      .title-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-bottom: 3vw;

        .title {
          font-size: 4vw;
          font-weight: bold;
        }

        .more {
          color: #999999;

          .icon {
            width: 4vw;
            height: 4vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          }
        }
      }

      .key-list {
        width: 100%;
        margin-bottom: 3vw;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        .key-item {
          box-sizing: border-box;
          padding: 1vw 3vw;
          font-size: 3.5vw;
          background-color: #f8f8f8;
          border-radius: 4vw;
          margin-right: 2vw;
          margin-bottom: 3vw;
        }

        .more-but {
          box-sizing: border-box;
          padding: 1vw 3vw;
          font-size: 3.5vw;
          background-color: #f8f8f8;
          border-radius: 4vw;
          margin-right: 2vw;
          margin-bottom: 3vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #333333;

          .icon {
            width: 3.5vw;
            height: 4.5vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          }
        }
      }

      .wire-hot-search {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #cae1fc;
        padding: 10vw 5vw 4vw 5vw;
        background-image: url('/assets/image/search/hot-search-bg.webp');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: 0 0;
        border-radius: 3vw;
        margin-bottom: 2vw;

        .search-key-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          margin-top: 3vw;

          .head {
            display: flex;
            align-items: center;

            .tag {
              font-size: 4vw;
              font-style: italic;
              font-weight: bold;
              margin-right: 2vw;
              width: 5vw;
              text-align: center;
              color: #999999;
            }

            .title {
              font-size: 3.8vw;
              margin-right: 1vw;
              color: #000000;
            }
          }

          .footing {
            font-size: 3vw;
            color: #999999;
          }
        }
      }

      .hot-search-switch {
        box-sizing: border-box;
        padding: 1.5vw 3vw;
        border: 1px solid #e5e5e5;
        border-radius: 4vw;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #666666;
        font-size: 3.2vw;
        // width: 38vw;
        margin-bottom: 3vw;

        .icon {
          width: 2.8vw;
          height: 2.8vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-right: 1vw;
          color: #999999;
        }
      }

      .recommend-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5vw;

        .recommend-item {
          width: 20%;
          margin: 0 auto;

          .icon {
            width: 9vw;
            height: 9vw;
            display: block;
            margin: 0 auto 1vw auto;
          }

          .title {
            width: 100%;
            color: #343434;
            text-align: center;
            font-size: 3.2vw;
          }
        }
      }

      .search-preference-ad {
        width: 100%;
      }
    }
  }
</style>