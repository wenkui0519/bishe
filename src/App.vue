<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    // 监听resize方法
    this.resize()
    window.addEventListener('resize', this.resize, false)
  },
  methods: {
    resize () {
      var width = window.innerWidth
      var height = window.innerHeight
      var app = document.getElementById('app')
      var style = ''
      if (width >= height) { // 横屏
        style += 'width:' + width + 'px;' // 注意旋转后的宽高切换
        style += 'height:' + height + 'px;'
        style += '-webkit-transform: rotate(0); transform: rotate(0);'
        style += '-webkit-transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
        style += 'transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
      } else { // 竖屏
        style += 'width:' + height + 'px;'
        style += 'height:' + width + 'px;'
        style += '-webkit-transform: rotate(90deg); transform: rotate(90deg);'
        // 注意旋转中点的处理
        style += '-webkit-transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
        style += 'transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
      }
      app.style.cssText = style
      // width = null
      // height = null
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/css/app.scss'
</style>
