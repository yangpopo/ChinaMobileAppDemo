<template>
  <view class="user-seach-info" @click.stop
    :style="{'--font-color': styleType.fontColor, '--background-color': styleType.backgroundColor}">
    <view class="user" v-if="false" @click="openUserMenu">登录</view>
    <view class="user" v-else @click="openUserMenu">
      <view class="phone">
        158****1234
      </view>
      <view class="switch">切换<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1776">
          <path
            d="M956.994933 307.22722c4.950755-11.95017 2.214435-25.705452-6.931876-34.851763L799.528576 121.840976l-45.227064 45.227064 95.941096 95.941096-722.30068 0 0 63.960731 799.507086 0C940.384627 326.969866 952.046225 319.179436 956.994933 307.22722zM959.430402 646.774543L159.923316 646.774543c-12.935614 0-24.596188 7.791453-29.54592 19.741623-4.950755 11.95017-2.214435 25.705452 6.931876 34.851763l150.534482 150.534482 45.227064-45.226041-95.941096-95.941096 722.30068 0L959.430402 646.774543z"
            p-id="1777"></path>
        </svg></view>

      <Transition name="accountmenu">
        <view class="account-box" v-if="userSearchInfoNavState.isShowUserMenu" @click.stop>
          <view class="head">手机号切换</view>
          <view class="current-account">当前号码:158****1234</view>
          <view class="waiting-account" v-for="item in 3" :key="item">
            <text class="title">158****0000</text>
            <view class="switch-but">切换</view>
          </view>
          <view class="login-account">
            <text class="title">其他账号登陆</text>
            <view class="login-but"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="57007">
                <path
                  d="M881 562H81c-27.6 0-50-22.4-50-50s22.4-50 50-50h800c27.6 0 50 22.4 50 50s-22.4 50-50 50zM907.6 540.7L695.5 328.6c-19.5-19.5-19.5-51.2 0-70.7s51.2-19.5 70.7 0L978.4 470c19.5 19.5 19.5 51.2 0 70.7-19.6 19.6-51.2 19.6-70.8 0zM695.5 695.4l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7L766.2 766.1c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7z"
                  p-id="57008"></path>
              </svg>
            </view>
          </view>
          <svg @click="userSearchInfoNavState.switchUserMenu" class="close-but" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="58000">
            <path
              d="M913.18949273 968.10553227c-11.29527793 0-22.57674747-4.363457-31.11034375-13.06275419L76.05474375 131.89594663c-16.83244963-17.17765984-16.54247307-44.76685948 0.64899518-61.57169228 17.16385143-16.84625804 44.75305108-16.52866465 61.57169232 0.62137836L944.29983647 894.07865573c16.83244963 17.17765984 16.54247307 44.76685948-0.64899519 61.5716923-8.46455425 8.31266175-19.4560472 12.45518421-30.46134855 12.45518424z"
              p-id="58001"></path>
            <path
              d="M107.1788959 968.10553227c11.29527793 0 22.57674747-4.363457 31.11034375-13.06275419l806.01059682-823.13302303c16.83244963-17.17765984 16.54247307-44.76685948-0.64899519-61.5716923-17.16385143-16.84625804-44.75305108-16.52866465-61.5716923 0.62137837L76.05474375 894.07865573c-16.83244963 17.17765984-16.54247307 44.76685948 0.64899518 61.5716923 8.46455425 8.31266175 19.46985561 12.45518421 30.47515697 12.45518424z"
              p-id="58002"></path>
          </svg>
        </view>
      </Transition>

    </view>
    <view class="search" @click="skipPage('/pages/search/hotSearch')">
      <svg class="icon-search" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20491">
        <path
          d="M932.571429 493.714286C932.571429 261.485714 744.228571 73.142857 512 73.142857S91.428571 261.485714 91.428571 493.714286s188.342857 420.571429 420.571429 420.571428c89.6 0 171.885714-27.428571 239.542857-74.971428l111.542857 111.542857 51.2-51.2-106.057143-106.057143c76.8-76.8 124.342857-182.857143 124.342858-299.885714zM164.571429 493.714286C164.571429 301.714286 320 146.285714 512 146.285714s347.428571 155.428571 347.428571 347.428572-155.428571 347.428571-347.428571 347.428571S164.571429 685.714286 164.571429 493.714286z"
          p-id="20492"></path>
      </svg>
      <swiper class="hot-search" :autoplay="true" :vertical="true" :disable-touch="true" :interval="3000">
        <swiper-item class="hot-search-key">号卡中心</swiper-item>
        <swiper-item class="hot-search-key">7天5G</swiper-item>
        <swiper-item class="hot-search-key">腾讯会员,5G</swiper-item>
        <swiper-item class="hot-search-key">宽带,1000m</swiper-item>
      </swiper>
    </view>
    <view class="info" @click="skipPage('/pages/messageCenter/messageCenter')">
      <svg class="icon-info" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19450">
        <path
          d="M531.2 32c-275.2 0-499.2 192-499.2 428.8 0 140.8 51.2 256 153.6 339.2 0 0 0 57.6 0 140.8 0 38.4 12.8 51.2 32 51.2 19.2 0 32-12.8 32-12.8l153.6-89.6c32 6.4 96 12.8 128 12.8 275.2 0 460.8-204.8 460.8-441.6S761.6 32 531.2 32zM531.2 838.4c-25.6 0-89.6-6.4-115.2-6.4l-25.6-6.4-19.2 12.8-115.2 64 0-102.4L256 768l-25.6-19.2c-83.2-70.4-128-172.8-128-288 0-204.8 192-364.8 435.2-364.8 185.6 0 396.8 153.6 396.8 364.8C928 678.4 755.2 838.4 531.2 838.4z"
          p-id="19451"></path>
        <path d="M288 467.2m-57.6 0a0.9 0.9 0 1 0 115.2 0 0.9 0.9 0 1 0-115.2 0Z" p-id="19452"></path>
        <path d="M512 467.2m-57.6 0a0.9 0.9 0 1 0 115.2 0 0.9 0.9 0 1 0-115.2 0Z" p-id="19453"></path>
        <path d="M736 467.2m-57.6 0a0.9 0.9 0 1 0 115.2 0 0.9 0.9 0 1 0-115.2 0Z" p-id="19454"></path>
      </svg>
      <view class="info-state"></view>
    </view>
    <view class="more">
      <svg @click="userSearchInfoNavState.switchMenu" class="icon-more" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="25374">
        <path
          d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0-85.333333c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z"
          p-id="25375"></path>
        <path
          d="M554.666667 469.333333h170.666666v85.333334h-170.666666v170.666666h-85.333334v-170.666666H298.666667v-85.333334h170.666666V298.666667h85.333334z"
          p-id="25376"></path>
      </svg>
      <Transition name="menu-fade">
        <view class="more-menu" v-if="userSearchInfoNavState.isShowMenu">
          <!-- <view class="menu-item">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31579">
              <path
                d="M846.04 866.77c-17.08 2.03-32.57-10.18-34.59-27.26-0.22-1.9-0.27-3.81-0.15-5.71v-123c0-33.73-22.17-33.73-30.53-33.73-21.28-0.46-38.91 16.43-39.36 37.72-0.01 0.46-0.01 0.92 0 1.37v117.66c-0.76 18.9-16.71 33.61-35.61 32.84-17.83-0.72-32.12-15.01-32.84-32.84V647.68c-1.23-17.23 11.74-32.19 28.97-33.41 1.69-0.12 3.39-0.1 5.08 0.05a31.953 31.953 0 0 1 31.33 17.76 89.435 89.435 0 0 1 54.99-17.76c54.11 0 86.45 33.59 86.45 90.03V833.8a32.25 32.25 0 0 1-8.88 23.72 34.026 34.026 0 0 1-24.82 9.33l-0.04-0.08z m-233.12-7.46h-134.7c-42.77 0-61.85-18.96-61.85-61.57V608.07c0-42.52 19.09-61.57 61.85-61.57h128.74c17.92 0 32.45 14.53 32.45 32.45s-14.53 32.45-32.45 32.45H490.73c-1.22-0.08-2.45 0.09-3.6 0.5 0.13 0-0.15 0.8-0.15 2.89v52.58h106c16.33-1.66 30.91 10.24 32.57 26.57 0.17 1.68 0.2 3.37 0.08 5.06 0.98 16.66-11.73 30.97-28.4 31.95-1.41 0.08-2.83 0.07-4.24-0.05H486.9V791c-0.04 1.06 0.08 2.13 0.35 3.15 1.12 0.15 2.25 0.23 3.38 0.24h122.31c16.96-1.07 31.58 11.81 32.65 28.76 0.07 1.16 0.08 2.33 0.02 3.5 1.35 16.68-11.07 31.3-27.75 32.65-1.64 0.13-3.28 0.13-4.92 0h-0.02zM327.54 482.85c-17.36 2.36-33.34-9.8-35.7-27.16-0.3-2.21-0.37-4.44-0.2-6.67V370.5h-85.27c-45.86 0-66.31-20.52-66.31-66.31v-93.87c0-45.58 20.52-65.9 66.31-65.9h85.27v-31.53c-1.38-17.11 11.37-32.11 28.48-33.49 1.92-0.15 3.84-0.13 5.76 0.07 30.26 0 36.63 18.17 36.63 33.42v31.59h86.09c45.86 0 66.33 20.34 66.33 65.88v93.89c0 45.86-20.52 66.29-66.33 66.29h-86.05v78.52c1.25 17.47-11.9 32.65-29.37 33.91-1.88 0.13-3.76 0.1-5.63-0.1v-0.02zM217.21 211.27c-6.47 0-7.07 0.6-7.07 7.07v78.2c0 6.53 0.6 7.15 7.07 7.15h74.43v-92.42h-74.43z m145.35 92.38h75.29c6.29 0 7.09-0.8 7.09-7.07v-78.25c0-6.29-0.8-7.09-7.09-7.09h-75.31v92.42h0.02z m151.42 655.91C266.43 958.82 66.36 757.55 67.1 510c0.1-35 4.31-69.86 12.52-103.88 4.81-19 23.92-30.68 43.03-26.29 19.1 4.61 30.86 23.81 26.29 42.91-48.93 202.33 75.42 406.01 277.75 454.94a376.924 376.924 0 0 0 87.29 10.56c19.69 0.02 35.64 15.99 35.63 35.69-0.02 19.67-15.96 35.61-35.63 35.63z m398.49-310.05c-19.69 0-35.66-15.96-35.66-35.65 0-2.95 0.37-5.9 1.09-8.76 51.31-201.82-70.7-407.02-272.52-458.33-29.89-7.6-60.59-11.5-91.43-11.62-19.68 0-35.64-15.95-35.64-35.63 0-19.68 15.95-35.64 35.63-35.64h0.01c247.57 0.76 447.65 202.08 446.89 449.65-0.11 36.8-4.76 73.44-13.83 109.1-4 15.8-18.23 26.88-34.54 26.88z"
                p-id="31580"></path>
            </svg>English
          </view> -->
          <view class="menu-item" @click="skipCaring">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32432">
              <path
                d="M957.812555 342.146521c-10.641361-80.458473-57.284681-150.320611-127.974673-191.667298-99.018178-57.929364-227.815589-37.896098-313.223794 48.675606l-4.055362 4.121877-4.065596-4.121877c-85.418438-86.571704-214.20664-106.60497-313.223794-48.675606-70.680782 41.34157-117.323079 111.199615-127.96444 191.662181-10.733459 81.179904 15.672958 160.744008 72.438822 218.291678 12.105712 12.263301 31.884175 12.400425 44.152593 0.299829 12.277628-12.110829 12.410658-31.879058 0.304945-44.157709-43.136449-43.720757-63.169715-104.31788-54.987359-166.252465 8.100492-61.208037 43.664475-114.400516 97.584526-145.944953 74.339102-43.476187 171.893952-27.600615 237.238193 38.627762l26.28362 26.649963c5.864568 5.950526 13.873985 9.299807 22.228257 9.299807 8.354272 0 16.353456-3.349281 22.228257-9.289574l26.293853-26.649963c65.344241-66.243727 162.898067-82.115206 237.238193-38.637995 53.930283 31.544437 89.494267 84.742033 97.594759 145.955186 8.182356 61.929468-11.861142 122.521474-54.997592 166.242232-12.105712 12.272511-11.973706 32.04688 0.294712 44.157709 6.088672 6.001691 14.016225 8.994861 21.933545 8.994861 8.05956 0 16.120143-3.104711 22.228257-9.29469C942.130388 502.890528 968.535781 423.326425 957.812555 342.146521z"
                fill="#fff" p-id="32433"></path>
              <path
                d="M767.352759 590.56945 517.867638 844.049558c-1.850138 1.880837-3.913123 2.276856-5.305843 2.276856-1.402953-0.005117-3.455705-0.396019-5.305843-2.27174L257.760598 590.56945c-12.105712-12.323677-31.863708-12.476149-44.152593-0.401136-12.308327 12.085246-12.491499 31.853475-0.406253 44.157709l249.597685 253.581416c13.264095 13.447267 30.92943 20.856004 49.742914 20.866237 0.010233 0 0.010233 0 0.020466 0 18.813484 0 36.489052-7.40976 49.76338-20.866237l249.587452-253.581416c12.085246-12.308327 11.902074-32.077579-0.406253-44.157709C799.207257 578.083068 779.427772 578.245773 767.352759 590.56945z"
                fill="#fff" p-id="32434"></path>
              <path
                d="M390.70547 333.055468c-17.247826 0-31.224142 13.980409-31.224142 31.224142l0 30.461779c0 17.242709 13.975293 31.224142 31.224142 31.224142s31.224142-13.980409 31.224142-31.224142l0-30.461779C421.929612 347.035878 407.954319 333.055468 390.70547 333.055468z"
                fill="#fff" p-id="32435"></path>
              <path
                d="M634.407887 333.055468c-17.247826 0-31.224142 13.980409-31.224142 31.224142l0 30.461779c0 17.242709 13.975293 31.224142 31.224142 31.224142s31.224142-13.980409 31.224142-31.224142l0-30.461779C665.632029 347.035878 651.656737 333.055468 634.407887 333.055468z"
                fill="#fff" p-id="32436"></path>
              <path
                d="M589.5574 474.461035c-14.300704-9.407254-33.58184-5.386684-43.145659 8.756431-0.132006 0.193405-13.609972 19.748786-34.161031 19.748786-19.9821 0-32.413224-18.092054-33.256428-19.361977-9.157567-14.422478-28.245298-18.808368-42.821271-9.762341-14.646582 9.097192-19.149129 28.347628-10.051937 42.998303 11.211343 18.040888 41.956577 48.573275 86.129636 48.573275 43.948955 0 75.080999-30.30419 86.546122-48.213072C608.014774 502.808664 603.827405 483.858056 589.5574 474.461035z"
                fill="#fff" p-id="32437"></path>
            </svg>
            关怀版
          </view>
          <view class="menu-item" @click="openScanQRCode">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33460">
              <path
                d="M708.775642 131.306558l179.428555 0 0 179.428555c0 18.584264 15.069207 33.643238 33.643238 33.643238s33.643238-15.057951 33.643238-33.643238L955.490673 131.306558c0-43.280736-24.00574-67.285452-67.285452-67.285452L708.775642 64.021106c-18.574031 0-33.643238 15.057951-33.643238 33.643238S690.202635 131.306558 708.775642 131.306558zM91.989087 344.378351c18.584264 0 33.643238-15.069207 33.643238-33.643238L125.632325 131.306558l187.838086 0c18.584264 0 33.643238-15.069207 33.643238-33.643238s-15.057951-33.643238-33.643238-33.643238L134.040832 64.020082c-43.280736 0-75.694983 24.00574-75.694983 67.285452l0 179.428555C58.34585 329.309144 73.4038 344.378351 91.989087 344.378351zM921.848459 680.80766c-18.574031 0-33.643238 15.057951-33.643238 33.643238l0 179.429579L708.775642 893.880477c-18.574031 0-33.643238 15.057951-33.643238 33.643238s15.069207 33.643238 33.643238 33.643238l179.428555 0c43.280736 0 67.285452-24.00574 67.285452-67.285452L955.48965 714.450898C955.490673 695.866634 940.421466 680.80766 921.848459 680.80766zM313.470411 893.879454l-187.838086 0L125.632325 714.450898c0-18.574031-15.057951-33.643238-33.643238-33.643238s-33.643238 15.069207-33.643238 33.643238l0 179.429579c0 43.280736 32.41527 67.285452 75.694983 67.285452l179.429579 0c18.584264 0 33.643238-15.069207 33.643238-33.643238S332.054675 893.879454 313.470411 893.879454zM955.490673 490.164692 58.34585 490.164692c-18.574031 0-33.643238 15.057951-33.643238 33.643238 0 18.584264 15.069207 33.643238 33.643238 33.643238l897.145847 0c18.574031 0 33.643238-15.057951 33.643238-33.643238C989.133911 505.222643 974.064704 490.164692 955.490673 490.164692z"
                fill="#fff" p-id="33461"></path>
            </svg>
            扫一扫
          </view>
          <view class="menu-item" @click="openShareMenu"><svg class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="34163">
              <path
                d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z"
                fill="#fff" p-id="34164"></path>
            </svg>
            分享</view>
          <view class="menu-item" @click="skipPage('/pages/service/myService')">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="35029">
              <path
                d="M927.616 465.6C923.328 236.704 745.888 51.808 528 51.808h-32c-217.888 0-395.328 184.896-399.616 413.76C58.112 487.744 32 528.672 32 576v64c0 70.592 57.408 128 128 128s128-57.408 128-128v-64a128.064 128.064 0 0 0-126.784-127.872C173.728 262.688 318.912 115.808 496 115.808h32c177.12 0 322.272 146.88 334.784 332.32A128.064 128.064 0 0 0 736 576v64c0 57.792 38.72 106.176 91.392 122.016a337.504 337.504 0 0 1-191.936 124.48A79.712 79.712 0 0 0 560 832a80 80 0 1 0 0 160 79.68 79.68 0 0 0 67.872-38.112 402.432 402.432 0 0 0 278.24-193.6C955.968 742.816 992 695.776 992 640v-64c0-47.328-26.112-88.256-64.384-110.4zM224 576v64c0 35.296-28.704 64-64 64s-64-28.704-64-64v-64c0-35.296 28.704-64 64-64s64 28.704 64 64z m704 64c0 34.304-27.2 62.176-61.12 63.712l-2.496-1.184c-0.224 0.512-0.576 0.928-0.8 1.408A64 64 0 0 1 800 640v-64c0-35.296 28.704-64 64-64s64 28.704 64 64v64z"
                fill="#fff" p-id="35030"></path>
            </svg>
            在线客服
          </view>
        </view>
      </Transition>
    </view>
    
  </view>
</template>

<script lang="ts" setup>
  import { ref, defineProps, computed } from 'vue'
  import { useUserSearchInfoNavStore } from '@/stores/userSearchInfoNav'
  import { useShareMenuStore } from '@/stores/shareMenu'

  const userSearchInfoNavState = useUserSearchInfoNavStore() // 引入用户信息状态
  const shareMenuStore = useShareMenuStore() // 引入分享菜单状态


  const props = defineProps(['styleType']) // 引入样式类型

  let styleType = computed(() => {
    if (props.styleType == 'light') {
      return {
        'fontColor': '#fff',
        'backgroundColor': 'rgba(255, 255, 255, 0.5)',
      }
    } else if (props.styleType == 'dark') {
      return {
        'fontColor': '#2d2b2c',
        'backgroundColor': '#ebe9ea',
      }
    }
  })

  const isShowUserMenu = ref(false) // 是否
  /**
   * 打开账户菜单
  */
  const openUserMenu = () => {
    // 已登陆
    userSearchInfoNavState.isShowUserMenu = true
  }

  /**
   * 跳转搜索
  */
  const skipPage = (data : string) => {
    uni.navigateTo({
      url: data
    })
  }

  /**
   * 跳转关怀版
  */
  const skipCaring = () => {
    uni.showToast({
      title: '正在开发,敬请期待!',
      icon: 'none'
    })
    userSearchInfoNavState.isShowMenu = false
  }

  /**
   * 打开扫一扫
  */
  const openScanQRCode = () => {
    // #ifdef H5
    uni.showToast({
      title: '仅支持在app或小程序中调用摄像头',
      icon: 'none'
    })
    // #endif
    // #ifndef H5
    uni.scanCode({
      scanType: ['qrCode'],
      success: (res) => {
        console.log('扫描成功!', res)
      },
      fail: (err) => {
        console.log('扫描失败!', err)
      }
    })
    // #endif
    userSearchInfoNavState.isShowMenu = false
  }

  /**
   * 打开分享
  */
  const openShareMenu = () => {
    shareMenuStore.isShowShareMenu = true
    userSearchInfoNavState.isShowMenu = false
  }
</script>
<style lang="scss" scoped>
  .user-seach-info {
    width: 100vw;
    background-color: transparent;
    box-sizing: border-box;
    padding: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .user {
      min-width: 7vw;
      font-size: 3.5vw;
      color: var(--font-color);
      flex-shrink: 0;
      position: relative;

      .phone {
        font-size: 3.5vw;
        font-weight: bold;
        color: var(--font-color);
        margin-bottom: -1vw;
      }

      .switch {
        display: flex;
        align-items: center;
        font-size: 3vw;
        color: var(--font-color);

        .icon {
          width: 3vw;
          height: 3vw;
          vertical-align: middle;
          fill: currentColor;
          overflow: hidden;
          margin-left: 1vw;
        }
      }

      .account-box {
        width: 60vw;
        position: absolute;
        box-sizing: border-box;
        padding: 3vw;
        background-color: #ffffff;
        border-radius: 3vw;
        z-index: 5;
        box-shadow: 0vw 0.25vw 1vw #bdbdbd;

        .head {
          width: 100%;
          font-size: 4vw;
          font-weight: bold;
          color: #090909;
          text-align: center;
          padding: 1vw 0;
        }

        .current-account {
          width: 100%;
          text-align: center;
          color: #999999;
          box-sizing: border-box;
          padding: 1vw 0;
          margin-bottom: 2vw;
        }

        .waiting-account {
          width: 100%;
          background-color: #f6f7f8;
          box-sizing: border-box;
          padding: 3vw 2vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2vw;
          border-radius: 2vw;

          .title {
            font-size: 4vw;
            font-weight: bold;
            color: #090909;
          }

          .switch-but {
            width: 11vw;
            box-sizing: border-box;
            padding: 1vw 1vw;
            border-radius: 3vw;
            font-size: 3vw;
            font-weight: bold;
            color: #fff;
            background-color: #387ef6;
            display: flex;
            justify-content: center;
            align-items: center
          }
        }

        .login-account {
          width: 100%;
          background-color: #f6f7f8;
          box-sizing: border-box;
          padding: 3vw 2vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2vw;
          border-radius: 2vw;

          .title {
            font-size: 4vw;
            font-weight: bold;
            color: #090909;
          }

          .login-but {
            width: 11vw;
            box-sizing: border-box;
            padding: 1.2vw 1vw;
            border-radius: 3.5vw;
            border: 1px solid #999999;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
              width: 3vw;
              height: 3vw;
              vertical-align: middle;
              fill: currentColor;
              overflow: hidden;
              color: #999999;
            }
          }
        }


      }

      .close-but {
        position: absolute;
        top: 5vw;
        right: 3vw;
        width: 4vw;
        height: 4vw;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
        color: #ababab;
        z-index: 5;
      }
    }

    .search {
      width: 100%;
      background-color: var(--background-color);
      box-sizing: border-box;
      padding: 1vw 1.5vw;
      border-radius: 5vw;
      margin: 0 3vw;
      border: 1px solid rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;

      .icon-search {
        width: 4vw;
        height: 4vw;
        overflow: hidden;
        fill: currentColor;
        color: var(--font-color);
        margin-right: 2vw;
      }

      .hot-search {
        width: 100%;
        height: 5vw;

        .hot-search-key {
          font-size: 3.5vw;
          color: var(--font-color);
        }
      }
    }

    .info {
      width: 5vw;
      height: 5vw;
      position: relative;
      flex-shrink: 0;

      .icon-info {
        width: 5vw;
        height: 5vw;
        overflow: hidden;
        fill: currentColor;
        color: var(--font-color);
      }

      .info-state {
        position: absolute;
        width: 1.5vw;
        height: 1.5vw;
        border-radius: 50%;
        background-color: #ff0000;
        top: 0;
        right: 0;
      }
    }

    .more {
      width: 5vw;
      height: 5vw;
      position: relative;
      margin-left: 3vw;

      .icon-more {
        width: 5vw;
        height: 5vw;
        overflow: hidden;
        fill: currentColor;
        color: var(--font-color);
      }

      .more-menu {
        position: absolute;
        z-index: 9;
        top: 7vw;
        right: -2vw;
        background-color: #161616;
        box-sizing: border-box;
        padding: 1vw 2.5vw;
        border-radius: 2vw;

        &:before {
          content: '';
          width: 3vw;
          height: 3vw;
          top: -1.3vw;
          right: 3vw;
          background-color: #161616;
          transform: rotate(45deg);
          position: absolute;
        }

        .menu-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 3.5vw;
          color: #fff;
          padding: 2vw 0;
          white-space: nowrap;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          &:last-of-type {
            border-bottom: none;
          }

          .icon {
            width: 4.5vw;
            height: 4.5vw;
            overflow: hidden;
            margin-right: 1.5vw;
          }
        }
      }

    }

    .menu-fade-enter-active,
    .menu-fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .menu-fade-enter-from,
    .menu-fade-leave-to {
      opacity: 0;
    }

    .accountmenu-enter-active,
    .accountmenu-leave-active {
      transition: opacity 0.5s ease;
    }

    .accountmenu-enter-from,
    .accountmenu-leave-to {
      opacity: 0;
    }
    
  }
</style>