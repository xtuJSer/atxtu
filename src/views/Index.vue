<template>
  <section class="index">
    <header>
      <h1>湘大空闲教室</h1>
      <p>数据来源于湘大教务系统 (数据有误 == 学校的锅)</p>
      <p>技巧:下方按钮以及绿色按钮都可点按</p>
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

  // computed: {
  //   // itemListType () {
  //   //   return this.$store.state.itemListType
  //   // }
  // },

  // beforeMount () {
  // },

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
