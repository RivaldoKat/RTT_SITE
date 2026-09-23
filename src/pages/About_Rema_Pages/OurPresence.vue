<template>
  <CorporatePageShell>
    <div class="global-corporate-font">
      <CorporateSectionHeading title="Our Presence" />
      <p class="text-weight-light text-grey-8 text-body2 q-mb-md"
        >Rema Tip Top have branches in many African countries. Fully trained
        local, professional service providers are stationed at these branches to
        ensure that you are provided the best products and receive quality after
        sales service.</p
      >
      <p class="text-italic text-negative text-subtitle2 q-mb-xl"
        >Hover or tap on any flashing circle for more info.</p
      >
      <div class="map-wrapper">
        <img :src="mapImage" alt="Rema Tip Top Presence Map" />
      </div>
      <CorporateBanner class="q-mt-xl" />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'
import mapImage from '@/assets/map.jpg'
</script>

<style scoped>
.map-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.map-wrapper img {
  display: block;
  width: 100%;
  max-height: 65vh;
  object-fit: contain;
}
</style>
