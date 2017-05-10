<template>
  <li class="item-card-chart">
    <div class="tool-bar">
      <span class="show-card" :class="[ status ? 'icon-minimize' : 'icon-maximize' ]"  @click="status = !status">
        {{ status ? '折叠' : '展开' }}
      </span>
      <!--<span class="icon-heart" style="color: #d85a63"></span>-->
    </div>

    <h2>
    <!--<h2 class="name-border">-->
      {{ item.name }}
      <p class="msg">{{ this.list.details.length + '/' + this.item.details.length }}</p>
    </h2>

    <transition name="fade">
      <div class="item-content" v-show="status">
        <table>
          <thead>
            <tr>
              <th id="title" @click.stop="init">
                {{ switchTime.indexOf(true) > -1 ? (switchTime.indexOf(false) > -1 ? '全选' : '取消'): '筛选时间→' }}
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
      </div>
    </transition>
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
      msg: '',
      status: false
    }
  },

  watch: {
    switchTime (time) {
      this.siftTime(time)
    }
  },

  methods: {
    init () {
      let hasTrue = this.switchTime.indexOf(true) > -1
      let hasFalse = this.switchTime.indexOf(false) > -1

      if (hasTrue) {
        if (hasFalse) {
          // this.switchTime.fill(true)
          this.switchTime = this.switchTime.map(el => true)
        } else {
          // this.switchTime.fill(false)
          this.switchTime = this.switchTime.map(el => false)
          this.list = JSON.parse(JSON.stringify(this.item))
        }
      } else {
        this.switchTime = this.switchTime.map(el => true)
      }
      // this.switchTime.fill(false)
      // this.list = JSON.parse(JSON.stringify(this.item))
    },
    siftTime (time) {
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
      this.list.details.length === 0 ? this.msg = '不存在的' : this.msg = ''
    }
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
  padding: 10px
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
    .msg
      font-weight: 600
      font-size: 13px

  .item-content
    // padding-top: 20px
    table
      border-top: 2px dashed #eee
      padding-top: 20px
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
            // line-height: 36px
            background: #41b783
            color: #fff

          label
            display: inline-block
            cursor: pointer
            width: 100%
            height: 36px
            font-weight: 600
            // padding: 5px 0
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

  .tool-bar
    font-size: 12px
    & > *
      cursor: pointer
      transition: color .4s ease
    .icon-maximize:hover
      color: #4688f1
    .icon-minimize:hover
      color: #d85a63

  .fade-enter-active, .fade-leave-active
    transition: all .05s ease-in
  .fade-enter, .fade-leave-active
    opacity: 0
    transform: translateY(-10%)
</style>
