<template>
  <div>
    <nav-bar></nav-bar>
    <intro></intro>
    <div class="second">
      <div class="inner">
        <div class="image">
          <img src='../assets/clock2.png'>
        </div>
        <div class="text">
          <!-- <div class="stat">
            <h3>The average patient spends <span class="num">18 hours</span> in the emergency room</h3>
          </div> --> 
          <div class="copy shadow">
            <h2>Provide critical care faster</h2>
            <p>The average patient wait time in an emergency room is 18 hours. We believe no one should have to wait to recieve access to a basic human right. Exstrahlen decreases patient wait times by helping you perform accurate diagnostic analysis, faster. We recognise the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <router-link to='/application'><a class="link purple"> Get Started &#8594;</a></router-link>
          </div>
        </div>
      </div>
      <div class="slant">
        <div class="steps">
          <h2 class="header">Easy to Use</h2>
          <div class="step">
            <div class="col">
              <img src='../assets/upload.png'>
            </div>
            <div class="col copy shadow">
              <div class="title">
                <h2><strong>1</strong></h2>
                <h3>Upload X-Ray</h3>
              </div>
              <p>First, upload the X-ray via drag and drop. Our deep learning model applies it’s knowledge of over 110,000 scans of different conditions to analyze the file for various abnormalities.</p>
            </div>
          </div>
          <div class="step">
            <div class="col copy shadow">
              <div class="title">
                <h2><strong>2</strong></h2>
                <h3>Read the results</h3>
              </div>
              <p>Our deep learning model will assess what issues may be present in the uploaded scan. The issues will be highlighted for further analysis in the returned report with information about the issues present (i.e Atelectasis, Effusion etc) as well as a score of confidence.</p>
            </div>
            <div class="col">
              <img src='../assets/download.png'>
            </div>
          </div>
          <router-link to='/application'><b-button link class="link purple final-cta">Start improving care &#8594;</b-button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nav from './nav.vue'
import intro from './main.vue'

export default {
  name: 'first-page',
  components: {
    'nav-bar': nav, 
    'intro': intro
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none !important;
}

h1, h2, h3, p {
  color: #33333a;
  padding-bottom: 0.2rem;
}

.header {
  padding-bottom: 40px; 
  font-size: 3rem;
}

.purple {
  color: rgb(28, 47, 174) !important;
}

.inner {
  padding: 0 120px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.link {
  font-size: 1.1rem;
}

.link:hover {
  font-size: 1.2rem;
  cursor: pointer;
}

img {
  max-width: 400px;
}

.text {
  margin-left: 10%;
}

.copy {
  background-color: white;
  border-radius: 20px;
  padding: 40px !important;
}

.shadow {
  -webkit-box-shadow: 0px 10px 15px 0px rgba(218,224,236,0.5);
  -moz-box-shadow: 0px 10px 15px 0px rgba(218,224,236,0.5);
  box-shadow: 0px 10px 15px 0px rgba(218,224,236,0.5);
}

.slant:before {
  margin-top: 50px;
  background: inherit;
  content: '';
  display: block;
  min-height: 10vh;
  width: 100%;
  transform-origin: 100% 0;
  transform: skewY(2.7deg);
  z-index: -10;
}

.slant {
  background-color: rgba(246, 249, 255);
  text-align: center
}

.steps {
  width: 100%;
  color: #fff;
  padding: 0 120px;
}

.step {
  display: flex;
  text-align: left;
  align-items: center;
  padding-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title > h2 {
  margin-right: 20px;
}

.col > img{
  max-width: 500px;
  margin: 0 40px;
}

.final-cta {
  margin-bottom: 60px;
  padding: 20px 35px !important;
  background-color: transparent;
  font-size: 1.4rem !important;
  border: none !important;
}

.final-cta:hover {
  font-size: 1.5rem !important;
  background-color: transparent;
}

</style>
