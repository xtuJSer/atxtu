<template>
  <li class="item-card">
    <h2>{{ name }}</h2>
    <div class="item-content">
      <tr v-for="(room, time) in item">
        <td class="item-time">{{ time }}节</td>
        <td class="item–room">{{ room.join(', ') }}</td>
      </tr>
    </div>
  </li>
</template>

<script>
export default {
  mounted () {
    // console.log(this.item)
  },
  props: ['item', 'name']
}
</script>

<style lang="stylus">
.item-card
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
    tr
      display: block
      margin-bottom: 10px
      &:last-child
        margin-bottom: 0
    .item-time
      width: 54px
      color: #4688f1
      font-weight: 500
</style>
