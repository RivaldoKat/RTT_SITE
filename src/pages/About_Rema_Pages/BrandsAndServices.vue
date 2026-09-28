<template>
  <CorporatePageShell>
    <div class="brands-page global-corporate-font">
      <CorporateSectionHeading title="Our Brands" />

      <div class="brands-intro">
        <div>
          <div class="brands-intro__kicker"
            >One global network. Multiple specialist brands.</div
          >
          <h1>Trusted names for demanding industries.</h1>
        </div>
        <p
          >From conveyor systems to tyre repair, our portfolio brings global
          know-how closer to every customer.</p
        >
      </div>

      <div class="brands-grid">
        <q-card
          v-for="brand in brands"
          :key="brand.name"
          flat
          class="brand-card"
        >
          <div class="brand-image-frame" :class="brand.imageClass">
            <q-img
              :src="brand.image"
              :alt="brand.name"
              class="brand-image"
              fit="contain"
            />
          </div>
          <div class="brand-card__name">{{ brand.name }}</div>
        </q-card>
      </div>

      <CorporateBanner class="q-mt-xl" />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'
import dunlopImage from '@/assets/dunlop.jpg'
import remaTipTopImage from '@/assets/favicon.webp'
import otremImage from '@/assets/otrem.jpg'
import rudexImage from '@/assets/rudex.jpg'
import sarmcolImage from '@/assets/sarmcolqual.jpg'

const brands = [
  {
    name: 'Rema Tip Top',
    image: remaTipTopImage,
    imageClass: 'brand-image--rema'
  },
  { name: 'Dunlop Industrial Products', image: dunlopImage },
  { name: 'Sarmcol', image: sarmcolImage, imageClass: 'brand-image--sarmcol' },
  { name: 'Sarmcol Quality Tyres', image: sarmcolImage },
  { name: 'Rudex', image: rudexImage },
  { name: 'Otrem', image: otremImage }
]
</script>

<style scoped>
.brands-page {
  color: #333;
}

.brands-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin: -0.5rem 0 2rem;
}

.brands-intro__kicker {
  margin-bottom: 0.5rem;
  color: #c5221d;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.brands-intro h1 {
  max-width: 640px;
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.04;
}

.brands-intro p {
  max-width: 330px;
  margin: 0;
  color: #68757d;
  line-height: 1.6;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem 1.5rem;
}

.brand-card {
  min-height: 150px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 8%);
  overflow: hidden;
}

.brand-card__name {
  padding: 0.8rem 1rem;
  border-top: 1px solid #edf0f0;
  color: #17242c;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.brand-image-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 150px;
  padding: 0.75rem 1.25rem;
  overflow: hidden;
}

.brand-image {
  width: 100%;
  max-width: 360px;
  height: 120px;
}

.brand-image--rema {
  display: block;
  width: 150px;
  height: 150px;
  margin-inline: auto;
}

.brand-image--sarmcol .brand-image {
  height: 72px;
  object-fit: cover;
  object-position: top;
}

@media (max-width: 767px) {
  .brands-intro {
    display: block;
  }

  .brands-intro p {
    margin-top: 1rem;
  }

  .brands-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .brand-card,
  .brand-image-frame {
    min-height: 125px;
  }

  .brand-image {
    height: 95px;
  }

  .brand-image--rema {
    width: 125px;
    height: 125px;
    margin-inline: auto;
  }

  .brand-image--sarmcol .brand-image {
    height: 58px;
  }
}

@media (max-width: 420px) {
  .brands-grid {
    grid-template-columns: 1fr;
  }
}
</style>
