<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select title="省份" />
    <m-select title="城市" />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from './select.vue'
export default {
  components: {
    MSelect
  },
  data () {
    return {
      searchWord: '', // 搜索词
      searchList: ['杭州', '宁波', '江苏', '成都'],
      loading: false
    }
  },
  methods: {
    remoteMethod (val) {
      // 请求后段接口，val是输入对值
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
