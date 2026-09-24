<template>
  <q-page>
    <q-carousel
      v-model="slide"
      class="home-carousel"
      animated
      infinite
      arrows
      navigation
      control-color="red"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="item in carouselSlides"
        :key="item.name"
        :name="item.name"
        class="no-padding home-carousel__slide"
        :class="{ 'home-carousel__slide--active': slide === item.name }"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="home-carousel__image"
          :class="{ 'home-carousel__image--active': slide === item.name }"
        />
        <div
          class="home-carousel__caption"
          :class="{ 'home-carousel__caption--active': slide === item.name }"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <section class="home-hero">
      <div class="home-hero__content">
        <div class="home-hero__intro">
          <div>
            <h1>REMA TIP TOP</h1>
            <h2>South Africa And<br />African Group</h2>
          </div>
          <img :src="africaMap" alt="Africa Map" class="home-hero__map" />
        </div>
        <div class="home-hero__gallery">
          <div
            v-for="image in heroImages"
            :key="image.src"
            class="home-hero__image"
            :class="image.className"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>
      </div>
    </section>

    <section class="home-introduction">
      <div class="home-introduction__copy">
        <h2>This is REMA TIP TOP</h2>
        <p
          >REMA stands for REpair MAt material and embodies our commitment to
          repair and reusability. We have been committed to the environment
          since our foundation. In a time when sustainability and efficiency are
          becoming increasingly important, we offer technology that conserves
          resources and minimizes environmental impact, while increasing the
          uptime of your equipment and improving its safety and efficiency.</p
        >
        <p
          >As a leading global provider, we are represented in over 190
          countries. Our extensive network of service technicians enables us to
          dedicate ourselves to your needs with the care and attention you
          deserve, every day, all over the world.</p
        >
        <p
          >We believe in quality, service and innovation in every area of our
          business.</p
        >
      </div>
    </section>

    <section
      ref="productsSection"
      class="home-products"
      :class="{ 'home-products--visible': productsVisible }"
    >
      <div class="home-products__grid">
        <q-card
          v-for="(product, index) in products"
          :key="product.to"
          flat
          class="product-card"
          :style="{ '--card-index': index }"
        >
          <q-img
            :src="product.image"
            :alt="product.title"
            class="product-card__image"
          />
          <div class="product-card__overlay" />
          <q-card-section class="product-card__body">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <q-btn :to="product.to" flat no-caps class="product-card__button"
              >Learn more <q-icon name="arrow_forward"
            /></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import africaMap from '@/assets/Afrique.png'
import automotiveImage from '@/assets/Automotive-tyre.jpg'
import cementImage from '@/assets/cement.jpg'
import chemicalsImage from '@/assets/chemicals.jpg'
import conveyorImage from '@/assets/Conveyor-Belting.jpg'
import miningImage from '@/assets/mining.jpg'
import plantImage from '@/assets/howick.jpg'
import processingImage from '@/assets/Material-Processing.png'
import surfaceProtectionImage from '@/assets/Surface-Protection.jpg'

const slide = ref(1)
const autoplay = ref(8000)
const productsSection = ref(null)
const productsVisible = ref(false)
let productsObserver

const heroImages = [
  {
    src: conveyorImage,
    alt: 'Conveyor Belt',
    className: 'home-hero__image--large'
  },
  { src: automotiveImage, alt: 'Automotive tyre', className: '' },
  { src: plantImage, alt: 'Manufacturing plant', className: '' }
]

const carouselSlides = [
  {
    name: 1,
    image: surfaceProtectionImage,
    title: 'Surface Protection',
    subtitle:
      'A comprehensive range of products and services offered by REMA TIP TOP for lining and coating surfaces to provide optimum protection ensuring long, trouble free life.'
  },
  {
    name: 2,
    image: conveyorImage,
    title: 'Conveyor Belting',
    subtitle:
      'Rema Tip Top Manufacture a comprehensive range of conveyor belting in the wholly owned factory, Dunlop Industrial Products, situated on the banks of the Umgeni (Mgeni) river in KwaZulu-Natal province of South Africa.'
  },
  {
    name: 3,
    image: automotiveImage,
    title: 'Automotive',
    subtitle:
      'REMA TIP TOP is a worldwide market leader in the tyre repair sector. In addition to an offering of tyre repair materials and tyre repair systems, we provide retreading and repair services meeting the highest standards of safety and quality.'
  }
]

const productData = [
  [
    'Adhesive Systems',
    chemicalsImage,
    'adhesive-systems',
    'REMA TIP TOP adhesive systems are available for a wide range of applications using materials developed over many years of scientific research.'
  ],
  [
    'Automotive',
    automotiveImage,
    'automotive',
    'REMA TIP TOP offers the Automotive sector a unique and comprehensive program consisting of customer-oriented services.'
  ],
  [
    'Belt Cleaning Systems',
    surfaceProtectionImage,
    'belt-cleaning',
    'REMA TIP TOP has developed a reputation for its high-quality conveyor belt splicing and repair service provider.'
  ],
  [
    'Belt Splicing Presses',
    processingImage,
    'belt-splicing-presses',
    'REMA TIP TOP has developed a reputation over the years as being one of the world’s foremost splicing companies.'
  ],
  [
    'Belt Splicing Services, Materials & Tools',
    automotiveImage,
    'belt-splicing-services-materials-tools',
    'Over many years REMA TIP TOP has earned the reputation as the premier supplier of vulcanising systems for endless conveyor belt splicing.'
  ],
  [
    'Conveyor Belting',
    conveyorImage,
    'conveyor-belting',
    'Rema Tip Top manufactures a comprehensive range of conveyor belting in the wholly owned factory situated on the banks of the Umgeni River.'
  ],
  [
    'Hand Built Mining and Industrial Hose',
    plantImage,
    'hand-built-mining-industrial-hose',
    'Mineral rich sands along Africa’s coastline have long been flooded and then sucked into processing plants using hoses developed at our manufacturing factory.'
  ],
  [
    'Idler Systems',
    conveyorImage,
    'idler-systems',
    'REMA TIP TOP offer a complete range of steel, impact and HDPE idler rollers together with standard, self-aligning and suspended conveyor idler frames.'
  ],
  [
    'Mill Liners',
    miningImage,
    'mill-liners',
    'Reliable wear protection solutions for demanding mineral processing and material handling environments.'
  ],
  [
    'Pulley Lagging',
    cementImage,
    'pulley-lagging',
    'High-performance pulley lagging systems designed to improve traction, protect equipment and extend service life.'
  ],
  [
    'Technical Advisory',
    plantImage,
    'technical-advisory',
    'Practical technical support and application advice from experienced REMA TIP TOP specialists.'
  ],
  [
    'Rema Tip Top Academy',
    africaMap,
    'rema-tip-top-academy',
    'Training and knowledge sharing to help customers and service teams work safely and effectively.'
  ]
]

const products = productData.map(([title, image, slug, description]) => ({
  title,
  image,
  description,
  to: `/products/${slug}`
}))

onMounted(() => {
  if (!productsSection.value || !('IntersectionObserver' in window)) {
    productsVisible.value = true
    return
  }
  productsObserver = new IntersectionObserver(
    entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        productsVisible.value = true
        productsObserver.disconnect()
      }
    },
    { threshold: 0.12 }
  )
  productsObserver.observe(productsSection.value)
})

onBeforeUnmount(() => productsObserver?.disconnect())
</script>

<style scoped>
.home-hero {
  position: relative;
  overflow: hidden;
  min-height: 735px;
  background: white;
  color: white;
}
.home-hero::before {
  position: absolute;
  inset: 0;
  background: #252424;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 49%);
  content: '';
}
.home-hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  width: min(100% - 3rem, 1240px);
  margin: 0 auto;
  padding: 3.5rem 0 6.25rem;
  animation: hero-fade-in 0.9s ease-out both;
}
.home-hero__intro {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  min-width: 0;
}
.home-hero__intro h1 {
  margin: 0 0 1.5rem;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
}
.home-hero__intro h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2.8vw, 2.4rem);
  font-weight: 400;
  line-height: 1.45;
}
.home-hero__map {
  width: clamp(100px, 16vw, 260px);
  max-width: 45%;
  height: auto;
  object-fit: contain;
}
.home-hero__gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.home-hero__image {
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgb(0 0 0 / 30%);
  aspect-ratio: 1.2;
}
.home-hero__image--large {
  grid-column: 1 / -1;
  aspect-ratio: 1.95;
}
.home-hero__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-carousel {
  height: clamp(260px, 34vw, 480px);
}

.home-carousel__caption {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem clamp(1rem, 5vw, 4rem);
  background: linear-gradient(rgb(0 0 0 / 18%), rgb(0 0 0 / 34%));
  color: white;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
}

.home-carousel__slide--active {
  overflow: hidden;
}

.home-carousel__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.home-carousel__image--active {
  animation: carousel-image-zoom 8s linear both;
  transform-origin: center;
  backface-visibility: hidden;
  will-change: transform;
}

.home-carousel__caption--active {
  animation: carousel-caption-fade 0.8s 0.25s ease-out forwards;
}

.home-carousel__caption h2 {
  margin: 1rem 0 0.25rem;
  color: #ff2a2a;
  font-size: clamp(1.4rem, 3vw, 2.4rem);
  font-weight: 500;
  text-shadow: 0 2px 4px rgb(0 0 0 / 45%);
}

.home-carousel__caption p {
  margin: 0;
  color: white;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: 600;
  text-shadow: 0 2px 4px rgb(0 0 0 / 65%);
}

@keyframes carousel-image-zoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.12);
  }
}

@keyframes carousel-caption-fade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home-introduction {
  width: min(100% - 3rem, 1240px);
  margin: 0 auto;
  padding: 4rem 0 5rem;
}
.home-introduction__copy {
  max-width: 600px;
  margin: 0 auto 3.5rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}
.home-introduction__copy h2 {
  margin: 0 0 1rem;
  color: #171717;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.1;
}
.home-introduction__copy p {
  margin: 0 0 1rem;
}
.product-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgb(0 0 0 / 8%), rgb(0 0 0 / 88%));
}
.product-card__button {
  align-self: flex-start;
  padding: 0;
  color: #ff2a2a;
  font-size: 1rem;
}
.product-card__button .q-icon {
  margin-left: 0.5rem;
}

.home-products {
  width: min(100% - 3rem, 1240px);
  margin: 0 auto;
  padding: 3rem 0 4rem;
}
.home-products__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}
.product-card {
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 360px;
  overflow: hidden;
  border-radius: 0;
  background: #242021;
  box-shadow: 0 5px 18px rgb(0 0 0 / 12%);
  opacity: 0;
  transform: translateY(28px);
}
.home-products--visible .product-card {
  animation: product-fade-up 0.65s ease-out forwards;
  animation-delay: calc(var(--card-index) * 70ms);
}
.product-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: saturate(0.8);
}
.product-card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  min-height: 360px;
  padding: 1.5rem;
  color: white;
}
.product-card__body h2 {
  margin: 0 0 0.75rem;
  color: white;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  font-weight: 600;
  line-height: 1.1;
}
.product-card__body p {
  max-width: 18rem;
  margin: 0;
  color: rgb(255 255 255 / 88%);
  font-size: 0.85rem;
  line-height: 1.45;
}
.product-card__button {
  margin-top: 1.5rem;
}

@keyframes hero-fade-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes product-fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .home-hero__content,
  .home-products--visible .product-card,
  .home-carousel__image--active,
  .home-carousel__caption--active {
    animation: none;
  }
  .home-carousel__caption {
    opacity: 1;
    transform: none;
  }
  .product-card {
    opacity: 1;
    transform: none;
  }
}
@media (max-width: 800px) {
  .home-hero {
    min-height: 0;
  }
  .home-hero::before {
    clip-path: polygon(0 0, 100% 0, 100% 72%, 0 55%);
  }
  .home-hero__content {
    grid-template-columns: 1fr;
    padding-bottom: 5rem;
  }
  .home-hero__intro {
    justify-content: space-around;
  }
  .home-products__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 599px) {
  .home-hero__content,
  .home-introduction,
  .home-products {
    width: min(100% - 1.5rem, 1240px);
  }
  .home-hero__content {
    padding-top: 2.5rem;
  }
  .home-hero__intro {
    align-items: center;
  }
  .home-hero__intro h1 {
    font-size: 1.7rem;
  }
  .home-hero__intro h2 {
    font-size: 1.35rem;
  }
  .home-hero__gallery {
    gap: 0.75rem;
  }
  .home-products__grid {
    grid-template-columns: 1fr;
  }
  .product-card,
  .product-card__body {
    min-height: 320px;
  }
}
</style>
