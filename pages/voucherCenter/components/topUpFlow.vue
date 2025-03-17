<template>
  <view class="main">
    <view class="input-box">
      <view class="phone-number">
        <view class="input">
          <input class="uni-input" placeholder="请输入手机号" maxlength="11" />
          <view class="modifier-but">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="48203">
              <path d="M79.36 916.48h343.04v51.2H79.36z" fill="" p-id="48204"></path>
              <path d="M550.4 916.48h376.32v51.2H550.4z" fill="" p-id="48205"></path>
              <path d="M629.76 158.72l215.04 215.04L373.76 844.8l-215.04-215.04L629.76 158.72z m0 0" fill=""
                p-id="48206"></path>
              <path d="M716.8 74.24l215.04 215.04-64 64-215.04-215.04L716.8 74.24z m0 0" fill="" p-id="48207"></path>
              <path d="M138.24 652.8l215.04 215.04L51.2 952.32l87.04-299.52z m0 0" fill="" p-id="48208"></path>
              <path
                d="M798.72 71.68L931.84 204.8c23.04 23.04 20.48 58.88-2.56 81.92-23.04 23.04-61.44 25.6-81.92 2.56l-133.12-133.12c-23.04-20.48-23.04-58.88 2.56-81.92 23.04-23.04 58.88-25.6 81.92-2.56z m0 0"
                fill="" p-id="48209"></path>
            </svg>
          </view>
        </view>
        <view class="title">重庆移动</view>
      </view>
      <view class="more-fun">
        <view class="more-item">
          <view class="icon-item">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50412">
              <path
                d="M328.256 550.912c6.08 0 12.3776 0.128 18.88 0.512 102.1056 5.568 180.5696 13.9392 180.5696 13.9392s74.1248 14.592 85.7856 47.8464l2.2528-0.384c-5.5424 2.4576-11.2128 4.9664-17.0496 7.4496-113.4336 48.384-193.664 58.5472-240.96 58.5472a17.8432 17.8432 0 1 0 0 35.6864c73.8176 0 159.808-20.736 255.5392-61.632 54.5024-23.3088 95.9744-46.3616 113.1392-56.3328l2.9184-1.7024 5.9008-0.768c34.3168-4.416 62.4128-6.7584 84.3776-6.7584 6.72 0 12.864 0.2176 18.4576 0.6528 104.3968 8.3712 109.1328 60.1984 98.2656 69.6832-5.632 4.928-97.7792 59.1744-196.5824 112.0768l-11.4304 6.0928-11.456 6.0672c-84.0704 44.352-168.512 84.9536-204.9536 91.1488-81.984 13.952-341.6192-52.9152-346.8928-102.8992l-0.0896-1.5232V635.2896s28.0832-84.416 163.328-84.3904zM109.0688 576.1408a38.4 38.4 0 0 1 38.4 38.4v153.6a38.4 38.4 0 0 1-38.4 38.4h-38.4a38.4 38.4 0 0 1-38.4-38.4v-153.6a38.4 38.4 0 0 1 38.4-38.4h38.4zM601.0496 140.8C664.96 140.8 716.8 193.6768 716.8 258.9184c0 127.3856-176.7424 239.7568-196.608 251.9808l-1.152 0.704-0.64 0.3968-0.6784-0.3968-1.152-0.704C496.7424 498.6752 320 386.304 320 258.9184 320 193.664 371.8144 140.8 435.7248 140.8c32.384 0 61.6576 13.5808 82.6624 35.4688C539.392 154.3808 568.6656 140.8 601.0496 140.8z"
                fill="#16AD90" p-id="50413"></path>
            </svg>
          </view>
          <view class="title">家人充</view>
        </view>
        <view class="more-item">
          <view class="icon-item">
            <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50788">
              <path
                d="M838.4 64H172.8c-32 0-64 32-64 64v140.8h121.6v89.6H108.8v115.2h121.6v89.6H108.8v115.2h121.6V768H108.8v128c0 32 32 64 64 64h665.6c32 0 64-32 64-64V128c0-32-32-64-64-64zM576 300.8c51.2 0 96 44.8 96 96s-44.8 96-96 96-96-44.8-96-96 38.4-96 96-96z m-224 448c0-128 96-224 224-224s224 102.4 224 224H352z"
                fill="#333333" p-id="50789"></path>
            </svg>
          </view>
          <view class="title">他人充</view>
        </view>

      </view>


    </view>

    <view class="column-title">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1471"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="1472"></path></svg>
      <text class="title">推荐</text>
    </view>
    
    <view class="recommend-column">
      <view class="recommend-item">
        <view class="item-box">
          <view class="title">低至3元起</view>
          <view class="subhead">多档任选</view>
        </view>
      </view>
      <view class="recommend-item">
        <view class="item-box">
          <view class="title">首月1元起</view>
          <view class="subhead">20GB流量</view>
          <view class="tag">多档任选</view>
        </view>
      </view>
      <view class="recommend-item">
        <view class="item-box">
          <view class="title">首月返5元</view>
          <view class="subhead">多档任选</view>
        </view>
      </view>
    </view>
    
    <view class="column-title">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2728"><path d="M533.16837023 67.46421873c46.57041483 0 84.67348253 38.10306768 84.67348254 84.67348094v677.38785861c0 46.57041483-38.10306768 84.67348253-84.67348254 84.67348252s-84.67348253-38.10306768-84.67348252-84.67348252v-677.38785861c0-46.57041483 38.10306768-84.67348253 84.67348252-84.67348094z" p-id="2729"></path></svg>
      <text class="title">日包</text>
      <text class="subhead">随时补充,支持跨月<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3104"><path d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z" p-id="3105"></path><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z" p-id="3106"></path><path d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z" p-id="3107"></path></svg></text>
    </view>
    
    <view class="top-up-pack">
      <view class="pack-item">
        <view class="item-box">
          <view class="title">1GB</view>
          <view class="subhead">3.00元</view>
          <view class="tag">日包</view>
        </view>
      </view>
      <view class="pack-item">
        <view class="item-box">
          <view class="title">2GB</view>
          <view class="subhead">5.00元</view>
          <view class="tag">日包</view>
        </view>
      </view>
      <view class="pack-item">
        <view class="item-box">
          <view class="title">5GB</view>
          <view class="subhead">10.00元</view>
          <view class="tag">日包</view>
        </view>
      </view>
    </view>
    
    <view class="column-title">
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2728"><path d="M533.16837023 67.46421873c46.57041483 0 84.67348253 38.10306768 84.67348254 84.67348094v677.38785861c0 46.57041483-38.10306768 84.67348253-84.67348254 84.67348252s-84.67348253-38.10306768-84.67348252-84.67348252v-677.38785861c0-46.57041483 38.10306768-84.67348253 84.67348252-84.67348094z" p-id="2729"></path></svg>
      <text class="title">小时包</text>
      <text class="subhead">短时应急,立即生效<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3104"><path d="M463.99957 784.352211c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043c0-26.509985-21.490445-48.00043-48.00043-48.00043S463.99957 757.842226 463.99957 784.352211z" p-id="3105"></path><path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128.287273c-211.584464 0-383.712727 172.128262-383.712727 383.712727 0 211.551781 172.128262 383.712727 383.712727 383.712727 211.551781 0 383.712727-172.159226 383.712727-383.712727C895.712727 300.415536 723.551781 128.287273 512 128.287273z" p-id="3106"></path><path d="M512 673.695256c-17.664722 0-32.00086-14.336138-32.00086-31.99914l0-54.112297c0-52.352533 39.999785-92.352318 75.32751-127.647359 25.887273-25.919957 52.67249-52.67249 52.67249-74.016718 0-53.343368-43.07206-96.735385-95.99914-96.735385-53.823303 0-95.99914 41.535923-95.99914 94.559333 0 17.664722-14.336138 31.99914-32.00086 31.99914s-32.00086-14.336138-32.00086-31.99914c0-87.423948 71.775299-158.559333 160.00086-158.559333s160.00086 72.095256 160.00086 160.735385c0 47.904099-36.32028 84.191695-71.424378 119.295794-27.839699 27.776052-56.575622 56.511974-56.575622 82.3356l0 54.112297C544.00086 659.328155 529.664722 673.695256 512 673.695256z" p-id="3107"></path></svg></text>
    </view>
    
    <view class="top-up-pack">
      <view class="pack-item">
        <view class="item-box">
          <view class="title">1GB</view>
          <view class="subhead">2.00元/4小时</view>
          <view class="tag">小时包</view>
        </view>
      </view>
      <view class="pack-item">
        <view class="item-box">
          <view class="title">2GB</view>
          <view class="subhead">5.00元</view>
          <view class="tag">小时包</view>
        </view>
      </view>
    </view>
    
    <view class="hot-product">
      <view class="hot-title">
        <text class="title">大家都在买</text>
        <text class="subhead">应急首选,随时充值</text>
      </view>
      
      <scroll-view class="scroll-box" :scroll-x="true" :show-scrollbar="false">
        <view>
          <view class="scroll-item" v-for="item in 10" :key="item">
            <view class="item">
              <view class="title">2GB</view>
              <view class="subhead">5.00元</view>
              <view class="tag">小时包</view>
            </view>
          </view>
        </view>
      </scroll-view>
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
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    padding-bottom: 10vw;

    .input-box {
      width: calc(100% - 6vw);
      margin: 0 auto;
      box-sizing: border-box;
      padding: 3vw 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid #e9e9e9;
      margin-bottom: 5vw;

      .phone-number {
        width: 55%;

        .input {
          width: 100%;
          height: 12vw;
          display: flex;
          align-items: center;
          margin-bottom: 2vw;

          .uni-input {
            font-size: 5vw;
            font-weight: bold;
            margin-right: 2vw;
          }

          .modifier-but {
            width: 7vw;
            height: 7vw;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f6f6f6;
            flex-shrink: 0;

            .icon {
              width: 3.5vw;
              height: 3.5vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              color: #696969;
            }
          }
        }

        .title {
          font-size: 3.5vw;
          color: #999999;
        }
      }

      .more-fun {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .more-item {
          flex-shrink: 0;
          margin-left: 3vw;

          .icon-item {
            width: 8vw;
            height: 8vw;
            background-color: #f7fafe;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 2vw auto 4vw auto;

            .icon {
              width: 4vw;
              height: 4vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              color: #66a5f8;
            }
          }

          .title {
            width: 100%;
            font-size: 3.5vw;
            text-align: center;
            color: #999999;
          }
        }
      }
    }
    .column-title {
      width: 100%;
      box-sizing: border-box;
      padding: 2vw 3vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2vw;
      .title {
        font-size: 4vw;
        font-weight: bold;
        color: #333333;
        margin-right: 2vw;
      }
      .subhead {
        font-size: 3.2vw;
        color: #999999;
        .icon {
          width: 3.5vw;
          height: 3.5vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-left: 1vw;
          color: #ef9056;
        }
      }
      .icon {
        width: 5vw;
        height: 5vw;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
        margin-right: 2vw;
        color: #e67c3b;
      }
    }
    
    .recommend-column {
      width: 100%;
      padding: 0 3vw 3vw 3vw;
      box-sizing: border-box;
      display: flex;
      margin-bottom: 3vw;
      .recommend-item {
        width: 33.33%;
        &:nth-child(1) {
          .item-box {
            background-image: linear-gradient(0deg, #e8885b, #e6615a);
          }
        }
        &:nth-child(2) {
          .item-box {
            background-image: linear-gradient(0deg, #add1f7, #68acf2);
          }
        }
        &:nth-child(3) {
          .item-box {
            background-image: linear-gradient(0deg, #bbebdd, #60bdaf);
          }
        }
        .item-box {
          width: 95%;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 4vw 2vw;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          border-radius: 2vw;
          
          .title {
            font-size: 4vw;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1.5vw;
          }
          .subhead {
            font-size: 3vw;
            text-align: center;
          }
          .tag {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #f3b05b;
            width: 45%;
            box-sizing: border-box;
            padding: 0.5vw 1vw;
            zoom: 0.8;
            font-size: 3vw;
            white-space: nowrap;
            color: #fff;
            border-radius: 2vw 0 2vw 0;
            text-align: center;
          }
        }
      }
    }
    
    .top-up-pack {
      width: 100%;
      padding: 0 3vw 3vw 3vw;
      box-sizing: border-box;
      display: flex;
      margin-bottom: 3vw;
      .pack-item {
        width: 33.33%;
        .item-box {
          width: 95%;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 3.8vw 2vw;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 2vw;
          border: 1px solid #f2a778;
          
          .title {
            font-size: 4vw;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1vw;
            color: #333333;
          }
          .subhead {
            font-size: 3vw;
            text-align: center;
            color: #999999;
          }
          .tag {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #f3b05b;
            width: 45%;
            box-sizing: border-box;
            padding: 0.5vw 1vw;
            zoom: 0.9;
            font-size: 3vw;
            white-space: nowrap;
            color: #fff;
            border-radius: 2vw 0 2vw 0;
            text-align: center;
          }
        }
      }
    }
    
    .hot-product {
      width: 100%;
      box-sizing: border-box;
      padding: 4vw 3vw;
      background-image: linear-gradient(0deg, #e6794b, #fcefe5);
      .hot-title{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 2vw;
        .title {
          font-size: 4.5vw;
          font-weight: bold;
          color: #333333;
          margin-right: 1vw;
        }
        .subhead {
          font-size: 3.5vw;
          color: #272727;
        }
      }
    }







  }
</style>