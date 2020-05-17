<template>
  <div id="firstStep">
    <audio-play />
    <img class='bg3'
         src="@/assets/img/one/bg4.png"
         alt="">
    <div id='littlestone'
         @click="watershow"
         class="fits"><img src="@/assets/img/one/littlestone.png"
           alt=""></div>
    <div id='bg2'
         class="fits"><img src="@/assets/img/one/bg2.png"
           alt=""></div>
    <div id='water'
         v-show="water"
         class="fits"><img src="@/assets/img/one/water.png"
           alt=""></div>
    <div id='birds'
         class="fits"><img src="@/assets/img/one/birds2.png"
           alt=""></div>
    <div id='zhong'
         @click="zhongshake"
         :class="{'zhonshake':zshake}"
         class="fits"><img src="@/assets/img/one/zhong.png"
           alt=""></div>
    <div id='zhen'
         :class="{'zhenshake':zshake}"
         class="fits"><img src="@/assets/img/one/zhen.png"
           alt=""></div>
    <div id='tophuoba'
         @click="topfireshow"
         class="fits"><img src="@/assets/img/one/tophuoba.png"
           alt=""></div>
    <div id='topfire'
         :class="{'topfirehide':!topfire}"
         @click="topfireshow"
         class="fits"><img src="@/assets/img/one/topfire.png"
           alt=""></div>
    <div id='bishou'
         v-show="win && !door"
         class="fits"><img src="@/assets/img/one/bishou.png"
           alt=""></div>
    <div id='futou'
         :class="{'shakefutou':futou}"
         @click="getfutou"
         class="fits"><img src="@/assets/img/one/futou.png"
           alt=""></div>
    <div id='gaizi'
         class="fits"><img src="@/assets/img/one/gaizi.png"
           alt=""></div>
    <div id='niaocao'
         class="fits"><img src="@/assets/img/one/niaocao.png"
           alt=""></div>
    <div id='egg'
         @click="eggshake"
         :class="{'eggshake':shake}"
         class="fits"><img src="@/assets/img/one/egg.png"
           alt=""></div>
    <div id='box'
         class="fits"><img src="@/assets/img/one/box.png"
           alt=""></div>
    <!-- <div id='background1'
         class="fits"><img src="@/assets/img/one/background1.png"
           alt=""></div> -->
    <div id='opendoor'
         v-if="win && door"
         class="fits"><img src="@/assets/img/one/opendoor.png"
           alt=""></div>
    <div id='closedoor'
         v-else
         @click="doorshow"
         class="fits"><img src="@/assets/img/one/closedoor.png"
           alt=""></div>
    <div id='windowlight'
         v-if="win"
         class="fits"><img src="@/assets/img/one/windowlight.png"
           alt=""></div>
    <div id='windowoff'
         v-else
         @click="windowshow"
         class="fits"><img src="@/assets/img/one/windowoff.png"
           alt=""></div>
    <div id='background2'
         v-if="fire"
         class="fits"><img src="@/assets/img/one/background2.png"
           alt=""></div>
    <div id='huoba'
         @click="fireshow"
         class="fits"><img src="@/assets/img/one/huoba.png"
           alt=""></div>
    <div id='fire'
         v-if="fire"
         class="fits"><img src="@/assets/img/one/fire.png"
           alt=""></div>
    <div id='yumao'
         @click="getyumao"
         v-show="yumao"
         :class="{'fudon':water}"
         class="fits"><img src="@/assets/img/one/yumao.png"
           alt=""></div>
    <div id='bu'
         @click="getbu"
         v-show="bu"
         :class="{'fudon':water}"
         class="fits"><img src="@/assets/img/one/bu.png"
           alt=""></div>
    <div id='tankuang'
         @click="close"
         v-show="show"
         class="fits">
      <div>
        <img :src="daoju"
             alt="">
        <!-- <img :src="daoju"
             id="float"
             alt=""> -->
      </div>
    </div>
    <div id='taishou'
         @click="taijump"
         :class="{'jump':jump}"
         class="fits">
      <img src="@/assets/img/one/taishou.png"
           alt="">
    </div>
    <div id='shugui'
         :class="{'down':guizi,'up':guiziup}"
         @click="changedown"
         class="fits">
      <div class="dad">
        <img src="@/assets/img/one/shugui.png"
             alt="">
        <img id="next"
             @click="next"
             src="@/assets/img/one/next.png"
             alt="">
        <!-- <div v-for=""></div> -->
        <ul class="float">
          <li v-for="(item) in getList"
              :key="item[0]">
            <img v-bind:src="item[1]"
                 class="img1"
                 alt=""
                 style="width:300px;height:300px">
          </li>
        </ul>
      </div>
    </div>
    <div id='shugui2'
         v-show="!guizi"
         :class="{'down':guizi,'up':guiziup}"
         @click="changedown"
         class="fits"><img src="@/assets/img/one/shugui.png"
           alt=""></div>
    <div id='chi'
         :class="{'down':chi,'up':chiup}"
         @click="changechi"
         class="fits">
      <img src="@/assets/img/one/chi.png"
           alt="">
    </div>
    <div id='chi2'
         v-show="!chi"
         :class="{'down':chi,'up':chiup}"
         @click="changechi"
         class="fits"><img src="@/assets/img/one/chi.png"
           alt=""></div>
    <div id='youbiao'
         v-if="chi"
         :style="{'top':top+'px'}"
         class="fits">
      <!-- 起始1，加20.83px -->
      <img src="@/assets/img/one/youbiao.png"
           alt="">
    </div>
  </div>
</template>
<script>
import AudioPlay from '@/components/video/audio.vue'
export default {
  data () {
    return {
      show: false,
      guizi: false,
      guiziup: false,
      chi: false,
      chiup: false,
      fire: false,
      topfire: true,
      topfirecount: 0,
      futou: false,
      win: false,
      door: false,
      shake: false,
      zshake: false,
      water: false,
      yumao: true,
      bu: true,
      jump: false,
      jumpcount: 0,
      top: this.$store.state.top,
      daoju: '',
      daojuList: {
        huoba: {
          name: '干燥的木条',
          img: require('@/assets/img/tankuan/1/caihuo.png'),
          tool: require('@/assets/img/daoju/1/caihuo.png')
        },
        futou: {
          name: '斧头',
          img: require('@/assets/img/tankuan/1/futou.png'),
          tool: require('@/assets/img/daoju/1/futou.png')
        },
        bishou: {
          name: '一把匕首',
          img: require('@/assets/img/tankuan/1/bishou.png'),
          tool: require('@/assets/img/daoju/1/bishou.png')
        },
        zhen: {
          name: '登山铆钉',
          img: require('@/assets/img/tankuan/1/ding.png'),
          tool: require('@/assets/img/daoju/1/ding.png')
        },
        yumao: {
          name: '一支乌黑的羽毛',
          img: require('@/assets/img/tankuan/1/yumao.png'),
          tool: require('@/assets/img/daoju/1/yumao.png')
        },
        bu: {
          name: '写着神秘字符的布条',
          img: require('@/assets/img/tankuan/1/bu.png'),
          tool: require('@/assets/img/daoju/1/bu.png')
        },
        box: {
          name: '盒子',
          img: require('@/assets/img/tankuan/1/box.png'),
          tool: require('@/assets/img/daoju/1/box.png')
        },
        kouliang: {
          name: '口粮',
          img: require('@/assets/img/tankuan/1/kouliang.png')
          // tool: require('@/assets/img/daoju/1/kouliang.png')
        },
        yudie: {
          name: '玉蝶',
          img: require('@/assets/img/tankuan/1/yudie.png'),
          tool: require('@/assets/img/daoju/1/yudie.png')
        }
      },
      getList: [
      ]
    }
  },
  mounted () {
  },
  methods: {
    changedown () {
      if (!this.guizi) {
        this.guizi = true
        this.guiziup = false
      } else {
        this.guizi = false
        this.guiziup = true
      }
    },
    changechi () {
      if (!this.chi) {
        this.chi = true
        this.chiup = false
      } else {
        this.chi = false
        this.chiup = true
      }
      console.log(this.$store.state.top)
    },
    changeTop (num) {
      this.top = 376 - num * 20.83
      this.$store.commit('changeTop', this.top)
    },
    close () {
      this.show = false
    },
    taijump () {
      if (this.jumpcount < 4) {
        this.jump = true
        this.jumpcount++
        setTimeout(() => {
          this.jump = false
        }, 300)
      } else {
        this.show = true
        this.daoju = this.daojuList.yudie.img
        this.getdaoju(this.daojuList.yudie.name, this.daojuList.yudie.tool)
        var num = this.getList.length
        this.changeTop(num)
      }
    },
    fireshow () {
      if (!this.fire) this.fire = !this.fire
    },
    topfireshow () {
      this.topfirecount++
      this.topfire = false
      if (this.topfirecount === 2) {
        this.show = true
        this.daoju = this.daojuList.huoba.img
        this.getdaoju(this.daojuList.huoba.name, this.daojuList.huoba.tool)
        var num = this.getList.length
        this.changeTop(num)
      }
    },
    getfutou () {
      this.futou = true
      setTimeout(() => {
        this.show = true
        this.daoju = this.daojuList.futou.img
        this.getdaoju(this.daojuList.futou.name, this.daojuList.futou.tool)
        var num = this.getList.length
        this.changeTop(num)
      }, 300)
    },
    windowshow () {
      this.win = true
    },
    doorshow () {
      if (this.win) {
        this.door = true; this.show = true; this.daoju = this.daojuList.bishou.img; this.getdaoju(this.daojuList.bishou.name, this.daojuList.bishou.tool)
        var num = this.getList.length
        this.changeTop(num)
      }
    },
    eggshake () {
      this.shake = true
      setTimeout(() => {
        this.shake = false
      }, 300)
    },
    zhongshake () {
      this.zshake = true
      setTimeout(() => {
        this.show = true
        this.daoju = this.daojuList.zhen.img
        this.getdaoju(this.daojuList.zhen.name, this.daojuList.zhen.tool)
        var num = this.getList.length
        this.changeTop(num)
      }, 900)
    },
    watershow () {
      this.water = true
    },
    getyumao () {
      console.log(this.water)
      if (this.water) {
        this.show = true
        this.yumao = false
        this.daoju = this.daojuList.yumao.img
        this.getdaoju(this.daojuList.yumao.name, this.daojuList.yumao.tool)
        var num = this.getList.length
        this.changeTop(num)
      }
    },
    getbu () {
      if (this.water) {
        this.show = true
        this.bu = false
        this.daoju = this.daojuList.bu.img
        this.getdaoju(this.daojuList.bu.name, this.daojuList.bu.tool)
        var num = this.getList.length
        this.changeTop(num)
      }
    },
    getdaoju (name, src) {
      if (this.getList.length < 5) {
        var arr = []
        arr.push(name)
        arr.push(src)
        this.getList.push(arr)
      }
      // console.log(this.getList)
    },
    next () {
      event.preventDefault()
      if (this.getList.length >= 4) {
        this.$router.replace('/gameTwo')
      }
    }
  },
  components: {
    AudioPlay
  }
}
</script>
<style lang="sass">
@import "@/assets/css/first.scss"
</style>
