<template>
  <div id="startGame"
       class="fade">
    <video-first />
    <router-link to="/gameOne"
                 id="togameone"
                 tag="button"
                 class="toGameOne">进入游戏</router-link>
  </div>
</template>
<script>
import VideoFirst from '@/components/video/videofirst.vue'
export default {
  data () {
    return {
      videoover: false
    }
  },
  components: {
    VideoFirst
  }
}
</script>
<style lang="sass">
@import "@/assets/css/startGame.scss"
</style>
