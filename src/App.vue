<template>
  <div id="app">
    <header>
      <h1>湘大空闲教室</h1>
      <p>数据来源于湘大教务系统（数据有误 = 学校的锅）</p>
      <p style="font-size: 12px">技巧:下方按钮以及绿色按钮都可点按。没想到吧.jpg</p>

      <article class="ad">
        <h4>😘相关推广</h4>
        <ul>
          <li><a href="https://trend.magicallu.cn/">湘大动态资讯</a></li>
          <li><a href="https://free.magicallu.cn/">湘大情侣课表</a></li>
        </ul>
      </article>

      <div class="selector">
        <input id="switchType" type="checkbox" :checked="itemListType" v-model="itemListType">
        <label for="switchType">
          <span>{{ itemListType ? '图表' : '文字' }}</span>
        </label>

        <input id="switchDay" type="checkbox" :checked="itemListDay" v-model="itemListDay">
        <label for="switchDay">
          <span>{{ itemListDay ? '明天' : '今天' }}</span>
        </label>

      </div>
    </header>

    <transition name="fade" mode="out-in">
      <div class="item-list" v-if="!isLoading">
        <ul v-if="Number(itemListType) === 0">
          <item-card-text v-for="(item, name) in itemList" :key="name" :item="item" :name="name"></item-card-text>
        </ul>
        <ul v-else>
          <item-card-chart v-for="(item, idx) in itemList" :key="idx" :item="item" :idx="idx"></item-card-chart>
        </ul>
      </div>
    </transition>

    <Loading :isLoading="isLoading"></Loading>
  </div>
</template>

<script>
import axios from 'axios'
import { fetchURL } from './config'
// import mockData from '../mock.js'
import { formatData, sortData } from './filter'

import ItemCardText from './components/ItemCardText'
import ItemCardChart from './components/ItemCardChart'
import Loading from './components/Loading'

import './public/style/icon.css'

export default {
  name: 'app',

  data () {
    return {
      itemList: null,
      isLoading: true,
      itemListDay: 0,             // 默认为今天
      itemListType: 1             // 默认为文字类型，即获取 time 类型的数据
    }
  },

  computed: {
    // calcDay () {
    //   let day = new Date()
    //   return day.getFullYear() + '年' + (day.getMonth() + 1) + '月' + (day.getDate() + this.itemListDay) + '日 ' + this.getDay
    // },
    getDay () {
      let day = ['日', '一', '二', '三', '四', '五', '六']
      return '周' + day[(new Date().getDay() + this.itemListDay) % 7]
    }
  },

  beforeMount () {
    // this.itemList = formatData(mockData)
    this.fetch(fetchURL, this.itemListDay, this.itemListType)
  },

  methods: {
    fetch (url, day, byName) {
      this.isLoading = true
      axios({
        url,
        method: 'post',
        data: {
          day,
          byName
        },
        withCredentials: true
      })
      .then(res => {
        this.itemList = byName ? sortData(res.data) : formatData(res.data)
        this.isLoading = false
      })
      .catch(err => {
        throw new Error(err)
      })
    }
  },

  watch: {
    itemListDay (value) {
      this.fetch(fetchURL, this.itemListDay, Number(this.itemListType))
    },
    itemListType (value) {
      this.fetch(fetchURL, this.itemListDay, Number(this.itemListType))
    }
  },

  components: {
    ItemCardText,
    ItemCardChart,
    Loading
  }
}
</script>

<style lang="stylus">
$mobile-width = 768px

*
  padding: 0
  margin: 0
body
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  background-color: #f6f6f6
  overflow-y: scroll
a
  color: #34495e
  text-decoration: none
ul
  list-style: none
::selection
  background: #4688f1
  color: #fff

#app
  header
    background: linear-gradient(to bottom, #5793f2, #4688f1)
    color: #fff
    text-align: center
    padding: 40px 0 50vh
    margin-bottom: -50vh
    box-sizing: border-box

    h1
      font-size: 40px
      text-shadow: -2px 2px 0 rgba(0,0,0,.1)

  .ad
    font-size: 13px
    padding-top: 10px
    a
      text-decoration: underline
      color: #fff

  .fade-enter-active, .fade-leave-active
    transition: all .2s ease
  .fade-enter, .fade-leave-active
    opacity: 0
  .item-list
    width: $mobile-width
    padding: 30px 0
    margin: 0 auto
    position: relative

  .selector
    display: block
    margin: 20px auto 0
    width: 20
    margin-bottom: 10px
    @media (max-width: $mobild-width)
      width: 94%
    // select
    //   color: #333
    //   background: #fff
    //   border-radius: 4px
    //   box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
    //   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
    //   // padding: 6px 12px
    //   padding: 6px 12px
    //   border: 1px solid #ccc
    //   height: 34px
    //   line-height: 34px
    //   font-size: 14px
    //   background-image: none
    //   width: 80px

    /* 隐藏所有checkbox */
    input[type='checkbox']
      display: none

    label
      display: inline-block
      cursor: pointer
      width: 60px
      font-weight: 600
      padding: 5px 0
      transition: background 0.5s linear
      border-radius: 2px
      box-sizing: border-box
      border: 1px solid #fff
    input[type='checkbox']:not(:checked)+label
      border: 1px dashed #fff
    input[type='checkbox']:checked+label
      background: #fff
      color: #4688f1


  @media (max-width: $mobile-width)
    header
      p
        font-size: 13px
    .item-list
      width: 94%
      padding: 3% 0
</style>
