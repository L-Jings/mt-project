<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select title="省份"
      :list="provinceList"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select title="城市"
      :list="cityList"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
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
import api from '@/api/index.js'
export default {
  components: {
    MSelect
  },
  data () {
    return {
      provinceList: [],
      province: '省份',
      cityList: [],
      city: '城市',
      cityActive: false,
      provinceActive: false,
      searchWord: '', // 搜索词
      searchList: ['杭州', '宁波', '江苏', '成都'],
      loading: false,
      cityDisabled: true
    }
  },
  created () {
    api.getProvinceList().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      this.province = item.name
      this.cityDisabled = false
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name
      this.$store.diapatch('setPosition', item)
      this.$router.push({ name: 'index' })
    },
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
