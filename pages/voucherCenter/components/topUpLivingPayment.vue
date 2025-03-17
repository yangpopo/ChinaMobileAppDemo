<template>
  <view class="main">
    <image class="living-payment-ad" src="/assets/image/livingPayment/living-payment-ad.png" mode="widthFix"></image>
    
    <view class="column-box">
      <view class="column-title">
        新增缴费
      </view>
      <view class="column-content">
        <view class="column-item">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7622"><path d="M171.279588 669.649615c0 185.343061 152.931687 335.594271 341.580188 335.594271 188.652113 0 341.580188-150.254823 341.580187-335.594271 0-42.222931-7.647668-78.662245-28.289508-118.291399-20.634615-39.618317-44.769745-76.173231-67.152812-114.259846L512.859776 18.235913 266.721908 437.09837c-22.383066 38.086615-46.514584 74.64153-67.149199 114.259846-20.645453 39.629154-28.293121 76.072081-28.293121 118.291399z m112.926833-72.02969c2.066352-20.25169 7.553743-39.137854 18.026388-59.245043 13.875623-26.634982 30.102985-51.207225 45.149058-76.812644l165.477909-281.601806 165.481521 281.601806c15.042461 25.605419 31.269823 50.177662 45.145445 76.812644 13.879235 26.64582 19.023439 51.1422 19.023439 79.532858 0 2.633514-0.111988 5.238129-0.2023 7.849968-5.303154 58.62008-54.339265 104.607239-114.332096 104.607239-63.565597 0-115.097947-51.525125-115.097947-115.072659 0-63.580047-51.5179-115.097947-115.097947-115.097947-57.525492-0.007225-105.058802 42.266281-113.57347 97.425584z" fill="#408ce2" p-id="7623"></path></svg>
          <view class="title">水费</view>
        </view>
        <view class="column-item">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8513"><path d="M682.56 791.96v39.91H341.28v-39.91c-126.42-62.825-213.3-193.281-213.3-344.03 0-212.044 171.896-383.94 383.94-383.94s383.94 171.896 383.94 383.94c0 150.749-86.88 281.205-213.3 344.03z m-170.64-24.08c176.704 0 319.95-143.246 319.95-319.95 0-176.704-143.246-319.95-319.95-319.95-176.704 0-319.95 143.246-319.95 319.95 0 176.704 143.246 319.95 319.95 319.95zM362.61 874.53h298.62v63.99H362.61v-63.99z m92.331-307.942l62.45-78.063-106.65-63.99 108.19-135.237 49.968 39.974-62.45 78.063 106.65 63.99-108.19 135.237-49.968-39.974z" fill="#efac45" p-id="8514"></path></svg>
          <view class="title">电费</view>
        </view>
        <view class="column-item">
          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11865"><path d="M762.37664711 306.20725097l-4.93219081-1.28159289c6.87399822 33.4767597 4.77684622 67.84675082-6.35618291 103.09702795-16.67365294 52.75243457-26.90050528 52.75243457-44.60978886 110.12637077-3.66354331-5.07459003-27.1205768-41.08864475-7.09406971-110.19109769 15.39206005-79.95068365-24.20786569-160.26383803-79.19985146-242.66119901-53.27024987-79.95068365-131.86166835-140.23733097-205.97398439-155.40931951h-3.6764887l1.2815929 3.7412156c24.13019339 122.0102321-44.53211653 185.58500661-125.51843082 256.56454006-80.98631427 71.04426035-169.51978667 152.85907911-183.0477116 311.99666884-17.41153975 209.3397839 119.83540781 356.5935123 202.77647486 424.50499002 4.93219082 3.74121561 9.94205392 5.00986311 15.45678696 5.00986311 8.67340642 0 15.40500543-3.72827022 20.40192316-10.07150775a22.73209205 22.73209205 0 0 0 1.26864751-23.17223506c-65.51658192-171.09912336 68.66230992-281.21254875 111.33029135-311.32350894-35.26322252 208.30415328 137.92010747 372.06324464 176.5361841 358.47059278 158.68450133-55.50980109 261.18604169-167.65565155 286.59782795-318.85772167 27.13352217-162.14091852-41.46406083-341.44741452-155.24102953-400.54308661z" fill="#ec705a" p-id="11866"></path></svg>
          <view class="title">燃气费</view>
        </view>
      </view>
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
    background-image: linear-gradient(-180deg, #e6f3fd 0%, #fff 50%);
    padding-top: 3vw;
    padding-bottom: 10vw;
    .living-payment-ad {
      width: calc(100% - 6vw);
      display: block;
      margin: 0 auto 3vw auto;
    }
    .column-box {
      width: calc(100% - 6vw);
      padding: 3vw;
      box-sizing: border-box;
      margin: 0 auto 3vw auto;
      background-color: #fff;
      border-radius: 3vw;
      .column-title {
        font-size: 4vw;
        font-weight: bold;
        margin-bottom: 3vw;
      }
      .column-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .column-item{
          width: 32%;
          box-sizing: border-box;
          background-color: #f9f9fa;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 5vw 2vw;
          border-radius: 2vw;
          .icon {
            width: 10vw;
            height: 10vw;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-bottom: 2vw;
          }
          .title {
            width: 100%;
            text-align: center;
            font-size: 3.8vw;
            font-weight: bold;
          }
        }
      }
    }






  }
</style>