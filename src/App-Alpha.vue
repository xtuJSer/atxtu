<template>
  <div id="app">
    <menu>
      <nav>
        <a href="https://trend.magicallu.cn/">那些事儿</a>
        <a href="https://free.magicallu.cn/">情侣课表</a>
        <a href="#">敬请期待</a>
        <!--<router-link :to="/updata">日志</router-link>-->
        <!--<router-link :to="/about">关于</router-link>-->
      </nav>
    </menu>

    <router-view></router-view>

    <Loading :isLoading="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from './components/Loading'
import './public/style/icon.css'

export default {
  name: 'app',

  data () {
    return {
      itemListDay: 0,             // 默认为今天
      itemListType: 1             // 默认为文字类型，即获取 time 类型的数据
    }
  },

  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },

  beforeMount () {
    this.$store.dispatch('FETCH_LIST_DATA', {
      day: this.itemListDay,
      byName: this.itemListType
    })
  },

  watch: {
    itemListDay (value) {
    },
    itemListType (value) {
    }
  },

  components: {
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

  menu
    width: 100%
    height: 60px
    box-shadow: 0px 1px 3px rgba(0,0,0,.16)
    background: #fff
    box-sizing: border-box
    nav
      padding: 15px 0
      font-weight: 500
      margin: 0 auto
      width: $mobile-width
    a
      line-height: 30px
      letter-spacing: .03rem
      display: inline-block
      vertical-align: middle
      margin-right: 20px
      &:hover
        transition: all .4s ease
        color: #4688f1

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
    nav
      // padding: 15px 10px
      width: 94% !important
    .item-list
      width: 94%
      padding: 3% 0
</style>
