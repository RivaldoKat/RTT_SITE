<template>
  <q-page class="product-detail-page">
    <div class="product-detail__hero">
      <q-img :src="product.heroImage" :alt="product.title" fit="cover" />
      <div class="product-detail__hero-overlay">
        <div class="product-detail__hero-kicker"
          >REMA TIP TOP | INDUSTRIAL SOLUTIONS</div
        >
        <div class="product-detail__hero-title">{{ product.title }}</div>
      </div>
    </div>

    <main
      class="corporate-container product-detail__content global-corporate-font"
    >
      <div class="product-detail__breadcrumbs"
        >Products / {{ product.title }}</div
      >

      <section class="product-detail__intro corporate-surface">
        <div>
          <div class="product-detail__eyebrow">Engineered for uptime</div>
          <h1 class="product-detail__title">{{ product.title }}</h1>
        </div>
        <div class="product-detail__intro-copy">
          <p v-for="paragraph in product.intro" :key="paragraph">{{
            paragraph
          }}</p>
        </div>
      </section>

      <div class="product-detail__grid">
        <section class="product-detail__panel product-detail__panel--features">
          <div class="product-detail__panel-kicker">Why it matters</div>
          <h2>{{ product.sectionTitle }}</h2>
          <ul>
            <li v-for="feature in product.features" :key="feature">
              <q-icon name="north_east" size="18px" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </section>

        <section
          class="product-detail__panel product-detail__image-panel corporate-surface"
        >
          <div class="product-detail__image-label">Application focus</div>
          <q-img
            :src="product.detailImage"
            :alt="`${product.title} product`"
            fit="contain"
          />
          <div class="product-detail__image-caption"
            >Reliable performance across demanding operating environments.</div
          >
        </section>
      </div>

      <section class="product-detail__footer-note">
        <q-icon name="public" size="22px" />
        <span
          >Backed by REMA TIP TOP expertise across 176+ countries and local
          technical support.</span
        >
      </section>

      <CorporateBanner class="q-mt-xl" />
    </main>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CorporateBanner from '@/components/CorporateBanner.vue'
import africaMap from '@/assets/Afrique.png'
import automotiveImage from '@/assets/Automotive-tyre.jpg'
import conveyorImage from '@/assets/Conveyor-Belting.jpg'
import processingImage from '@/assets/Material-Processing.png'
import surfaceProtectionImage from '@/assets/Surface-Protection.jpg'
import MaterialProcessingImage from '@/assets/Material-Processing.png'
import automotive from '@/assets/Automotive-01.jpg'
import drax_power from '@/assets/Drax_Power.jpg'
import hosehwk from '@/assets/Hose-Hwk.jpg'
import adhesives  from '@/assets/adhesives.jpg'
import adhesiveheader  from '@/assets/adhesive.jpg'
import beltingCleaning from '@/assets/belt-cleaning.jpg'
import beltSplicingPresses from '@/assets/splicingpresses.jpg'
import beltSplicingServicesMaterialsTools from '@/assets/splicing-1.jpg'
import pulleylagging from '@/assets/pulley-lagging.jpg'
import scaper from '@/assets/scaper.png'
import tuv from '@/assets/TUV.jpg'
import idler from '@/assets/Idler-Roller.png'
import liners from '@/assets/liners2.jpg'
import scaperrange from '@/assets/Scraper-range.png'


const route = useRoute()

const sharedFeatures = [
  'Reliable products for demanding industrial applications',
  'Experienced technical support and customer service',
  'Quality materials designed for long service life',
  'Solutions adapted to customer requirements'
]

const productCatalog = {
  'adhesive-systems': {
    title: 'Adhesive Systems',
    heroImage: adhesiveheader,
    detailImage: adhesives,
    intro: [
      'REMA TIP TOP adhesive systems are available for a wide range of applications using materials developed over many years of scientific research.',
      'Our complete range of tools and bonding systems supports easy, cost-effective bonding and repairs.'
    ],
    sectionTitle: 'Benefits',
    features: [
      'Excellent bonding strengths',
      'Excellent static resistance',
      'Outstanding dynamic strength',
      'Durable and reliable joints',
      'Easy application and easy handling'
    ]
  },
  automotive: {
    title: 'Automotive',
    heroImage: automotive,
    detailImage: automotive,
    intro: [
      'REMA TIP TOP offers the Automotive sector a unique and comprehensive program consisting of customer-oriented services.'
    ],
    sectionTitle: 'Tyre Repair Material',
    features: [
      'OTR, off-the-road applications',
      'Truck and bus solutions',
      'Motor vehicles',
      'Motorcycles',
      'Bicycles'
    ]
  },
  'belt-cleaning': {
    title: 'Belt Cleaning Systems',
    heroImage: scaper,
    detailImage: scaperrange,
    intro: [
      'REMA TIP TOP belt cleaning products and technologies improve operational efficiency of belt conveyor systems, reduce material losses and prevent premature failure of equipment.'
    ],
    sectionTitle: 'Benefits',
    features: [
      'Broad range of conveyor belt cleaning systems',
      'Experienced conveyor technology specialists',
      'Efficient installation and servicing',
      'Reduced cost of cleaning',
      'Increased operating safety'
    ]
  },
  'belt-splicing-presses': {
    title: 'Belt Splicing Presses',
    heroImage: beltSplicingPresses,
    detailImage: tuv,
    intro: [
      'REMA TIP TOP has developed a reputation as a high-quality conveyor belt splicing and repair service provider. Our equipment and tools support world-class service teams.'
    ],
    sectionTitle: 'Press Features',
    features: [
      'Equal surface pressure over the complete splice',
      'Pressure bags with high safety standards',
      'Lightweight, high-strength construction',
      'Optimised monitoring of temperature differentials',
      'Optional data recording'
    ]
  },
  'belt-splicing-services-materials-tools': {
    title: 'Belt Splicing Services, Materials & Tools',
    heroImage: beltSplicingPresses,
    detailImage: beltSplicingServicesMaterialsTools,
    intro: [
      'REMA TIP TOP products and services increase the longevity and efficiency of belt conveyor systems.',
      'Our service teams are trained in conveyor belt repairs, hot and cold splicing, textile reinforced belting and pulley lagging.'
    ],
    sectionTitle: 'Repair Material',
    features: [
      'Vulcanising material for fabric and steel cord reinforced belts',
      'Cold bond systems for belt repairs',
      'Hot bond systems for belt repairs',
      'Splicing tool kits'
    ]
  },
  'conveyor-belting': {
    title: 'Conveyor Belting Solutions',
    heroImage: conveyorImage,
    detailImage: conveyorImage,
    intro: [
      'REMA TIP TOP manufacture innovative high-performance conveyor belts that fulfil established international standards for a wide range of requirements.'
    ],
    sectionTitle: 'Product Features',
    features: [
      'Synthetic textile conveyor belts',
      'Steel cord reinforced conveyor belting',
      'Solid woven construction',
      'Steep incline conveyor belts',
      'Heat, oil and chemical resistant belts'
    ]
  },
  'hand-built-mining-industrial-hose': {
    title: 'Hand Built Mining & Industrial Hose',
    heroImage: hosehwk,
    detailImage: hosehwk,
    intro: [
      'Our hand-built hose range is developed for demanding mining and industrial applications where durability and reliable performance are essential.'
    ],
    sectionTitle: 'Applications',
    features: sharedFeatures
  },
  'idler-systems': {
    title: 'Idler Systems',
    heroImage: idler,
    detailImage: idler,
    intro: [
      'REMA TIP TOP offer a complete range of steel, impact and HDPE idler rollers together with standard, self-aligning and suspended conveyor idler frames.'
    ],
    sectionTitle: 'Key Features',
    features: [
      'Low seal friction',
      'Ovality and concentricity within specified tolerances',
      'Bearings greased for life',
      'Controlled quality standards',
      'Extended equipment life'
    ]
  },
  'mill-liners': {
    title: 'Mill Liners',
    heroImage: MaterialProcessingImage,
    detailImage: liners,
    intro: [
      'REMA TIP TOP provides high-quality mill liners manufactured from carefully selected materials to suit demanding mineral processing requirements.'
    ],
    sectionTitle: 'Benefits',
    features: [
      'Customer-specific lining systems',
      'Quick and safe installation',
      'Noise reduction',
      'Less downtime',
      'Improved productivity'
    ]
  },
  'pulley-lagging': {
    title: 'Pulley Lagging',
    heroImage: pulleylagging,
    detailImage: pulleylagging,
    intro: [
      'REMA TIP TOP has an extensive range of pulley lagging that can be efficiently applied to conveyor pulleys using cold bonding processes.'
    ],
    sectionTitle: 'Features',
    features: [
      'High coefficient of friction',
      'High wear resistance',
      'Efficient self-cleaning ability',
      'Corrosion resistant',
      'Reduced belt tension'
    ]
  },
  'surface-protection': {
    title: 'Surface Protection',
    heroImage: surfaceProtectionImage,
    detailImage: surfaceProtectionImage,
    intro: [
      'REMA TIP TOP offers comprehensive surface protection solutions designed to extend the life of your equipment and improve operational efficiency.'
    ],
    sectionTitle: 'Product Lines',
    features: [
      'Corrosion protection rubber lining materials',
      'Rubber sheeting',
      'Fluoropolymer linings',
      'Coatings',
      'Glass flake systems',
      'Brick & Tile linings',
      'Anti-caking',
      'Combination linings',
      'Adhesives',
      'Impact, wear plates and bars',
      'Skirting systems',
      'Moulded rubber & ceramics'

    ]
  },
  'rema-tip-top-academy': {
    title: 'Rema Tip Top Academy',
    heroImage: africaMap,
    detailImage: africaMap,
    intro: [
      'The REMA TIP TOP Academy supports skills development through practical training and knowledge sharing for customers and service teams.'
    ],
    sectionTitle: 'Training Benefits',
    features: [
      'Practical application training',
      'Experienced instructors',
      'Safety-focused learning',
      'Improved service quality',
      'Training adapted to customer needs'
    ]
  }
}

const product = computed(
  () =>
    productCatalog[route.params.type] ?? {
      title: 'Product Information',
      heroImage: conveyorImage,
      detailImage: conveyorImage,
      intro: ['Product information is being prepared.'],
      sectionTitle: 'Features',
      features: sharedFeatures
    }
)
</script>

<style scoped>
.product-detail__hero {
  position: relative;
  height: clamp(430px, 30vw, 360px);
  overflow: hidden;
}

.product-detail__hero :deep(.q-img__image) {
  filter: saturate(0.8);
}

.product-detail__hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: clamp(1.5rem, 5vw, 4rem) max(1rem, calc((100% - 1200px) / 2));
  background: linear-gradient(90deg, rgb(8 20 27 / 72%), rgb(8 20 27 / 12%));
  color: #fff;
}

.product-detail__hero-kicker,
.product-detail__eyebrow,
.product-detail__panel-kicker,
.product-detail__image-label {
  color: #df2b24;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.product-detail__hero-kicker {
  color: #fff;
  opacity: 0.82;
}

.product-detail__hero-title {
  max-width: 760px;
  margin-top: 0.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  line-height: 1.02;
}

.product-detail__content {
  padding-top: 2.5rem;
}

.product-detail__breadcrumbs {
  margin-bottom: 1.25rem;
  color: #7a858b;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.product-detail__title {
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.7rem, 3vw, 2.7rem);
  line-height: 1.08;
}

.product-detail__intro {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.8fr);
  gap: 2rem;
  padding: 1.75rem 2rem;
  border-left: 4px solid #ed3028;
}

.product-detail__intro-copy {
  color: #5d6a71;
  font-size: 1rem;
  line-height: 1.7;
}

.product-detail__intro p {
  margin: 0 0 0.8rem;
}

.product-detail__intro p:last-child {
  margin-bottom: 0;
}

.product-detail__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
}

.product-detail__panel {
  min-height: 260px;
  padding: 1.75rem;
  background: #f3f5f4;
  border-top: 4px solid #ed3028;
}

.product-detail__panel h2 {
  margin: 0.5rem 0 1.5rem;
  color: #17242c;
  font-size: 1.45rem;
  font-weight: 700;
}

.product-detail__panel ul {
  display: grid;
  gap: 0.85rem;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #5d6a71;
  font-size: 0.92rem;
}

.product-detail__panel li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  line-height: 1.45;
}

.product-detail__panel li .q-icon {
  flex: 0 0 auto;
  color: #ed3028;
}

.product-detail__image-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  text-align: center;
}

.product-detail__image-panel .q-img {
  width: 100%;
  height: 220px;
  margin: 0.5rem 0;
}

.product-detail__image-caption {
  max-width: 340px;
  color: #68757d;
  font-size: 0.8rem;
  line-height: 1.45;
}

.product-detail__footer-note {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem 1.25rem;
  background: #17242c;
  color: #fff;
  font-size: 0.85rem;
}

.product-detail__footer-note .q-icon {
  flex: 0 0 auto;
  color: #ed3028;
}

@media (max-width: 700px) {
  .product-detail__intro {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  .product-detail__grid {
    grid-template-columns: 1fr;
  }

  .product-detail__hero {
    height: 220px;
  }
}
</style>
