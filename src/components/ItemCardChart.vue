<template>
  <li class="item-card-chart">
    <h2>{{ name }}</h2>
    <div class="item-content">
      <table>
        <thead>
          <tr>
            <th>教室</th>
            <th v-for="item in time">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{ item.room }}</td>
            <td v-for="curTime in item.time" :class="[ curTime === '空' ? 'free' : 'busy' ]">{{ curTime }}</td>
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

  props: ['items', 'name']
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
        @media (max-width: 768px)
          font-size: 13px
        th
          width: 14.6%
          &:first-child
            // width: 100px
            width: 27%
        td
          padding: 2px 0
          // border-radius: 3px
          // &:first-child
          font-weight: 500
          background: #333
          color: #fff
          min-height: 26px
          &:first-child
            line-height: 26px
          &.free
            // background: linear-gradient(to bottom, #5793f2, #4688f1)
            background: #4688f1
          &.busy
            // background: linear-gradient(to bottom, #d86b72, #d85a63)
            background: #d85a63
</style>
