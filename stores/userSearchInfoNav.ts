import { defineStore } from 'pinia';

export const useUserSearchInfoNavStore = defineStore('counter', {
  state: () => {
    return { 
      isShowMenu: false, // 是否显示菜单
      isShowUserMenu: false, // 是否显示账号切换
    };
  },
  actions: {
    /*
    * 切换显示菜单
    */
    switchMenu() {
      this.isShowMenu = !this.isShowMenu
    },
    /*
    * 切换显示菜单
    */
    switchUserMenu() {
      console.log('      console.log56456464()')
      this.isShowUserMenu = !this.isShowUserMenu
    },
  },
});