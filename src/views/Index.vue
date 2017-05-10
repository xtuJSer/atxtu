<template>
  <section class="index">
    <header>
      <h1>湘大空闲教室</h1>
      <p>数据来源于湘大教务系统 (数据有误 == 学校的锅)</p>
      <p>提示:下方按钮以及绿色按钮都可点按</p>
      <p>即将迎来大版本变动，请坐稳... 再次感谢你们的支持!!!</p>

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

    <item-list></item-list>
  </section>
</template>

<script>
import ItemList from '../components/ItemList'

export default {
  name: 'index',

  data () {
    return {
      itemListDay: 0,             // 默认为今天
      itemListType: 1             // 默认为文字类型，即获取 time 类型的数据
    }
  },

  watch: {
    itemListDay (value) {
      this.$store.dispatch('FETCH_LIST_DATA', {
        day: this.itemListDay,
        byName: this.itemListType
      })
    },
    itemListType (value) {
      this.$store.dispatch('FETCH_LIST_DATA', {
        day: this.itemListDay,
        byName: this.itemListType
      })
    }
  },

  components: {
    ItemList
  }
}
</script>

<style lang="stylus">
$mobile-width = 768px

.index
  header
    background: linear-gradient(to bottom, #5793f2, #4688f1)
    color: #fff
    text-align: center
    padding: 30px 0 34vh
    margin-bottom: -34vh
    box-sizing: border-box

    h1
      font-size: 40px
      text-shadow: -2px 2px 0 rgba(0,0,0,.1)

    p
      font-size: 14px

    .selector
      display: block
      margin: 20px auto 0
      width: 20
      margin-bottom: 10px
      @media (max-width: $mobild-width)
        width: 94%

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
</style>
