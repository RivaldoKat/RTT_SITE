<template>
  <CorporatePageShell>
    <div class="global-corporate-font">
      <CorporateSectionHeading title="Our Presence" />
      <section class="presence-intro">
        <div>
          <div class="section-kicker">Local expertise, global reach</div>
          <h1>Connected to industry in 176+ countries.</h1>
          <p
            >Rema Tip Top combines international engineering knowledge with
            trained local service teams, so support is close to the operation
            wherever it is needed.</p
          >
        </div>
        <div class="presence-stat"
          ><strong>176+</strong
          ><span>countries connected through the global network</span></div
        >
      </section>
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
  padding: 1rem;
  background: #f3f5f4;
  border: 1px solid #e4e8e8;
}

.map-wrapper img {
  display: block;
  width: 100%;
  max-height: 65vh;
  object-fit: contain;
}

.presence-intro {
  display: grid;
  grid-template-columns: 1.5fr 0.8fr;
  gap: 2rem;
  align-items: end;
  margin-bottom: 1.5rem;
}

.section-kicker {
  margin-bottom: 0.6rem;
  color: #c5221d;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.presence-intro h1 {
  max-width: 680px;
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.04;
}

.presence-intro p {
  max-width: 680px;
  line-height: 1.6;
}

.presence-stat {
  padding: 1.5rem;
  border-left: 4px solid #ed3028;
  background: #f3f5f4;
}

.presence-stat strong,
.presence-stat span {
  display: block;
}

.presence-stat strong {
  color: #17242c;
  font-size: 2.4rem;
  line-height: 1;
}

.presence-stat span {
  margin-top: 0.5rem;
  color: #68757d;
  font-size: 0.8rem;
  line-height: 1.4;
}

@media (max-width: 767px) {
  .presence-intro {
    grid-template-columns: 1fr;
  }
}
</style>
