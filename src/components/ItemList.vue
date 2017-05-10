<template>
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
</template>

<script>
import ItemCardText from './components/ItemCardText'
import ItemCardChart from './components/ItemCardChart'

export default {
  computed: {
    itemListType () {
      return this.$store.state.itemListType
    },
    itemList () {
      return this.$store.state.itemList
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },

  components: {
    ItemCardChart,
    ItemCardText
  }
}
</script>

<style lang="stylus">

</style>
