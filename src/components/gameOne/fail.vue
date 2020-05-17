<template>
  <div id="firstStep">
    <img class='bg3'
         src="@/assets/img/one/fail.png"
         alt="">
    <div id='again'
         @click="again"
         class="fits">
      <img src="@/assets/img/one/again.png"
           alt="">
    </div>
  </div>
</template>/*  */
<script>
export default {
  methods: {
    again () {
      this.$router.replace('/')
    }
  }
}
</script>
<style lang="sass">
@import "@/assets/css/done.scss"
</style>
