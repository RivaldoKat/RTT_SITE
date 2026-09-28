<template>
  <q-page class="contact-page global-corporate-font">
    <main class="corporate-container">
      <CorporateSectionHeading title="Contact Us" />

      <section class="contact-regions">
        <button
          v-for="region in regions"
          :key="region.name"
          type="button"
          class="contact-region"
          :class="{
            'contact-region--active': selectedRegion.name === region.name
          }"
          :aria-pressed="selectedRegion.name === region.name"
          @click="selectedRegion = region"
        >
          <span>{{ region.name }}</span>
          <small>{{ region.office }}</small>
        </button>
      </section>

      <section class="contact-office corporate-surface">
        <div>
          <div class="contact-kicker">Selected office</div>
          <h1>{{ selectedRegion.name }} Head Office</h1>
        </div>
        <div class="contact-office__details">
          <span>{{ selectedRegion.address }}</span>
          <a :href="`tel:${selectedRegion.phone.replaceAll(' ', '')}`"
            >Tel: {{ selectedRegion.phone }}</a
          >
          <a :href="`mailto:${contactRecipient}`">{{ contactRecipient }}</a>
        </div>
      </section>

      <section class="contact-workspace">
        <div class="contact-map">
          <div
            ref="mapElement"
            class="contact-map__canvas"
            role="application"
            :aria-label="`${selectedRegion.name} office location map`"
          />
          <div class="contact-map__badge">
            <q-icon name="location_on" size="20px" />
            <span
              >{{ selectedRegion.office
              }}<small>Local technical support</small></span
            >
            <a :href="mapUrl" target="_blank" rel="noopener">Open live map</a>
          </div>
        </div>

        <q-form
          class="contact-form corporate-surface"
          @submit.prevent="submitForm"
        >
          <div class="contact-kicker">Start a conversation</div>
          <h2>How can we help?</h2>
          <p class="contact-form__intro"
            >Tell us what you need and our team will connect you with the right
            local specialist.</p
          >

          <div class="contact-form__grid">
            <q-input
              v-model="form.email"
              outlined
              dense
              label="Work Email"
              type="email"
              :rules="[required]"
              lazy-rules
            />
            <q-input
              v-model="form.firstName"
              outlined
              dense
              label="First Name"
              :rules="[required]"
              lazy-rules
            />
            <q-input
              v-model="form.lastName"
              outlined
              dense
              label="Last Name"
              :rules="[required]"
              lazy-rules
            />
            <q-input
              v-model="form.company"
              outlined
              dense
              label="Company Name"
            />
            <q-select
              v-model="form.country"
              outlined
              dense
              label="Country"
              :options="countries"
              :rules="[required]"
              lazy-rules
            />
            <q-select
              v-model="form.businessUnit"
              outlined
              dense
              label="Business Unit"
              :options="businessUnits"
              :rules="[required]"
              lazy-rules
            />
          </div>
          <q-input
            v-model="form.message"
            outlined
            type="textarea"
            label="Message"
            class="q-mt-md"
          />
          <p class="contact-form__privacy"
            >By submitting this form, you consent to REMA TIP TOP processing
            your contact information to respond to your enquiry.</p
          >
          <q-btn
            type="submit"
            unelevated
            no-caps
            color="negative"
            label="Send enquiry"
            icon-right="arrow_forward"
          />
          <div v-if="submitted" class="contact-form__success" role="status">
            <q-icon name="check_circle" /> Your email application should now be
            open with the enquiry addressed to {{ contactRecipient }}.
          </div>
        </q-form>
      </section>

      <CorporateBanner class="q-mt-xl" />
    </main>
  </q-page>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'

const contactRecipient = 'rivaldos@rtt-dunlop.co.za'

const regions = [
  {
    name: 'South Africa',
    office: 'Benoni',
    address: 'Corner Edinburgh (No.1) & Van Dyk Road, Benoni, 1501',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -26.1885,
    longitude: 28.3208
  },
  {
    name: 'Eswatini',
    office: 'Mbabane',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -26.3054,
    longitude: 31.1367
  },
  {
    name: 'Ghana',
    office: 'Accra',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: 5.6037,
    longitude: -0.187
  },
  {
    name: 'Madagascar',
    office: 'Antananarivo',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -18.8792,
    longitude: 47.5079
  },
  {
    name: 'Mauritius',
    office: 'Port Louis',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -20.1609,
    longitude: 57.5012
  },
  {
    name: 'Mozambique',
    office: 'Maputo',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -25.9692,
    longitude: 32.5732
  },
  {
    name: 'Zambia',
    office: 'Lusaka',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -15.3875,
    longitude: 28.3228
  },
  {
    name: 'Zimbabwe',
    office: 'Harare',
    address: 'REMA TIP TOP regional service office',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    latitude: -17.8252,
    longitude: 31.0335
  }
]

const countries = [
  'South Africa',
  'Eswatini',
  'Ghana',
  'Madagascar',
  'Mauritius',
  'Mozambique',
  'Zambia',
  'Zimbabwe',
  'Other'
]
const businessUnits = [
  'Conveyor Belting',
  'Material Processing',
  'Surface Protection',
  'Automotive',
  'Technical Advisory'
]
const selectedRegion = ref(regions[0])
const mapElement = ref(null)
let mapInstance
let officeMarker

const mapUrl = computed(() => {
  const { latitude, longitude } = selectedRegion.value
  const padding = 0.08
  return `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - padding}%2C${latitude - padding}%2C${longitude + padding}%2C${latitude + padding}&layer=mapnik&marker=${latitude}%2C${longitude}`
})

function updateMap(region) {
  if (!mapInstance) return

  const coordinates = [region.latitude, region.longitude]
  mapInstance.setView(coordinates, 13)
  officeMarker.setLatLng(coordinates)
  officeMarker.bindPopup(
    `<strong>${region.office}</strong><br>${region.address}`
  )
}

onMounted(() => {
  const initialCoordinates = [
    selectedRegion.value.latitude,
    selectedRegion.value.longitude
  ]
  mapInstance = L.map(mapElement.value, { scrollWheelZoom: false }).setView(
    initialCoordinates,
    13
  )
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(mapInstance)
  officeMarker = L.circleMarker(initialCoordinates, {
    radius: 9,
    color: '#ffffff',
    weight: 3,
    fillColor: '#ed3028',
    fillOpacity: 1
  }).addTo(mapInstance)
  updateMap(selectedRegion.value)
  window.setTimeout(() => mapInstance?.invalidateSize(), 0)
})

watch(selectedRegion, region => updateMap(region))

onBeforeUnmount(() => {
  mapInstance?.remove()
})
const form = ref({
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  country: null,
  businessUnit: null,
  message: ''
})
const submitted = ref(false)
const required = value => Boolean(value) || 'Required'

function submitForm() {
  const subject = `Website enquiry - ${form.value.businessUnit || 'General enquiry'}`
  const body = [
    `Name: ${form.value.firstName} ${form.value.lastName}`,
    `Work email: ${form.value.email}`,
    `Company: ${form.value.company || 'Not provided'}`,
    `Country: ${form.value.country || 'Not provided'}`,
    `Business unit: ${form.value.businessUnit || 'Not provided'}`,
    '',
    form.value.message || 'No message provided'
  ].join('\n')

  window.location.href = `mailto:${contactRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  submitted.value = true
}
</script>

<style scoped>
.contact-regions {
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.contact-region {
  min-height: 58px;
  padding: 0.6rem 0.35rem;
  border: 0;
  border-radius: 4px;
  background: #ed3028;
  color: #fff;
  cursor: pointer;
  font: inherit;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.contact-region:hover,
.contact-region--active {
  background: #17242c;
  transform: translateY(-2px);
}

.contact-region:focus-visible,
.contact-office__details a:focus-visible,
.contact-form :deep(.q-field--focused),
.contact-form :deep(.q-btn:focus-visible) {
  outline: 3px solid rgb(237 48 40 / 35%);
  outline-offset: 2px;
}

.contact-region span,
.contact-region small {
  display: block;
}

.contact-region span {
  font-size: 0.72rem;
  font-weight: 700;
}

.contact-region small {
  margin-top: 0.25rem;
  font-size: 0.6rem;
  opacity: 0.82;
}

.contact-office {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1.25rem;
}

.contact-kicker {
  margin-bottom: 0.4rem;
  color: #c5221d;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-office h1,
.contact-form h2 {
  margin: 0;
  color: #17242c;
  font-family: Georgia, 'Times New Roman', serif;
}

.contact-office h1 {
  font-size: 1.55rem;
}

.contact-office__details {
  display: grid;
  gap: 0.35rem;
  color: #68757d;
  font-size: 0.82rem;
  text-align: right;
}

.contact-office__details a {
  color: #68757d;
  text-decoration: none;
}

.contact-workspace {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 1.5rem;
}

.contact-map {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  background: #edf2ef;
  border: 1px solid #e4e8e8;
}

.contact-map__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 560px;
}

.contact-map__badge {
  position: absolute;
  z-index: 2;
  bottom: 1.25rem;
  left: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #fff;
  box-shadow: 0 8px 20px rgb(0 0 0 / 16%);
  color: #17242c;
  font-size: 0.8rem;
  font-weight: 700;
}

.contact-map__badge .q-icon {
  color: #ed3028;
}

.contact-map__badge small {
  display: block;
  margin-top: 0.2rem;
  color: #748087;
  font-weight: 400;
}

.contact-map__badge a {
  display: block;
  margin-top: 0.35rem;
  color: #d92720;
  font-size: 0.72rem;
  text-decoration: none;
}

.contact-form {
  padding: 2rem;
}

.contact-form h2 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.contact-form__intro,
.contact-form__privacy {
  color: #68757d;
  font-size: 0.82rem;
  line-height: 1.5;
}

.contact-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.25rem;
}

.contact-form__privacy {
  margin: 1rem 0;
}

.contact-form__success {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  background: #edf7f0;
  color: #216b3a;
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .contact-regions {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .contact-workspace {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contact-regions,
  .contact-form__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-office {
    display: block;
  }

  .contact-office__details {
    margin-top: 1rem;
    text-align: left;
  }

  .contact-map,
  .contact-map__canvas {
    min-height: 360px;
  }

  .contact-form {
    padding: 1.25rem;
  }
}
</style>
