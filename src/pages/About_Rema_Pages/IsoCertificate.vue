<template>
  <CorporatePageShell :hero-image="qualityImage" :hero-height="360">
    <div class="iso-page global-corporate-font">
      <section class="intro-block">
        <div>
          <p class="eyebrow">Quality, safety and responsibility</p>
          <CorporateSectionHeading title="Quality Standards" />
          <h1>Built to perform. Tested to last.</h1>
          <p class="intro-lead">
            Our products and processes are measured against rigorous global
            standards so our customers can move with confidence.
          </p>
        </div>
        <div
          class="certification-mark"
          aria-label="Certified quality management"
        >
          <q-icon name="verified" size="34px" />
          <span>Certified<br />quality management</span>
        </div>
      </section>

      <section class="certification-strip" aria-label="Certifications">
        <div
          v-for="item in certifications"
          :key="item.label"
          class="certification-item"
        >
          <span class="certification-value">{{ item.value }}</span>
          <span class="certification-label">{{ item.label }}</span>
        </div>
      </section>

      <section class="quality-copy">
        <div class="section-kicker">Our commitment</div>
        <div class="quality-copy__body">
          <p>
            REMA TIP TOP AFRIQUE and DUNLOP INDUSTRIAL PRODUCTS are certified to
            ISO 9001:2015 QMS and ISO 14001:2015 EMS standards. We stand for
            dependable products, responsive service, and responsible business.
          </p>
          <p>
            Safety, health, environmental protection, and principled business
            conduct are embedded in the way we work. At our Howick Plant
            Laboratory, materials and finished products are continuously tested
            throughout production to ensure consistent quality.
          </p>
        </div>
      </section>

      <div class="standards-heading">
        <div>
          <div class="section-kicker">Technical assurance</div>
          <h2>Standards that keep industry moving</h2>
        </div>
        <p
          >International specifications. Local expertise. Consistent results.</p
        >
      </div>

      <div class="standards-grid">
        <section class="standards-panel">
          <div class="panel-icon"
            ><q-icon name="settings_input_component" size="22px"
          /></div>
          <h3>Belting Standards</h3>
          <ul>
            <li v-for="item in beltingStandards" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="standards-panel">
          <div class="panel-icon"><q-icon name="shield" size="22px" /></div>
          <h3>MASC-065M Certified</h3>
          <ul>
            <li v-for="item in mascStandards" :key="item.code">
              <strong>{{ item.code }}</strong>
              <span>{{ item.description }}</span>
            </li>
          </ul>
        </section>
      </div>

      <CorporateBanner class="q-mt-xl" />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'
import qualityImage from '@/assets/visionmission.jpg'

const certifications = [
  { value: 'ISO 9001', label: 'Quality management' },
  { value: 'ISO 14001', label: 'Environmental management' },
  { value: 'MASC-065M', label: 'Conveyor belting certified' }
]

const beltingStandards = [
  'DIN 22102 - Textile reinforced belting',
  'DIN 22131 - Steel cord reinforced belting',
  'EN/ISO 14890 - Textile reinforced conveyor belting',
  'EN/ISO 15236 - Steel cord reinforced belting',
  'AS 1332 / AS 1333 - Australian standards',
  'SANS 1173 / SANS 1366 - South African standards'
]

const mascStandards = [
  {
    code: 'SANS 968:2013',
    description: 'Textile reinforced solid woven carcass construction'
  },
  {
    code: 'SANS 971:2013',
    description: 'Fire retardant testing for conveyor belt construction'
  },
  {
    code: 'SANS 1173:2013',
    description: 'General purpose textile-reinforced construction'
  },
  { code: 'SANS 1366:2015', description: 'Steel cord reinforced construction' }
]
</script>

<style scoped>
.iso-page {
  color: #34414a;
  font-size: 0.95rem;
}

.intro-block {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.eyebrow,
.section-kicker {
  margin: 0 0 0.6rem;
  color: #d92720;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.intro-block :deep(.corporate-section-heading) {
  margin-bottom: 0.9rem;
}

.intro-block :deep(.dotted-separator) {
  max-width: 520px;
}

.intro-block h1 {
  max-width: 620px;
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.02;
}

.intro-lead {
  max-width: 580px;
  margin: 1rem 0 0;
  color: #68757d;
  font-size: 1.08rem;
  line-height: 1.6;
}

.certification-mark {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 auto;
  padding: 1rem 1.2rem;
  border-left: 3px solid #ed3028;
  color: #d92720;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.3;
  text-transform: uppercase;
}

.certification-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem 0 3rem;
  border-top: 1px solid #d9dfe1;
  border-bottom: 1px solid #d9dfe1;
}

.certification-item {
  display: grid;
  gap: 0.2rem;
  padding: 1.2rem 1.5rem;
  border-right: 1px solid #d9dfe1;
}

.certification-item:last-child {
  border-right: 0;
}

.certification-value {
  color: #17242c;
  font-size: 1.15rem;
  font-weight: 800;
}

.certification-label {
  color: #748087;
  font-size: 0.78rem;
}

.quality-copy {
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  gap: 2rem;
  padding: 2rem;
  background: #f3f5f4;
  border-left: 4px solid #ed3028;
}

.quality-copy__body {
  max-width: 820px;
}

.quality-copy p {
  margin: 0 0 1rem;
  color: #5d6a71;
  line-height: 1.7;
}

.quality-copy p:last-child {
  margin-bottom: 0;
}

.standards-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin: 4rem 0 1.5rem;
}

.standards-heading h2 {
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.6rem, 3vw, 2.35rem);
}

.standards-heading > p {
  max-width: 300px;
  margin: 0;
  color: #748087;
  line-height: 1.5;
  text-align: right;
}

.standards-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.standards-panel {
  padding: 1.75rem;
  background: #fff;
  border: 1px solid #e4e8e8;
  border-top: 4px solid #ed3028;
  box-shadow: 0 12px 28px rgb(24 36 44 / 7%);
}

.panel-icon {
  display: grid;
  width: 42px;
  height: 42px;
  margin-bottom: 1rem;
  place-items: center;
  background: #fff1f0;
  color: #ed3028;
}

.standards-panel h3 {
  margin: 0 0 1.4rem;
  color: #17242c;
  font-size: 1.25rem;
}

.standards-panel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.standards-panel li {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1.1rem;
  color: #5d6a71;
  line-height: 1.45;
}

.standards-panel li:last-child {
  margin-bottom: 0;
}

.standards-panel li::before {
  position: absolute;
  left: 0;
  color: #ef3028;
  content: '>';
  font-size: 1rem;
  font-weight: 700;
}

.standards-panel strong {
  color: #17242c;
  font-size: 0.85rem;
}

.standards-panel span {
  color: #68757d;
  font-size: 0.86rem;
}

@media (max-width: 767px) {
  .intro-block,
  .standards-heading {
    display: block;
  }

  .certification-mark {
    width: fit-content;
    margin-top: 1.5rem;
  }

  .certification-strip {
    grid-template-columns: 1fr;
  }

  .certification-item,
  .certification-item:last-child {
    border-right: 0;
    border-bottom: 1px solid #d9dfe1;
  }

  .certification-item:last-child {
    border-bottom: 0;
  }

  .quality-copy {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }

  .standards-heading > p {
    margin-top: 0.75rem;
    text-align: left;
  }

  .standards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
