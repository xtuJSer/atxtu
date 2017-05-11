<template>
  <div id="app">
    <menu>
      <nav>
        <router-link to="/" exact>空闲教室</router-link>
        <!--<router-link to="/update">日志</router-link>-->
        <router-link to="/about" exact>关于</router-link>
        <a href="https://trend.magicallu.cn/">那些事儿</a>
        <a href="https://free.magicallu.cn/">情侣课表</a>
      </nav>
    </menu>

    <!--<transition name="fade">-->
    <router-view></router-view>
    <!--</transition>-->

    <Loading :isLoading="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from './components/Loading'
import './public/style/icon.css'

export default {
  name: 'app',

  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },

  beforeMount () {
    this.$store.dispatch('FETCH_LIST_DATA', {
      day: this.$store.state.itemListDay,
      byName: this.$store.state.itemListType
    })
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
      &:last-child
        margin-right: 0
      &.router-link-active
        color: #4688f1

  header
    background: linear-gradient(to bottom, #5793f2, #4688f1)
    color: #fff
    text-align: center
    padding: 30px 0 34vh
    margin-bottom: -34vh
    box-sizing: border-box
    max-height: 500px
    overflow: hidden

    h1
      font-size: 40px
      text-shadow: -2px 2px 0 rgba(0,0,0,.1)

    p
      font-size: 15px
      font-weight: 500

  .fade-enter-active, .fade-leave-active
    transition: all .2s ease
  .fade-enter, .fade-leave-active
    opacity: 0

  @media (max-width: $mobile-width)
    header
      p
        font-size: 13px

    nav
      width: 94% !important
      a
        font-size: 13px
        margin-right: 10px

    .item-list
      width: 94%
      padding: 3% 0

    .about figure
      width: 94%
</style>
