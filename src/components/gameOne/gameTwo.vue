<template>
  <div id="firstStep">
    <img class='bg3'
         src="@/assets/img/two/bg1.png"
         alt="">
    <div id='tenmang'
         @click="getten"
         class="fits">
      <img src="@/assets/img/two/tenmang.png"
           alt="">
    </div>
    <div id='chaihuo'
         @click="getchai"
         class="fits">
      <img src="@/assets/img/two/chaihuo.png"
           alt="">
    </div>
    <div id='ding'
         @click="getding"
         class="fits">
      <img src="@/assets/img/two/ding.png"
           alt="">
    </div>
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
    <div id='light'
         :class="{'showdong':dongshow}"
         @click="getdong"
         class="fits">
      <img src="@/assets/img/two/light.png"
           alt="">
      <div class="inner">
        <img id="pin"
             @click="showkey"
             src="@/assets/img/two/pin.png"
             alt="">
        <img id="box"
             v-show="box"
             @click="getbox"
             src="@/assets/img/two/box.png"
             alt="">
        <img id="bed"
             src="@/assets/img/two/bed.png"
             alt="">
        <img id="ring"
             src="@/assets/img/two/ring.png"
             alt="">
        <img id="zentou"
             src="@/assets/img/two/zentou.png"
             alt="">
        <img id="key"
             v-show="key"
             @click="getkey"
             src="@/assets/img/two/key.png"
             alt="">
        <img id="canjuan"
             @click="getcanjuan"
             src="@/assets/img/two/canjuan.png"
             alt="">
        <img id="fire"
             v-show="fire"
             src="@/assets/img/two/fire.png"
             alt="">
        <img id="zhutai"
             @click="getzhutai"
             src="@/assets/img/two/zhutai.png"
             alt="">
      </div>
    </div>
    <div id='shugui'
         :class="{'down':guizi,'up':guiziup}"
         @click="changedown"
         class="fits">
      <div class="dad">
        <img src="@/assets/img/one/shugui.png"
             alt="">
        <!-- <div v-for=""></div> -->
        <div class="float">
          <div v-for="(item) in getList"
               :key="item[0]">
            <img v-bind:src="item[1]"
                 alt=""
                 style="width:300px;height:300px">
          </div>
        </div>
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
         class="fits">
      <img src="@/assets/img/one/chi.png"
           alt="">
    </div>
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
export default {
  data () {
    return {
      show: false,
      guizi: false,
      guiziup: false,
      chi: false,
      chiup: false,
      top: 376,
      getman: 1,
      dongshow: false,
      key: false,
      box: true,
      rsxiandan: false,
      fire: true,
      daoju: '',
      daojuList: {
        tenmang: {
          name: '一根藤蔓',
          img: require('@/assets/img/tankuan/2/tenman.png'),
          tool: require('@/assets/img/daoju/2/tenman.png')
        },
        ding: {
          name: '前人-登山铆钉',
          img: require('@/assets/img/tankuan/2/ding.png'),
          tool: require('@/assets/img/daoju/2/ding.png')
        },
        chai: {
          name: '木柴',
          img: require('@/assets/img/tankuan/2/chai.png'),
          tool: require('@/assets/img/daoju/2/chai.png')
        },
        zhutai: {
          name: '烛台',
          img: require('@/assets/img/tankuan/2/zhutai.png'),
          tool: require('@/assets/img/daoju/2/zhutai.png')
        },
        canjuan: {
          name: '前人残卷',
          img: require('@/assets/img/tankuan/2/canjuan.png'),
          tool: require('@/assets/img/daoju/2/canjuan.png')
        },
        ring: {
          name: '玉佩',
          img: require('@/assets/img/tankuan/2/ring.png'),
          tool: require('@/assets/img/daoju/2/ring.png')
        },
        box: {
          name: '一只落满灰尘的木匣',
          img: require('@/assets/img/tankuan/2/box.png'),
          tool: require('@/assets/img/daoju/2/box.png')
        },
        pin: {
          name: '玉瓶',
          img: require('@/assets/img/tankuan/2/ping.png'),
          tool: require('@/assets/img/daoju/2/pin.png')
        },
        key: {
          name: '钥匙',
          img: require('@/assets/img/tankuan/2/key.png'),
          tool: require('@/assets/img/daoju/2/key.png')
        },
        xiandan: {
          name: '匣中秘宝-仙丹',
          img: require('@/assets/img/tankuan/2/mibao.png'),
          tool: require('@/assets/img/daoju/2/mibao.png')
        }

      },
      getList: [
      ]
    }
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
    },
    close () {
      this.show = false
    },
    getdaoju (name, src) {
      if (this.getList.length < 5) {
        var arr = []
        arr.push(name)
        arr.push(src)
        this.getList.push(arr)
      }
      console.log(this.getList)
    },
    getten () {
      if (this.getman > 3) {
        console.log('死亡')
      } else if (this.getman > 1) {
        this.getman++; this.show = true
      } else {
        this.getman++; this.show = true
        this.daoju = this.daojuList.tenmang.img
        this.getdaoju(this.daojuList.tenmang.name, this.daojuList.tenmang.tool)
      }
    },
    getchai () {
      this.show = true
      this.daoju = this.daojuList.chai.img
      this.getdaoju(this.daojuList.chai.name, this.daojuList.chai.tool)
    },
    getding () {
      this.show = true
      this.daoju = this.daojuList.ding.img
      this.getdaoju(this.daojuList.ding.name, this.daojuList.ding.tool)
    },
    getdong () {
      this.dongshow = true
    },
    showkey () {
      this.key = true
    },
    getkey () {
      this.show = true
      if (this.rsxiandan) {
        this.daoju = this.daojuList.xiandan.img
        this.getdaoju(this.daojuList.xiandan.name, this.daojuList.xiandan.tool)
      } else {
        this.rsxiandan = true
        this.daoju = this.daojuList.key.img
        this.getdaoju(this.daojuList.key.name, this.daojuList.key.tool)
      }
      setTimeout(() => {
        this.key = false
      }, 200)
    },
    getbox () {
      this.show = true
      if (this.rsxiandan) {
        this.daoju = this.daojuList.xiandan.img
        this.getdaoju(this.daojuList.xiandan.name, this.daojuList.xiandan.tool)
      } else {
        this.rsxiandan = true
        this.daoju = this.daojuList.box.img
        this.getdaoju(this.daojuList.box.name, this.daojuList.box.tool)
      }
      setTimeout(() => {
        this.box = false
      }, 200)
    },
    getzhutai () {
      if (this.fire) {
        this.fire = false
      } else {
        this.show = true
        this.daoju = this.daojuList.zhutai.img
        this.getdaoju(this.daojuList.zhutai.name, this.daojuList.zhutai.tool)
      }
    },
    getcanjuan () {
      this.show = true
      this.daoju = this.daojuList.canjuan.img
      this.getdaoju(this.daojuList.canjuan.name, this.daojuList.canjuan.tool)
    }
  }
}
</script>
<style lang="sass">
@import "@/assets/css/two.scss"
@import "@/assets/css/up.scss"
</style>
