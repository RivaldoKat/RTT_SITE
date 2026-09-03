<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      height="500px"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="/src/assets/ViewsOne.jpg"
      >
        <div class="caption-container">
          <div class="caption-text text-h4 text-white">First stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="/src/assets/ViewsThree.jpg"
      >
        <div class="caption-container">
          <div class="caption-text text-h4 text-white">Second stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="3"
        img-src="/src/assets/ViewsTwo.jpeg"
      >
        <div class="caption-container">
          <div class="caption-text text-h4 text-white">Third stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Famous Bridge</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="4"
        img-src="/src/assets/ViewsOne.jpg"
      >
        <div class="caption-container">
          <div class="caption-text text-h4 text-white">Fourth stop</div>
          <div class="caption-subtext text-subtitle1 text-grey-3">Quasar Framework</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="hero-section q-pa-md">
    <!-- The Dark Background with Diagonal Cut -->
    <div class="hero-bg">
      
      <div class="row justify-between items-center q-px-xl q-py-lg full-height">
        
        <!-- LEFT SIDE: Text & Logo -->
        <div class="col-12 col-md-6 text-white z-index-1">
          <h1 class="text-h2 text-weight-bold q-mb-md">REMA TIP TOP</h1>
          <h2 class="text-h4 text-weight-regular q-mb-lg">
            South Africa And<br />
            African Group
          </h2>
          
          <!-- Placeholder for your Africa Map Graphic -->
          <!-- You should replace this with your actual SVG/PNG of the red Africa map -->
          <div class="africa-graphic">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Africa_blank.svg/1200px-Africa_blank.svg.png" 
              alt="Africa Map" 
              class="africa-img"
            />
          </div>
        </div>

        <!-- RIGHT SIDE: Image Grid -->
        <div class="col-12 col-md-6 z-index-1">
          <div class="row q-col-gutter-md">
            <!-- Top Large Image -->
            <div class="col-12">
              <div class="image-card shadow-3">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Conveyor Belt" 
                  class="full-img"
                />
              </div>
            </div>
            
            <!-- Bottom Two Small Images -->
            <div class="col-6">
              <div class="image-card shadow-3">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                  alt="Heavy Tire" 
                  class="full-img"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="image-card shadow-3">
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop" 
                  alt="Industrial Hose" 
                  class="full-img"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    <!-- White filler to push content down (optional, helps see the diagonal) -->
    <div style="height: 100px; background: white;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const autoplay = ref(true)
</script>

<style scoped>
/* 1. Position the container at the vertical center */
.caption-container {
  position: absolute;
  top: 50%;
  left: 50%;
  /* Start slightly below center, we will animate UP from here */
  transform: translate(-50%, 50px); 
  text-align: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  
  /* 2. Setup the animation */
  opacity: 0;
  animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.3s; /* Short delay before it starts moving */
}

/* 3. The Animation: From Bottom to Center */
@keyframes slideUpFade {
  0% {
    opacity: 0;
    /* Start 50px below its natural center position */
    transform: translate(-50%, 50px); 
  }
  100% {
    opacity: 1;
    /* End at exact center */
    transform: translate(-50%, -50%); 
  }
}

/* Styling for readability */
.caption-text {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 8px;
}

.caption-subtext {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

.hero-section {
  position: relative;
  width: 100%;
  /* Adjust height to match your design */
  min-height: 500px; 
}

/* 2. The Dark Background with Diagonal Cut */
.hero-bg {
  background-color: #1a1a1a; /* Dark grey/black */
  width: 100%;
  height: 100%;
  min-height: 500px;
  
  /* This creates the diagonal cut at the bottom */
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  
  /* Ensure content sits on top */
  position: relative;
}

/* 3. Left Side Styling */
.africa-graphic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg); /* Adjust rotation to match design */
  opacity: 0.8;
  z-index: 0; /* Behind the text */
  pointer-events: none; /* Clicks pass through to text */
}

.africa-img {
  width: 400px; /* Adjust size */
  /* This filter turns a black map into a red map (if using SVG/PNG) */
  filter: invert(20%) sepia(90%) saturate(7000%) hue-rotate(350deg) brightness(90%) contrast(103%);
}

/* 4. Right Side Image Cards */
.image-card {
  border-radius: 8px;
  overflow: hidden;
  height: 200px; /* Fixed height for consistency */
  width: 100%;
}

/* Make the top image taller */
.row .col-12 .image-card {
  height: 300px;
}

.full-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crops image to fill card nicely */
  display: block;
}

/* Z-index to ensure text is above the background graphic */
.z-index-1 {
  position: relative;
  z-index: 1;
}
</style>