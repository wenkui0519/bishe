<template>
  <div id="startVideo">
    <video src="@/assets/img/one/video1.mp4"
           id="video1"
           x5-playsinline="true"
           playsinline="true"
           webkit-playsinline="true"></video>
  </div>
</template>
<script>
export default {
  mounted () {
    var video = document.getElementById('video1')
    var togameone = document.getElementById('togameone')
    video.onload = function () {
      console.log('')
    }
    this.videopause()
    video.addEventListener('ended', function () {
      togameone.click()
    }, false)
    // this.$router.go(0)
    setTimeout(() => {
      // this.$router.go(0)
    }, 200)
  },
  methods: {
    videopause () {
      var video = document.getElementById('video1')
      video.play()
    }
  }
}
</script>
<style scoped>
.demo {
  display: inline-block;
  width: 600px;
  height: 338px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo:hover {
  display: block;
}
</style>
