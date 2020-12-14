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
      <li>
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img src="" alt="" class="image">
          <div class="cbody">
              <div class="title"></div>
              <div class="sub-title"></div>
              <div class="price-info">
                  <span class="current-price-wrapper">
                      <span class="price-symbol numfont">¥</span>
                      <span class="current-price numfont"></span>
                  </span>
                  <span class="sold bottom-right-info"></span>
              </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  props: ['nav'],
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
