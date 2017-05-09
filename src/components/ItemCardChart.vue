<template>
  <li class="item-card-chart">
    <h2>{{ item.name }}</h2>
    <div class="item-content">
      <table>
        <thead>
          <tr>
            <th>教室</th>
            <th v-for="item in time">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="itemDetail in item.details">
            <td>{{ itemDetail.room }}</td>
            <td v-for="curTime in itemDetail.time" :class="[ curTime === '空' ? 'free' : 'busy' ]">{{ curTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </li>
</template>

<script>
export default {
  mounted () {
  },

  data () {
    return {
      time: ['1-2', '3-4', '5-6', '7-8', '9-10']
    }
  },

  props: ['item']
}
</script>

<style lang="stylus">
.item-card-chart
  width: 100%
  padding: 20px
  background: #fff
  margin-bottom: 10px
  box-shadow: 1px 2px 5px rgba(0,0,0, .1)
  box-sizing: border-box
  border-radius: 2px
  &:last-child
    margin-bottom: 0
  h2
    text-align: center
    padding-bottom: 10px
    border-bottom: 2px dashed #eee
  .item-content
    padding-top: 20px
    table
      width: 100%
      tr
        text-align: center
        min-height: 26px
        @media (max-width: 768px)
          font-size: 13px

        th
          width: 14.6%
          &:first-child
            width: 27%
            line-height: 26px
        td
          padding: 2px 0
          font-weight: 500
          color: #fff
          &:first-child
            color: #333
            line-height: 26px
          &.free
            background: #4688f1
          &.busy
            background: #d85a63
</style>
