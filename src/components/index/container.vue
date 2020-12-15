<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind === item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.image" alt="图片" class="image">
          <div class="cbody">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
              <div class="price-info">
                  <span class="current-price-wrapper">
                      <span class="price-symbol numfont">¥</span>
                      <span class="current-price numfont">{{item.price}}</span>
                  </span>
                  <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  props: ['nav'],
  created () {
    api.resultsByKeywords().then((res) => {
      this.resultsData = res.data.data
    })
  },
  methods: {
    over (e) {
      const dom = e.target // 获取移入时候dom元素
      const tagName = dom.tagName.toLowerCase() // 将dom元素标签名转为小写
      if (tagName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据 axios请求
    }
  }
}
</script>

<style lang="scss" >
@import "@/assets/css/index/artistic.scss";
</style>
