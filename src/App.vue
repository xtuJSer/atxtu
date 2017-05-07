<template>
  <div id="app">
    <header>
      <h1>湘大空闲教室</h1>
      <p>每日定期更新，数据来源于湘大官方教务系统</p>
    </header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
// import { fetchURL } from './config'
import mockData from '../mock.js'
import formatData from './filter'

export default {
  name: 'app',

  data () {
    return {
      lists: null
    }
  },

  beforeMount () {
    this.lists = formatData(mockData)
  },

  methods: {
    fetch (url) {
      axios({
        url,
        method: 'get',
        withCredentials: true
      })
      .then(res => {
        this.lists = formatData(res.data)
      })
      .catch(err => {
        throw new Error(err)
      })
    }
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
  padding: 40px
  h1
    font-size: 40px
    text-shadow: -3px 3px 0 rgba(0,0,0,.1)
.view
  width: $mobile-width
  padding: 30px 0
  margin: 0 auto
  position: relative
.fade-enter-active, .fade-leave-active
  transition: all .2s ease
.fade-enter, .fade-leave-active
  opacity: 0

@media (max-width: $mobile-width)
  header nav
      padding: 15px 3%
    a
      margin-right: .8rem !important
  .view
    width: 94%
    padding: 3% 0
</style>
