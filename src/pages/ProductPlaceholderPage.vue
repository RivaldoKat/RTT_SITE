<template>
  <q-page class="product-detail-page">
    <div class="product-detail__hero">
      <q-img :src="product.heroImage" :alt="product.title" fit="cover" />
    </div>

    <main
      class="corporate-container product-detail__content global-corporate-font"
    >
      <h1 class="product-detail__title">{{ product.title }}</h1>
      <div class="dotted-separator q-mb-xl" />

      <section class="product-detail__intro">
        <p v-for="paragraph in product.intro" :key="paragraph">{{
          paragraph
        }}</p>
      </section>

      <div class="product-detail__grid">
        <section class="product-detail__panel">
          <h2>{{ product.sectionTitle }}</h2>
          <ul>
            <li v-for="feature in product.features" :key="feature">{{
              feature
            }}</li>
          </ul>
        </section>

        <section class="product-detail__panel product-detail__image-panel">
          <q-img
            :src="product.detailImage"
            :alt="`${product.title} product`"
            fit="contain"
          />
        </section>
      </div>

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
import cementImage from '@/assets/cement.jpg'
import chemicalsImage from '@/assets/chemicals.jpg'
import conveyorImage from '@/assets/Conveyor-Belting.jpg'
import miningImage from '@/assets/mining.jpg'
import plantImage from '@/assets/howick.jpg'
import processingImage from '@/assets/Material-Processing.png'
import picCutOne from '@/assets/PicCutOne.jpg'
import picCutThree from '@/assets/PicCutThree.jpg'
import picCutTwo from '@/assets/PicCutTwo.jpg'
import surfaceProtectionImage from '@/assets/Surface-Protection.jpg'

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
    heroImage: chemicalsImage,
    detailImage: chemicalsImage,
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
    heroImage: automotiveImage,
    detailImage: automotiveImage,
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
    heroImage: surfaceProtectionImage,
    detailImage: surfaceProtectionImage,
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
    heroImage: processingImage,
    detailImage: processingImage,
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
    heroImage: processingImage,
    detailImage: picCutTwo,
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
    heroImage: picCutThree,
    detailImage: picCutThree,
    intro: [
      'Our hand-built hose range is developed for demanding mining and industrial applications where durability and reliable performance are essential.'
    ],
    sectionTitle: 'Applications',
    features: sharedFeatures
  },
  'idler-systems': {
    title: 'Idler Systems',
    heroImage: picCutOne,
    detailImage: picCutOne,
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
    heroImage: miningImage,
    detailImage: miningImage,
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
    heroImage: cementImage,
    detailImage: cementImage,
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
  'technical-advisory': {
    title: 'Technical Advisory',
    heroImage: plantImage,
    detailImage: plantImage,
    intro: [
      'Our technical advisory service provides practical support for product selection, installation, maintenance and system improvement.'
    ],
    sectionTitle: 'Service Benefits',
    features: sharedFeatures
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
  height: clamp(220px, 30vw, 360px);
  overflow: hidden;
}

.product-detail__hero :deep(.q-img__image) {
  filter: saturate(0.8);
}

.product-detail__content {
  padding-top: 1rem;
}

.product-detail__title {
  margin: 0;
  color: #222;
  font-size: 1.25rem;
  font-weight: 600;
}

.product-detail__intro,
.product-detail__panel {
  padding: 1rem;
  background: white;
  box-shadow: 0 5px 18px rgb(0 0 0 / 8%);
}

.product-detail__intro {
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.55;
}

.product-detail__intro p {
  margin: 0 0 0.75rem;
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
}

.product-detail__panel h2 {
  margin: 0 0 0.75rem;
  color: #ff2a2a;
  font-size: 1rem;
  font-weight: 400;
}

.product-detail__panel ul {
  display: grid;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
  color: #555;
  font-size: 0.85rem;
}

.product-detail__panel li::before {
  margin-right: 0.6rem;
  color: #ff2a2a;
  content: '↗';
}

.product-detail__image-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-detail__image-panel .q-img {
  width: 100%;
  height: 100%;
}

@media (max-width: 700px) {
  .product-detail__grid {
    grid-template-columns: 1fr;
  }

  .product-detail__hero {
    height: 220px;
  }
}
</style>
