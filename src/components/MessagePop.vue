<template>
  <transition name="message">
    <section class="message-pop" v-show="showMessage">
      <p>{{ message }}</p>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'message-pop',

  data () {
    return {
      timer: null
    }
  },

  computed: {
    message () {
      return this.$store.state.message
    },
    showMessage () {
      return this.$store.state.showMessage
    }
  },

  watch: {
    message (val) {
      this.timer && clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        this.$store.commit('HIDE_MESSAGE')
      }, 2500)
    }
  }
}
</script>

<style lang="stylus">
.message-pop
  position: fixed
  bottom: 10px
  left: 50%
  transform: translateX(-50%)
  background: rgba(69, 86, 96, .9)
  color: #fff
  width: 384px
  padding: 10px
  box-sizing: border-box
  border-radius: 3px
  font-size: 14px
  font-weight: 500

.message-enter-active, .message-leave-active
  transition: all .12s ease-in
.message-enter, .message-leave-active
  opacity: 0
  transform: translateX(-20%)

</style>
