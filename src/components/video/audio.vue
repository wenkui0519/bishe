<template>
  <div id="audioplay">
    <audio controls
           autoplay
           loop
           src="@/assets/img/one/music1.mp3"></audio>
  </div>
</template>
<script>
export default {
  mounted () {
  }
}
</script>
<style>
#audioplay {
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
