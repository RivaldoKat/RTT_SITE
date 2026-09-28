<template>
  <CorporatePageShell :hero-image="visionMissionImage">
    <div class="global-corporate-font text-grey-9 text-body1">
      <section class="vision-intro">
        <div class="section-kicker">Purpose and direction</div>
        <h1>Global know-how, delivered with local conviction.</h1>
        <p
          >We build long-term value through high-performance products,
          customer-focused service, and a team that understands the industries
          it serves.</p
        >
      </section>
      <CorporateSectionHeading title="Our Mission" />
      <div
        class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style"
      >
        <p
          >The goal of <span class="text-weight-medium">REMA TIP TOP</span> is
          to become one of the leading providers in identified business sectors
          around the world. For its profitable growth, the company counts on its
          high-value products and customer-oriented services.</p
        >
        <p
          >The close networking of global know-how extended to a localised,
          knowledgeable presence, ensures a valued, quality service to the
          customer. A strong team spirit and a clear mission form a solid basis
          for this.</p
        >
      </div>

      <h3
        class="corporate-heading text-subtitle1 text-weight-bold text-dark q-mb-lg"
        >Identified business sectors supplied by Rema Tip Top</h3
      >
      <div class="row q-col-gutter-lg justify-center q-mb-xl">
        <div
          v-for="sector in sectors"
          :key="sector.name"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-card
            flat
            class="sector-card column flex-center q-pa-lg text-center"
          >
            <q-img
              :src="sector.image"
              :alt="sector.name"
              class="sector-icon-img q-mb-md"
              fit="contain"
            />
            <div class="text-weight-medium text-grey-8">{{ sector.name }}</div>
          </q-card>
        </div>
      </div>

      <q-separator class="q-my-xl" />
      <CorporateSectionHeading title="Our Vision" />
      <div
        class="q-gutter-y-lg q-mb-xl text-weight-light line-height-relaxed body-text-style"
      >
        <p
          ><span class="text-weight-medium">REMA TIP TOP</span> focuses entirely
          on surpassing customer expectations in satisfying their needs and
          requirements.</p
        >
        <p
          >The needs and requirements of our customers are the driving force
          that stimulate us to extend and continually optimise our portfolio in
          a manner consistent with their expectations.</p
        >
      </div>
      <q-img
        :src="ourValuesImage"
        alt="Our values"
        class="values-image"
        fit="contain"
      />
      <CorporateBanner />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'
import cementImage from '@/assets/cement.jpg'
import chemicalsImage from '@/assets/chemicals.jpg'
import miningImage from '@/assets/mining.jpg'
import portsImage from '@/assets/ports.jpg'
import pulpImage from '@/assets/pulp.jpg'
import quarriesImage from '@/assets/quarries.jpg'
import ourValuesImage from '@/assets/Our-Values.png'
import visionMissionImage from '@/assets/visionmission.jpg'

const sectors = [
  { name: 'Ports', image: portsImage },
  { name: 'Pulp Paper', image: pulpImage },
  { name: 'Quarries', image: quarriesImage },
  { name: 'Cement', image: cementImage },
  { name: 'Chemicals', image: chemicalsImage },
  { name: 'Mining', image: miningImage }
]
</script>

<style scoped>
.sector-card {
  min-height: 180px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 4%);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.sector-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
}

.sector-icon-img {
  width: 90px;
  height: 90px;
}

.values-image {
  display: block;
  width: 100%;
  max-height: 520px;
  margin-bottom: 2rem;
}

.vision-intro {
  max-width: 820px;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d9dfe1;
}

.section-kicker {
  margin-bottom: 0.6rem;
  color: #c5221d;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.vision-intro h1 {
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.04;
}

.vision-intro p {
  max-width: 650px;
  margin: 1rem 0 0;
  color: #68757d;
  font-size: 1.05rem;
  line-height: 1.6;
}
</style>
