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
          <div class="contact-kicker">Selected Branch details</div>
          <h1>{{ selectedRegion.name }}</h1>
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
          <iframe
            class="contact-map__canvas"
            :src="mapEmbedUrl"
            :title="`${selectedRegion.name} office location map`"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
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
import { computed, ref } from 'vue'
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'

const regions = [
  {
    name: 'Rema Tip Top South Africa',
    office: 'Benoni',
    address: 'Corner Edinburgh (No.1) & Van Dyk Road, Benoni, 1501',
    phone: '+27 10 880 4744',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638.0086457647536!2d28.29052203241092!3d-26.220347527761618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1790603121093!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top Howick',
    office: 'Howick',
    address: 'Induna Mills Road, Howick, 3290',
    phone: '+27 33 239 7200',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.37322285270784!2d30.23480214903139!3d-29.48663448246175!2m3!1f138.4192171389182!2f44.991082095770786!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x1ef6a926138e5037%3A0xf2e019e09fa53cb9!2sDunlop%20Africa%20Ltd!5e1!3m2!1sen!2sza!4v1790668967602!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top DRC',
    office: 'Kinshasa',
    address: 'Unnamed Road, Kipushi, Congo - Kinshasa',
    phone: '+243 97 952 3596',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6026.840898491919!2d27.241781!3d-11.756732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19721f7f313539b1%3A0x352c75c107029d2e!2sREMA%20TIP%20TOP%20DRC%20SERVICES%20SARL!5e1!3m2!1sen!2sza!4v1790668494443!5m2!1sen!2sza' 
    },
  {
    name: 'Rema Tip Top Ghana',
    office: 'Accra',
    address: 'Capital Place, Patrice Lumumba St, Accra, Ghana',
    phone: '+233 20 311 2012',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d196.90855627004595!2d-0.18811327376874115!3d5.6008277463809275!2m2!1f198.54977280938127!2f0!3m2!1i1024!2i768!4f45.90244244181053!3m3!1m2!1s0xfdf9b441177deff%3A0x5e9ba017f163c4ad!2sREMA%20TIP%20TOP%20BELTING%20%26%20RUBBER%20GHANA%20LTD.!5e1!3m2!1sen!2sza!4v1790605190989!5m2!1sen!2sza' 
    },
  {
    name: 'Rema Tip Top Madagascar',
    office: 'Antananarivo',
    address: 'R95C+XR5, Toamasina 501, Madagascar',
    phone: '+261 32 070 7996',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: '//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.0551599210813!2d49.37140347061478!3d-18.1900353934551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f4ffa970001ebf%3A0x2a57a7daec7c74b!2sREMA%20TIP%20TOP!5e1!3m2!1sen!2sza!4v1790667657461!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top Mauritius',
    office: 'Port Louis',
    address: 'XHRX+M3P, Twenty-Foot Rd, Grand Baie, Mauritius',
    phone: '+230 52 53 4545',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.0445482257252!2d57.5969890719929!3d-20.008259516156524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dabab4f3cf14f%3A0x236972db4b15c1ff!2sLes%20Villas%20Intemporelles!5e1!3m2!1sen!2sza!4v1790670658061!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top Mozambique',
    office: 'Maputo',
    address: '3C44+8V2, Mozambique',
    phone: '+258 84 314 0775',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.5384883694376!2d32.40686526946228!3d-25.94423543080905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee689438b60a6c1%3A0x8e64ee8c67431c58!2sRema%20Tip%20Top!5e1!3m2!1sen!2sza!4v1790670784138!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top Zambia',
    office: 'Kitwe',
    address: '3665A Chibuluma Rd, Kitwe 00000, Zambia',
    phone: '+260 96 347 4777',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.5986990482953!2d28.200808316163794!3d-12.80248956498966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x196ce5b78cba155d%3A0x456511334d334c64!2sRema%20Tip%20Top%20Zambia!5e1!3m2!1sen!2sza!4v1790671066491!5m2!1sen!2sza'
  },
  {
    name: 'Rema Tip Top Zimbabwe',
    office: 'Harare',
    address: '145 Kwame Nkrumah Avenue, Harare, Zimbabwe',
    phone: '+263 24 70 7038',
    email: 'enquiries@rematiptop.co.za',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d796.9016505953912!2d31.0578277!3d-17.8261051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4de0aab7bef%3A0x79d2e2ce1ff0ede3!2s145%20Kwame%20Nkrumah%20Avenue%2C%20Harare%2C%20Zimbabwe!5e1!3m2!1sen!2sza!4v1790671171592!5m2!1sen!2sza'
  }
]

const countries = [
  'South Africa',
  'Howick',
  'DRC',
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
const contactRecipient = computed(
  () => selectedRegion.value.email || 'rivaldos@rtt-dunlop.co.za'
)
const mapEmbedUrl = computed(() => {
  const region = selectedRegion.value
  if (region.mapEmbedUrl) return region.mapEmbedUrl

  const location = encodeURIComponent(`${region.office}, ${region.name}`)
  return `https://maps.google.com/maps?q=${location}&output=embed`
})
const mapUrl = computed(() => {
  const location = encodeURIComponent(
    `${selectedRegion.value.office}, ${selectedRegion.value.name}`
  )
  return `https://www.google.com/maps/search/?api=1&query=${location}`
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

  window.location.href = `mailto:${contactRecipient.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
