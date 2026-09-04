<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      height="620px"
      infinite
      control-text-color="red"
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide class="no-padding" :name="1" img-src="/src/assets/ViewsOne.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2 text-white">First stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="/src/assets/ViewsThree.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h4 text-white">Second stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="/src/assets/ViewsTwo.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="caption-text text-h4 text-white">Third stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Famous Bridge</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="/src/assets/ViewsOne.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="caption-text text-h4 text-white">Fourth stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Quasar Framework</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <!-- HERO SECTION WRAPPER -->
  <div class="hero-section q-pa-md" >
    <!-- Clean, independent dark background block -->
    <div class="hero-bg"></div>

    <!-- Floating content container -->
    <div class="hero-content">
      
      <!-- LEFT SIDE: Top-aligned Text and Map -->
      <div class="hero-left">
        <div class="text-block">
          <h1 class="text-h3 q-mb-sm text-weight-regular text-grey-3">REMA TIP TOP</h1>
          <h2 class="text-h4 text-weight-regular text-grey-3">
            South Africa And<br />
            African Group
          </h2>
        </div>

        <div class="africa-map">
          <img
            src="src/assets/Afrique.png"
            alt="Africa Map"
            class="africa-svg"
          />
        </div>
      </div>

      <!-- RIGHT SIDE: The 3-Image Grid -->
      <div class="hero-right">
        <div class="images-grid">
          <div class="image-large">
            <img src="src/assets/PicCutOne.jpg" alt="Conveyor Belt" class="full-img" />
          </div>
          <div class="images-row">
            <div class="image-small">
              <img src="src/assets/PicCutTwo.jpg" alt="Tire" class="full-img" />
            </div>
            <div class="image-small">
              <img src="src/assets/PicCutThree.jpg" alt="Cable" class="full-img" />
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </div>

  <q-separator spaced vertical="false"/>

  <!-- Product Cards -->
  <div class="grandparent">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>
      
      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutThree.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

         <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
      </q-card-actions>

      </q-card>

      
    </div>

    <q-separator spaced vertical="false"/>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutThree.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>
        
      </q-card>

      
    </div>

    <q-separator spaced vertical="false"/>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>


      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutThree.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>


        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>


      </q-card>

      <q-card class="my-card">
        <img alt="Mountains" src="src/assets/PicCutOne.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
        </q-card-actions>

      </q-card>

    </div>
      
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const autoplay = ref(true)
</script>

<style scoped>
/* Carousel Styles */
.custom-caption{
  text-align: center;
  padding: 12px;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, .3);
  }
 


/* HERO SECTION STYLES */
.hero-section {
  position: relative;
  width: 100%;
  background-color: #ffffff; /* The pure white base revealed underneath */
}

/* 
  FIX 1: Isolate the background shape.
  We make this an absolute box that sits behind the content text/images.
*/
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 680px; /* Fixed height for the dark background block */
  background-color: rgb(37, 36, 36);
  /* The slant cuts across the box cleanly */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
  z-index: 1;
}



.hero-content {
  position: relative;
  z-index: 2; 
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 60px 0 60px; 
  gap: 50px;
}


.hero-left {
  flex: 1.2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  padding-top: 20px;
  margin-left: 90px;
}

.text-block {
  flex: 1;
}




.africa-map {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.africa-svg {
  width: 260px; 
  height: auto;
  object-fit: contain;
  
}


.hero-right {
  flex: 1;
  max-width: 1000px;
  margin-right: 76px;
}

.images-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.image-large {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

.images-row {
  display: flex;
  width: 100%;

  gap: 16px;
}

.image-small {
  flex: 1;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  
  box-shadow: 0 15px 35px rgba(0,0,0,0.35); 
}

.full-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  /* display: block; */
}


@media (max-width: 1100px) {
  .hero-bg {
    height: 720px;
  }
  
  .hero-content {
    flex-direction: column;
    padding: 60px 30px 60px 30px;
    gap: 50px;
  }

  .hero-left, .hero-right {
    width: 100%;
    max-width: 100%;
  }

  .hero-left {
    justify-content: space-around;
  }
}

@media (max-width: 600px) {
  .hero-bg {
    height: 940px;
  }

  .hero-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  
  .africa-map {
    margin-left: 0;
    align-self: center;
  }
}

/* Cards with product information */
.my-card{
  width: 150%;
  max-width: 350px;
  align-items: center;
  margin: auto;
  gap: 10px;
  padding: 10px;
}

.grandparent {
  position: relative;
}

.q-pa-md.row.items-start.q-gutter-md {
  gap:10px;
  scroll-padding-top: 10px;
}
</style>
