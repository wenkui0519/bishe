<template>
  <div id="startVideo">
    <video src="@/assets/img/one/video1.mp4"
           id="video1"
           x5-playsinline="true"
           playsinline="true"
           webkit-playsinline="true"></video>
    <!-- <div v-on:click="videopause()">
      <video :src="videoSrc"
             id="video1"
             v-show="false"
             class="video">您的浏览器不支持 video 视屏播放。</video>
    </div> -->
    <!-- <div class='demo'>
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions">
      </video-player>
    </div> -->
  </div>
</template>
<script>
export default {
  // data () {
  //   return {
  //     videoSrc: '@/assets/img/one/video1.mp4',
  //     playerOptions: {
  //       playbackRates: [0.5, 1.0, 1.5, 2.0],
  //       autoplay: false,
  //       // 默认情况下将会消除任何音频。
  //       muted: false,
  //       // 导致视频一结束就重新开始。
  //       loop: false,
  //       // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
  //       preload: 'auto',
  //       language: 'zh-CN',
  //       // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
  //       aspectRatio: '16:9',
  //       // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
  //       fluid: true,
  //       sources: [{
  //         type: 'video/mp4',
  //         src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
  //       }],
  //       poster: '',
  //       notSupportedMessage: '此视频暂无法播放，请稍后再试',
  //       controlBar: {
  //         timeDivider: true,
  //         durationDisplay: true,
  //         remainingTimeDisplay: false,
  //         fullscreenToggle: true
  //       }
  //     }
  //   }
  // },
  created () {
    // require('@/assets/img/one/video1.mp4')
  },
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
