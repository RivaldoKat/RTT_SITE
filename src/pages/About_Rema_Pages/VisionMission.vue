<template>
  <!-- Main parallax image section at the top -->
  <div class="row justify-between">
    <q-parallax src="src/assets/visionmission.jpg" :height="500" />
  </div>
  
  <!-- Centered Content Wrapper -->
  <div class="main-layout-container global-corporate-font q-mx-auto q-pa-md">
    
    <!-- Text Content Section -->
    <div class="text-grey-9 text-body1 q-mb-xl">
      <!-- Section Heading -->
      <div class="corporate-heading text-h5 text-weight-bold text-dark q-mb-xs">
        Our Mission
      </div>
      
      <!-- Dotted Divider Line -->
      <div class="dotted-separator q-mb-xl"></div>
      
      <!-- Content Paragraphs -->
      <div class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style">
        <p>
          The goal of <span class="text-weight-medium">REMA TIP TOP</span> is to become one of the leading providers in identified business sectors around the world. For its profitable growth, the company counts on its high-value products and customer-oriented services.
        </p>
        <p>
          The close networking of global know-how extended to a localised, knowledgeable presence, ensures a valued, quality service to the customer. A strong team spirit and a clear mission form a solid basis for this.
        </p>
      </div>
      
      <!-- Section Sub-heading -->
      <div class="corporate-heading text-subtitle1 text-weight-bold text-dark">
        Identified business sectors supplied by Rema Tip Top
      </div>
    </div>

    <!-- Responsive Clean Grid Layout for Cards -->
    <div class="row q-col-gutter-lg justify-center global-corporate-font">
    <div 
      v-for="(sector, index) in cardsData" 
      :key="index" 
      class="col-12 col-sm-6 col-md-4"
    >
      <!-- Clickable Card Component with Soft Professional Shadows -->
      <q-card 
        class="sector-card column flex-center q-pa-lg text-center cursor-pointer" 
        flat
      >
        <!-- Icon/Asset Wrapper Area -->
        <div class="icon-container q-mb-md flex flex-center">
          <q-img 
            :src="sector.image" 
            class="sector-icon-img"
            fit="contain"
          />
        </div>

        <!-- Professional Sector Label Text -->
        <div class="sector-label text-weight-medium text-grey-8">
          {{ sector.name }}
        </div>
      </q-card>
    </div>
  </div>
    <q-separator class="q-my-xl" vertical="false"/>
    <div class="text-grey-9 text-body1 q-mb-xl">
      <!-- Section Heading -->
      <div class="corporate-heading text-h5 text-weight-bold text-dark q-mb-xs">
        Our Vision
      </div>
      
      <!-- Dotted Divider Line -->
      <div class="dotted-separator q-mb-xl"></div>
      
      <!-- Content Paragraphs -->
      <div class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style">
        <p>
          <span class="text-weight-medium">REMA TIP TOP</span> focuses entirely on surpassing customer expectations in satisfying their needs and requirements.
        </p>
        <p>
          The needs and requirements of our customers are the driving force that stimulate us to extend and continually optimise our portfolio in a manner consistent with their expectations.
        </p>
      </div>
      
      <div>
        <q-card class="my-card">
          <q-img src="src/assets/Our-Values.png">
          </q-img>
        </q-card>
      </div>
      
    </div>

    <!-- The solid banner component -->
    <div class="row flex-center corporate-banner text-white q-py-sm q-px-md text-weight-bold">
      GERMAN ENGINEERING / MADE IN AFRICA / FOR AFRICA
    </div>


  </div>

  
</template>

<script setup>

const cardsData = [
  { name: 'Ports', image: 'src/assets/ports.jpg' },
  { name: 'Pulp Paper', image: 'src/assets/pulp.jpg' },
  { name: 'Quarries', image: 'src/assets/quarries.jpg' },
  { name: 'Cement', image: 'src/assets/cement.jpg' },
  { name: 'Chemicals', image: 'src/assets/chemicals.jpg' },
  { name: 'Mining', image: 'src/assets/mining.jpg' }
]
</script>

<style scoped>
/* Import globally recognized high-readability corporate fonts */
@import url('https://googleapis.com');

/* Apply clean, highly-readable Inter globally to body copies */
.global-corporate-font {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Apply sharp, eye-catching Montserrat to structural headings and buttons */
.corporate-heading {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em; /* Tightens text for modern, high-end editorial feel */
}

/* Custom layout fine-tuning */
.main-layout-container {
  width: 100%;
  max-width: 1200px;
}

.dotted-separator {
  border-bottom: 4.6px dotted #b71c1c; 
  width: 100%;
}

.body-text-style {
  letter-spacing: 0.01em;
  font-size: 0.95rem;
}

.line-height-relaxed p {
  line-height: 1.65; /* Optimized spacing line-height for easier cross-border reading */
  margin-bottom: 0.75rem;
}

.my-card {
  background: #ffffff;
  border-color: #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.my-card:hover {
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
}

.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.corporate-banner {
  background-color: #ff2a2a; /* Vibrant corporate red color matching the image */
  font-family: 'Montserrat', sans-serif; /* High-impact heading typography */
  font-size: 1.85rem;
  letter-spacing: 0.05em; /* Cleaner international reading rhythm for uppercase letters */
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

.sector-card {
  background: #ffffff;
  border-radius: 4px;
  min-height: 180px;
  border: 1px solid #f0f0f0;
  /* Recreates the smooth, premium layout drop shadow from the image */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease;
}

/* Elegant visual feedback when international viewers hover over sectors */
.sector-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* Uniform circular icon framing layout configuration */
.icon-container {
  width: 90px;
  height: 90px;
}

.sector-icon-img {
  width: 100%;
  height: 100%;
}

/* Modern corporate typography definitions */
.sector-label {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

</style>
