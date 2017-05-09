<template>
  <li class="item-card-chart">
    <h2>{{ item.name }}</h2>
    <div class="item-content">
      <table>
        <thead>
          <tr @click.capture.stop="switchItem">
            <th id="title" :class="{ switched: switchTime === 'title' }">
              <!--<input :id="`switch-title-${idx}`" type="radio" :name="'switch-group-' + idx" value="title" v-model="switchTime">-->
              <!--<label :for="`switch-title-${idx}`">-->
                教室
              <!--</label>-->
            </th>
            <th v-for="(item, i) in time" :id="`time-${idx}-${i}`" :class="{ switched: switchTime === `time-${idx}-${i}` }">
              <!--<input :id="`switch-time-${idx}-${i}`" type="radio" :name="'switch-group-' + idx" :value="`time-${idx}-${i}`" v-model="switchTime">-->
              <!--<label :for="`switch-time-${idx}-${i}`">-->
                {{ item }}
              <!--</label>-->
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="itemDetail in list.details">
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
      time: ['1-2', '3-4', '5-6', '7-8', '9-10'],
      switchTime: 'title',
      list: ''
    }
  },

  watch: {
    // switchTime (value) {
    //   console.log(value)
    // }
  },

  methods: {
    switchItem (e) {
      this.switchTime = e.target.id
      let time = this.switchTime.split('-')[2]
      if (time === undefined) {
        this.list = this.item
        return
      }
      this.sortItem(time)
    },
    sortItem (time) {
      // console.log(time)
      // this.list = this.item
      this.list = JSON.parse(JSON.stringify(this.item))

      let stack = []
      for (let i = 0, len = this.list.details.length; i < len; i++) {
        let el = this.list.details[i]
        if (el.time[time] === '空') {
          stack.push(this.list.details.splice(i--, 1)[0])
          len--
        }
      }
      // console.log(stack)
      this.list.details = stack.concat(this.list.details)
    }
  },

  created () {
  },

  beforeMount () {
    this.list = JSON.parse(JSON.stringify(this.item))
  },

  props: ['item', 'idx']
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
          cursor: pointer
          height: 36px
          line-height: 36px
          border-radius: 2px
          border: 1px dashed #eee
          &:first-child
            width: 27%
            line-height: 26px
          &.switched
            background: #4688f1
            border: 1px solid #4688f1
            color: #fff
        td
          padding: 2px 0
          font-weight: 500
          color: #fff
          &:first-child
            color: #333
            line-height: 26px
          &.free
            background: #41b783
          &.busy
            background: #d85a63
</style>
