<template>
  <div class="loading ball-beat" v-if="isLoading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import 'loaders.css/loaders.min.css'

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.clear()
    console.log("%c%s", "color: #4688f1",
`
███╗   ███╗ █████╗  ██████╗ ██╗ ██████╗ █████╗ ██╗     ██╗     ██╗   ██╗
████╗ ████║██╔══██╗██╔════╝ ██║██╔════╝██╔══██╗██║     ██║     ██║   ██║
██╔████╔██║███████║██║  ███╗██║██║     ███████║██║     ██║     ██║   ██║
██║╚██╔╝██║██╔══██║██║   ██║██║██║     ██╔══██║██║     ██║     ██║   ██║
██║ ╚═╝ ██║██║  ██║╚██████╔╝██║╚██████╗██║  ██║███████╗███████╗╚██████╔╝
╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝
`)
  }
}
</script>

<style lang="stylus">
.loading
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  z-index: 998
  // & > div
    // background-color: #4688f1 !important
</style>
