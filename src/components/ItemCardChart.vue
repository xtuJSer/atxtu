<template>
  <li class="item-card-chart">
    <h2>{{ item.name }}</h2>
    <div class="item-content">
      <table>
        <thead>
          <tr>
            <th id="title" @click="init">
              {{ switchTime.includes(true) ? '点我取消' : '筛选时间→' }}
            </th>
            <th v-for="(item, i) in time" :id="`time-${idx}-${i}`">
              <input :id="`switch-time-${idx}-${i}`" type="checkbox" :name="'switch-group-' + idx" :value="`time-${idx}-${i}`" v-model="switchTime[i]">
              <label :for="`switch-time-${idx}-${i}`">
                {{ item }}
              </label>
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
      <p :class="[ this.list.details.length === 0 ? 'show' : 'hide' ]" class="msg">{{ this.msg }}</p>
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
      switchTime: [],
      list: '',
      msg: ''
    }
  },

  watch: {
    switchTime (time) {
      this.list = JSON.parse(JSON.stringify(this.item))

      time.forEach((timeEl, i) => {
        if (timeEl === false) { return }

        for (let j = 0, len = this.list.details.length; j < len; j++) {
          let el = this.list.details[j]
          if (el.time[i] === '满') {
            this.list.details.splice(j--, 1)
            len--
          }
        }
      })
      this.list.details.length === 0 ? this.msg = '不存在的 :(' : this.msg = ''
    }
  },

  methods: {
    init () {
      this.switchTime.fill(false)
      this.list = JSON.parse(JSON.stringify(this.item))
    }
    // switchItem (e) {
    //   this.switchTime = e.target.id
    //   let time = this.switchTime.split('-')[2]
    //   if (time === undefined) {
    //     this.list = this.item
    //     return
    //   }
    //   this.sortItem(time)
    // },
    // sortItem (time) {
    //   this.list = JSON.parse(JSON.stringify(this.item))

    //   let stack = []
    //   for (let i = 0, len = this.list.details.length; i < len; i++) {
    //     let el = this.list.details[i]
    //     if (el.time[time] === '空') {
    //       stack.push(this.list.details.splice(i--, 1)[0])
    //       len--
    //     }
    //   }
    //   // console.log(stack)
    //   this.list.details = stack.concat(this.list.details)
    // }
  },

  created () {
    this.switchTime.length = 5
    this.switchTime.fill(false)
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
  transition: all 1s ease
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
          background: #fff
          &:first-child
            width: 27%
            line-height: 36px
            background: #41b783
            color: #fff

          label
            display: inline-block
            cursor: pointer
            width: 100%
            height: 100%
            font-weight: 600
            padding: 5px 0
            transition: background 0.5s linear
            border-radius: 2px
            box-sizing: border-box
          input[type='checkbox']
            display: none
          // input[type='checkbox']:not(:checked)+label
          //   border: 1px dashed #fff
          input[type='checkbox']:checked+label
            background: #41b783
            color: #fff

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
.msg
  padding: 20px 0 10px
  text-align: center
  font-weight: 600
  &.hide
    display: none
  &.show
    display: block
</style>
