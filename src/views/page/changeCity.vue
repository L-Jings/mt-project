<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市" :list="hotList"/>
        </el-row>
        <el-row>
            <hot title="最近访问" :list="rencentList"/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
  components: {
    Province,
    hot,
    Category
  },
  data () {
    return {
      hotList: [], // 热门城市列表
      rencentList: [] // 最近访问列表
    }
  },
  created () {
    api.getHotCity().then((res) => {
      this.hotList = res.data.data.map((item) => item.name)
    })
    api.getRecentCity().then((res) => {
      this.rencentList = res.data.data.map((item) => item.name)
    })
  }
}
</script>

Province
