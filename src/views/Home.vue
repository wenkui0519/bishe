<template>
  <div class="home">
    <img id="startbg"
         src="@/assets/img/start/shouye.png"
         alt="">
    <li to="/exit"
        @click="closeWin"
        class="tils"
        id="exit">
      <img id="startbg"
           src="@/assets/img/start/exit.png"
           alt=""></li>
    <router-link to="/about"
                 id="about"
                 class="tils"
                 tag="li"><img id="startbg"
           src="@/assets/img/start/about.png"
           alt=""></router-link>
    <li @click="showshujuan"
        id="introduction"
        class="tils"><img id="startbg"
           src="@/assets/img/start/introduction.png"
           alt=""></li>
    <router-link to="/startGame"
                 id='startGame'
                 class="tils"
                 tag="li"><img id="startbg"
           src="@/assets/img/start/start.png"
           alt=""></router-link>
    <div class="sound"
         @click="changeSounds"
         v-if="sounds"
         id="soundon"><img src="@/assets/img/start/soundon.png"
           alt="">
      <div id="audioplay">
        <audio id="aud"
               controls
               autoplay
               loop
               src="@/assets/img/one/music1.mp3"></audio>
      </div>
    </div>
    <div class="sound"
         @click="changeSounds"
         v-else
         id="soundoff">
      <img src="@/assets/img/start/soundoff.png"
           alt="">
    </div>
    <div id="shujuan"
         v-show="shujuan"><img src="@/assets/img/start/shujuan.png"
           alt="">
    </div>
    <div id="jieshao"
         v-if="shujuan">
      <img src="@/assets/img/start/jiesao2.png"
           v-if="next"
           alt="">
      <img src="@/assets/img/start/jiesao1.png"
           v-else
           alt="">
    </div>
    <div id="fanye"
         v-if="shujuan"
         @click="changeNext">
      <img src="@/assets/img/start/fanye.png"
           alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      sounds: true,
      shujuan: false,
      next: false,
      close: false
    }
  },
  mounted () {
  },
  components: {
  },
  methods: {
    changeSounds () {
      var aud = document.getElementById('aud')
      if (this.sounds) {
        this.sounds = false
        aud.play()
      } else {
        this.sounds = true
        aud.pause()
      }
    },
    closeWin () {
      window.open('about:blank', '_self').close()
      // window.close()
    },
    showshujuan () {
      if (!this.shujuan) {
        this.shujuan = true
      } else {
        this.shujuan = false
        this.next = false
      }
    },
    changeNext () {
      this.next = true
      if (this.close) {
        this.showshujuan()
      }
      this.close = !this.close
    }
  }
}
</script>
<style lang="sass">
@import "@/assets/css/home.scss"
</style>
