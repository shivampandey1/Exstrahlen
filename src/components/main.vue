<template>
  <div id="intro">
    <div class="side-slant">
    </div>
    <div class="header-text">
      <h1>Healthcare needs AI to scale</h1>
      <router-link to='/application'><a class="link purple"> Get Started &#8594;</a></router-link>
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
  background-image: url('../assets/main3.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}

.side-slant {
  z-index: -2;
  position: relative;
  left: 0;
  display: inline-block;
  padding: 1em 5em 1em 1em;
  overflow: hidden;
  background-color: rgb(28, 47, 174);
  clip-path: polygon(70% 0, 100% 0, 100% 100%, 26% 100%);
  width: 100vw;
}

.header-text {
  margin-top: 26vh;
  position: absolute;
  margin-left: 10vw;
  background-image: url('../assets/bean.png');
}


.link {
  font-size: 1.5rem;
}

.link:hover {
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
}

.purple {
  color: rgb(28, 47, 174) !important;
}
</style>