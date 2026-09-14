<template>
  
  <div class="main-layout-container global-corporate-font q-mx-auto q-pa-md">
    
    <div class="column items-center style-container" style="max-width: 100%; width: 1200px;">
      
      <!-- Top Content Section -->
      <div class="q-mb-md" q-mx-auto q-pa-md>
        <div class="text-h5 text-weight-bold text-dark">
          Our Presence
        </div>
        
        <div class="dotted-separator q-mb-md" style="border-bottom: 4.6px dotted #b71c1c; width: 100%;"></div>
        
        <div class="text-weight-light text-grey-8 text-body2 q-mb-md">
          <p class="q-mb-sm">
            Rema Tip Top have branches in many African countries. Fully trained local, professional service providers are stationed at these branches to ensure that you are provided the best products and receive quality after sales service.
          </p>
        </div>
        
        <div class="text-italic text-negative text-subtitle2">
          Hover or tap on any flashing circle for more info.
        </div>
      </div>

      <!-- Centered Map Container restricted by viewport boundaries to stop it from cropping or stretching -->
      <div class="map-wrapper flex flex-center" style="width: 100%; max-height: 65vh; position: relative;">
        <img 
          src="src/assets/map.jpg" 
          alt="Rema Tip Top Presence Map" 
          class="q-mx-auto"
          style="max-width: 100%; max-height: 65vh; object-fit: contain; display: block;"
        />
      </div>

      <div class="row flex-center corporate-banner text-white q-py-sm text-weight-bold">
        GERMAN ENGINEERING / MADE IN AFRICA / FOR AFRICA
      </div>

    </div>

  </div>
  
</template>

<style scoped>

.corporate-banner {
  background-color: #ff2a2a; /* Vibrant corporate red color matching the image */
  font-family: 'Montserrat', sans-serif; /* High-impact heading typography */
  font-size: 1.85rem;
  letter-spacing: 0.05em; /* Cleaner international reading rhythm for uppercase letters */
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

.main-layout-container {
  width: 100%;
  max-width: 1200px;
}

.global-corporate-font {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

</style>
