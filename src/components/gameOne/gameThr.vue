<template>
  <div id="firstStep">
    <img class='bg3'
         src="@/assets/img/thr/bg3.png"
         alt="">
    <div id='xiancao'
         v-show="cao"
         @click="getcao"
         class="fits">
      <img src="@/assets/img/thr/xiancao.png"
           alt="">
    </div>
    <div id='ye'
         @click="showdong"
         :class="{'moveye':shakeye}"
         class="fits">
      <img src="@/assets/img/thr/ye.png"
           alt="">
    </div>
    <div id='book'
         v-show="book"
         @click="getbook"
         class="fits">
      <img src="@/assets/img/thr/book.png"
           alt="">
    </div>
    <div id='mount'
         :class="{'movemount':dong}"
         class="fits">
      <img src="@/assets/img/thr/mount.png"
           alt="">
    </div>
    <div id='ling'
         @click="moveling"
         class="fits">
      <img src="@/assets/img/thr/ling.png"
           alt="">
    </div>
    <div id='ying'
         v-show="ying"
         @click="getying"
         class="fits">
      <img src="@/assets/img/thr/ying.png"
           alt="">
    </div>
    <div id='m1'
         @click="m1"
         class="fits">
      <img src="@/assets/img/thr/m1.png"
           alt="">
    </div>
    <div id='m2'
         class="fits">
      <img src="@/assets/img/thr/m1.png"
           alt="">
    </div>
    <div id='m3'
         class="fits">
      <img src="@/assets/img/thr/m1.png"
           alt="">
    </div>
    <div id='m4'
         class="fits">
      <img src="@/assets/img/thr/m1.png"
           alt="">
    </div>
    <div id='xi'
         v-show="xi"
         class="fits">
      <img src="@/assets/img/thr/xi.png"
           alt="">
    </div>
    <div id='yun1'
         v-show="showyun"
         :class="{'moveyun1':dong}"
         @click="showxi"
         class="fits">
      <img src="@/assets/img/thr/yun1.png"
           alt="">
    </div>
    <div id='yun2'
         v-show="showyun"
         class="fits"
         :class="{'moveyun1':dong}">
      <img src="@/assets/img/thr/yun2.png"
           alt="">
    </div>
    <div id='di'
         v-if="zaoxshow"
         class="fits">
      <img src="@/assets/img/thr/di.png"
           alt="">
    </div>
    <div id='tao'
         v-if="zaoxshow"
         class="fits">
      <img src="@/assets/img/thr/tao.png"
           alt="">
    </div>
    <div id='dan'
         v-if="zaoxshow"
         @click="getdan"
         class="fits">
      <img src="@/assets/img/thr/dan.png"
           alt="">
    </div>
    <div id='fu'
         v-if="zaoxshow"
         @click="getfu"
         class="fits">
      <img src="@/assets/img/thr/fu.png"
           alt="">
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
    <div id='shugui'
         :class="{'down':guizi,'up':guiziup}"
         @click="changedown"
         class="fits">
      <div>
        <img src="@/assets/img/one/shugui.png"
             alt="">
        <!-- <div v-for=""></div> -->
        <div class="float">
          <div v-for="(item) in getList"
               :key="item[0]">
            <img v-bind:src="item[1]"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div id='shugui2'
         v-show="!guizi"
         :class="{'down':guizi,'up':guiziup}"
         @click="changedown"
         class="fits"><img src="@/assets/img/one/shugui.png"
           alt="">
    </div>
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
      cao: true,
      book: true,
      shakeye: false,
      dong: false,
      showyun: true,
      ying: true,
      ling: true,
      xi: false,
      zaoxshow: false,
      fu: false,
      top: 376,
      daoju: '',
      daojuList: {
        book: {
          name: '书',
          img: require('@/assets/img/tankuan/3/book.png'),
          tool: require('@/assets/img/daoju/3/book.png')
        },
        dan: {
          name: '仙丹',
          img: require('@/assets/img/tankuan/3/dan.png'),
          tool: require('@/assets/img/daoju/3/dan.png')
        },
        fu: {
          name: '符',
          img: require('@/assets/img/tankuan/3/fu.png'),
          tool: require('@/assets/img/daoju/3/fu.png')
        },
        ling: {
          name: '铃',
          img: require('@/assets/img/tankuan/3/ling.png'),
          tool: require('@/assets/img/daoju/3/ling.png')
        },
        xiancao: {
          name: '仙草',
          img: require('@/assets/img/tankuan/3/xiancao.png'),
          tool: require('@/assets/img/daoju/3/xiancao.png')
        },
        ying: {
          name: '仙草',
          img: require('@/assets/img/tankuan/3/ying.png'),
          tool: require('@/assets/img/daoju/3/ying.png')
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
    getcao () {
      this.show = true
      this.cao = false
      this.daoju = this.daojuList.xiancao.img
      this.getdaoju(this.daojuList.xiancao.name, this.daojuList.xiancao.tool)
    },
    showdong () {
      this.shakeye = true
      setTimeout(() => {
        this.dong = true
      }, 2000)
      setTimeout(() => {
        this.showyun = false
      }, 4000)
    },
    getbook () {
      this.show = true
      this.book = false
      this.daoju = this.daojuList.book.img
      this.getdaoju(this.daojuList.book.name, this.daojuList.book.tool)
    },
    moveling () {
      this.show = true
      this.ling = false
      this.daoju = this.daojuList.ling.img
      this.getdaoju(this.daojuList.ling.name, this.daojuList.ling.tool)
    },
    getying () {
      this.show = true
      this.ying = false
      this.daoju = this.daojuList.ying.img
      this.getdaoju(this.daojuList.ying.name, this.daojuList.ying.tool)
    },
    m1 () {
      if (!this.ling) {
        this.zaoxshow = true
      }
    },
    showxi () {
      this.xi = true
    },
    getfu () {
      this.show = true
      this.fu = true
      this.daoju = this.daojuList.fu.img
      this.getdaoju(this.daojuList.fu.name, this.daojuList.fu.tool)
    },
    getdan () {
      if (this.fu) {
        this.show = true
        this.dan = false
        this.daoju = this.daojuList.dan.img
        this.getdaoju(this.daojuList.dan.name, this.daojuList.dan.tool)
      }
    }
  }
}
</script>
<style lang="sass">
@import "@/assets/css/thr.scss"
@import "@/assets/css/up.scss"
</style>
