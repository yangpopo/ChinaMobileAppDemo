<template>
  <view class="main">
   <image class="apple-icon-abnormal" src="/assets/image/livingPayment/apple-icon-abnormal.png" mode="widthFix"></image>
   <view class="info">
     抱歉,超级手机卡公交功能仅安卓支持NFC机型使用<br />苹果用户暂无法使用
   </view>
  





  </view>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'




  /**
    * 返回上一页
   */
  const returnNextPage = () => {
    uni.navigateBack({
      delta: 1
    })
  }

  /**
   * 模拟提示
*/
  const simulationPrompt = () => {
    uni.showToast({
      title: '功能模拟, 尚未开发,敬请期待!',
      icon: 'none'
    })
  }

  onMounted(() => {
  })
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    // background-image: linear-gradient(-180deg, #e6f3fd 0%, #fff 50%);
    padding-top: 3vw;
    padding-bottom: 10vw;
    .apple-icon-abnormal {
      width: 20vw;
      display: block;
      margin: 0 auto 5vw auto;
    }
    .info {
      text-align: center;
      font-size: 3vw;
      line-height: 5vw;
      color: #666666;
    }
    





  }
</style>