<template>
  <section class="message-pop">
    <h3>message</h3>
  </section>
</template>

<script>
export default {
  name: 'message-pop',

  beforeMounted () {
    console.log('fuck')
  }
}
</script>

<style lang="stylus">
.message-pop
  position: absolute
  bottom: 0
  left: -50%
  transform: translateX(-50%)
  background: #4688f1
  color: #fff
  width: 400px

</style>