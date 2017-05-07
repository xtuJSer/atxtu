<template>
  <div id="app">
    <header>
      <h1>湘大空闲教室</h1>
      <p>数据来源于湘大教污系统</p>
    </header>

    <transition name="fade" mode="out-in">
      <div class="item-list">
        <transition-group tag="ul" name="item">
          <item-card v-for="(item, name) in itemList" :key="name" :item="item" :name="name"></item-card>
        </transition-group>
      </div>
    </transition>

    <Loading :isLoading="isLoading"></Loading>
  </div>
</template>

<script>
import axios from 'axios'
import { fetchURL } from './config'
// import mockData from '../mock.js'
import { formatData } from './filter'

import ItemCard from './components/ItemCard'
import Loading from './components/Loading'

export default {
  name: 'app',

  data () {
    return {
      itemList: null,
      isLoading: true
    }
  },

  beforeMount () {
    // this.itemList = formatData(mockData)
    this.fetch(fetchURL)
  },

  methods: {
    fetch (url) {
      axios({
        url,
        method: 'get',
        withCredentials: true
      })
      .then(res => {
        this.itemList = formatData(res.data)
        this.isLoading = false
      })
      .catch(err => {
        throw new Error(err)
      })
    }
  },

  components: {
    ItemCard,
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

header
  background: linear-gradient(to bottom, #5793f2, #4688f1)
  color: #fff
  text-align: center
  padding: 40px 0 50vh
  margin-bottom: -50vh
  box-sizing: border-box

  h1
    font-size: 40px
    text-shadow: -3px 3px 0 rgba(0,0,0,.1)

.fade-enter-active, .fade-leave-active
  transition: all .2s ease
.fade-enter, .fade-leave-active
  opacity: 0
.item-list
  width: $mobile-width
  padding: 30px 0
  margin: 0 auto
  position: relative

@media (max-width: $mobile-width)
  header
    p
      font-size: 13px
  .item-list
    width: 94%
    padding: 3% 0
</style>
