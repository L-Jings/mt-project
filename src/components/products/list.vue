<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
      </li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
  components: {
    Item
  },
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false
        }
      ],
      productList: [
        {
          image: 'https://img.meituan.net/msmerchant/c26a4a9582b7d6ce9eeb099bdb46fe77300013.jpg@220w_125h_1e_1c',

          title: '火鸡老店',

          type: 'food',

          score: '4.1',

          commentNum: 0,

          comment: [
            {
              username: 'xxxx',

              evalaute: '好吃'
            }
          ],

          tab: ['火锅', '沙河'],

          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',

          avgPrice: 64,

          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',

              price: 909,

              counterPrice: 1150,

              saleNum: 0,

              priceType: '元'
            }
          ]
        }
      ]
    }
  }
}
</script>
