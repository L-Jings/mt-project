<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type">{{item.name}}</i>
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item,index) in curDetail.items">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v,i) in item.items" :key="v+'_'+i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getMenuList().then((res) => {
      this.menuList = res.data.data
    })
  },
  methods: {
    menuEnter (item) { // 鼠标移入标签事件
      this.curDetail = item
    },
    menuLeave () { // 标签鼠标移出事件
      // 设置定时器延迟
      this.timer = setTimeout(() => {
        this.curDetail = null
      }, 200)
    },
    detailEnter () { // 鼠标移入菜单显示
      clearTimeout(this.timer) // 清除定时器，让菜单显示
    },
    detailLeave () { // 鼠标移出菜单消失
      this.curDetail = null
    }
  }
}
</script>
