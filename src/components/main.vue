<template>
  <div id="intro">
    <div class="side-slant">
    </div>
    <div class="header-text">
      <h1>HEALTHCARE</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro', 
  created: function () {
  }
}
</script>

<style>
#intro {
  width: 100vw; 
  height: 100vh;
  background-image: url('../assets/main.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}

.side-slant {
  z-index: -2;
  position: relative;
  left: 0;
  display: inline-block;
  padding: 1em 5em 1em 1em;
  overflow: hidden;
  background-color: rgba(41, 0, 138, 1);
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 26% 100%);
  width: 100vw;
}

.header-text {
  margin-top: 36vh;
  position: absolute;
}
</style>