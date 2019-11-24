<template> 
  <div>
    <nav-bar color="white"></nav-bar>
    <div class="upload purple">
      <div class="bean">
        <h2 class="white">Upload X-ray</h2>
        <p class="white">Please be advised that medical diagnostics should not be based solely on the results provided below. The recommendations are used to identify abnormalities.</p>
      </div>
    </div>
    <div class="box"> 
      <div class="drop"> 
        <h4>Drop file here</h4>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <img src='../assets/first.png'>
          <div class="writing">
            <h4>What it is</h4>
            <p>Erstrahlen is a system that assists radiologists in analyzing chest x-rays and helps them make recommendations more accurately. Exstrahlen also improves turnaround times and helps patients receive the care they need.</p>
          </div>
        </div>
        <div class="col">
          <img src='../assets/how.png'>
          <div class="writing">
            <h4>How it works</h4>
            <p>Erstrahlen utilizes a vue front-end to process your <i>drag & dropped</i> x-ray file. Once you upload a scan, Exstrahlen feeds your X-ray into our CNN hosted by Google Cloud where it assesses the scan based on a training set of 117000 images to provide an accurate analysis.</p>
          </div>
        </div>
        <div class="col">
          <img src='../assets/what.png'>
          <div class="writing">
            <h4>What the results say</h4>
            <p>Exstrahlen tells you what chest diseases it sees in the X-ray provided, if it finds any at all. It also shows how confident it is in each prediction it makes so that doctors can assess how much weight to give to the analysis.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="app" v-cloak @drop.prevent="addFile" @dragover.prevent>
      <h2>Files to Upload (Drag them over)</h2>
      <ul>
        <li v-for="file in files">
          {{ file.name }} ({{ file.size | kb }} kb) <button @click="removeFile(file)" title="Remove">X</button>
        </li>
      </ul>
      
      <button :disabled="uploadDisabled" @click="upload">Upload</button> 
    </div> -->
  </div>
</template>

<script>
import navbar from './nav.vue'

// Vue.config.productionTip = false;
// Vue.config.devtools = false;

// Vue.filter('kb', val => {
//   return Math.floor(val/1024);  
// });

export default {
  name: 'first-page',
  data: {
    files:[]
  },
  components: {
    'nav-bar': navbar
  }
  // computed: {
  //   uploadDisabled() {
  //     return this.files.length === 0;
  //   }
  // },
  // methods:{
    // addFile(e) {
    //   let droppedFiles = e.dataTransfer.files;
    //   if(!droppedFiles) return;
    //   // this tip, convert FileList to array, credit: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
    //   ([...droppedFiles]).forEach(f => {
    //     this.files.push(f);
    //   });
    // },
    // removeFile(file){
    //   this.files = this.files.filter(f => {
    //     return f != file;
    //   });      
    // },
    // upload() {
    //   let formData = new FormData();
    //   this.files.forEach((f,x) => {
    //     formData.append('file'+(x+1), f);
    //   });
      
    //   fetch('https://httpbin.org/post', {
    //     method:'POST',
    //     body: formData
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //      console.log('done uploading', res);
    //   })
    //   .catch(e => {
    //     console.error(JSON.stringify(e.message));
    //   });
    // }
//   }
}
</script>

<style scoped>
  p {
    font-size: 1rem;
    max-width: 42vw;
  }

  .descriptor {
    margin-left: 50px;
  }


  .upload {
    height: 50vh; 
    background-color: rgba(41, 0, 138, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  }

  .white {
    color: white; 
  }

  .bean {
    /* background-image: url('../assets/bean.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom; 
    min-height: 60vh;*/
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px;
    padding-top: 60px;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drop {
    background-color: rgb(233, 240, 254);
    height: 30vh;
    width: 50vw;
    border: dashed 2px rgba(41, 0, 138, 1);
    margin: 30px 0;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row {
    display: flex;
    align-items: stretch;
  }

  .col > img {
    max-width: 100% !important;
    height: 300px;
  }

  .col {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: 90px;
  }

  .writing {
    margin-top: 30px;
  }
</style>