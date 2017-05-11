<template>
  <section class="message-pop">
    <p>{{ message }}</p>
  </section>
</template>

<script>
export default {
  name: 'message-pop',

  computed: {
    message () {
      return this.$store.state.message
    }
  },

  watch: {
    message (val) {

    }
  }
}
</script>

<style lang="stylus">
.message-pop
  position: fixed
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  background: rgba(69, 86, 96, .8)
  color: #fff
  width: 384px
  padding: 20px
  box-sizing: border-box
  border-radius: 3px


</style>
