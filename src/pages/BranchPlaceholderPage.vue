<template>
  <CorporatePageShell>
    <div class="global-corporate-font branch-page">
      <CorporateSectionHeading title="African Branch Network" />

      <template v-if="selectedBranch">
        <nav class="branch-breadcrumb" aria-label="Breadcrumb">
          <q-btn
            flat
            dense
            no-caps
            icon="arrow_back"
            label="All offices"
            to="/branch"
          />
          <span aria-hidden="true">/</span>
          <span>{{ selectedBranch.country }}</span>
        </nav>

        <header class="branch-detail-heading">
          <div class="branch-kicker">{{ selectedBranch.country }} office</div>
          <h1>{{ selectedBranch.city }}</h1>
          <p>{{ selectedBranch.title }}</p>
        </header>

        <div class="branch-map">
          <iframe
            :src="mapUrl(selectedBranch.mapQuery)"
            :title="`Map of ${selectedBranch.city}, ${selectedBranch.country}`"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
        <a
          class="branch-map-link"
          :href="mapLink(selectedBranch.mapQuery)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <q-icon name="open_in_new" size="16px" />
          Open in Google Maps
        </a>

        <section class="branch-detail-grid">
          <aside class="branch-contact">
            <h2>Office details</h2>
            <div class="branch-contact__group">
              <q-icon name="place" size="19px" />
              <address>
                <span v-for="line in selectedBranch.address" :key="line">
                  {{ line }}
                </span>
              </address>
            </div>
            <a
              v-for="phone in selectedBranch.phones"
              :key="phone"
              :href="`tel:${phone.replace(/[^\d+]/g, '')}`"
              class="branch-contact__action"
            >
              <q-icon name="call" size="18px" />
              <span>{{ phone }}</span>
            </a>
            <a
              :href="`mailto:${selectedBranch.email}`"
              class="branch-contact__action"
            >
              <q-icon name="mail" size="18px" />
              <span>{{ selectedBranch.email }}</span>
            </a>
          </aside>

          <div class="branch-overview">
            <p v-for="paragraph in selectedBranch.overview" :key="paragraph">
              {{ paragraph }}
            </p>
            <template v-if="selectedBranch.network">
              <h2>Group companies &amp; regional branches</h2>
              <ul class="branch-products branch-products--network">
                <li
                  v-for="member in selectedBranch.network"
                  :key="member.label"
                >
                  <router-link
                    v-if="member.slug"
                    :to="`/branch/${member.slug}`"
                  >
                    {{ member.label }}
                  </router-link>
                  <span v-else>{{ member.label }}</span>
                </li>
              </ul>
            </template>
            <template v-else-if="selectedBranch.products.length">
              <h2>Products &amp; services</h2>
              <ul class="branch-products">
                <li v-for="product in selectedBranch.products" :key="product">
                  {{ product }}
                </li>
              </ul>
            </template>
            <q-btn
              color="negative"
              unelevated
              no-caps
              icon="arrow_back"
              label="Back to Our Presence"
              to="/our-presence"
              class="q-mt-md"
            />
          </div>
        </section>
      </template>

      <template v-else-if="route.params.slug">
        <div class="branch-empty">
          <q-icon name="location_off" size="40px" color="negative" />
          <h1>Branch not found</h1>
          <p>This location may have moved or is not listed yet.</p>
          <q-btn
            color="negative"
            no-caps
            label="Browse branches"
            to="/branch"
          />
        </div>
      </template>

      <template v-else>
        <section class="branch-intro">
          <div>
            <div class="branch-kicker">Regional offices</div>
            <h1>Find local expertise.</h1>
          </div>
          <p
            >Browse office details and connect with a local REMA TIP TOP
            team.</p
          >
        </section>

        <div class="branch-toolbar">
          <q-input
            v-model="searchQuery"
            outlined
            clearable
            dense
            debounce="150"
            label="Search by country, city or address"
            class="branch-search"
          >
            <template #prepend><q-icon name="search" /></template>
          </q-input>
          <q-select
            v-model="countryFilter"
            :options="countryOptions"
            outlined
            dense
            clearable
            label="Country"
            class="branch-country-filter"
          >
            <template #prepend><q-icon name="public" /></template>
          </q-select>
        </div>

        <div class="branch-results-heading" aria-live="polite">
          <h2>Office directory</h2>
          <span>{{ resultLabel }}</span>
        </div>

        <div v-if="filteredBranches.length" class="branch-list">
          <router-link
            v-for="branch in filteredBranches"
            :key="branch.slug"
            :to="`/branch/${branch.slug}`"
            class="branch-card"
          >
            <div class="branch-card__topline">
              <span class="branch-kicker">{{ branch.country }}</span>
              <q-icon name="north_east" size="20px" />
            </div>
            <h3>{{ branch.city }}</h3>
            <p class="branch-card__company">{{ branch.title }}</p>
            <div class="branch-card__address">
              <q-icon name="place" size="17px" />
              <span>{{ branch.address.join(', ') }}</span>
            </div>
            <div class="branch-card__email">
              <q-icon name="mail_outline" size="16px" />
              <span>{{ branch.email }}</span>
            </div>
          </router-link>
        </div>
        <div v-else class="branch-empty">
          <q-icon name="search_off" size="40px" color="grey-6" />
          <h2>No offices match those filters</h2>
          <p>Try another country, city or address.</p>
          <q-btn
            flat
            no-caps
            color="negative"
            label="Clear filters"
            @click="clearFilters"
          />
        </div>
      </template>

      <CorporateBanner class="q-mt-xl" />
    </div>
  </CorporatePageShell>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import CorporateBanner from '@/components/CorporateBanner.vue'
import CorporatePageShell from '@/components/CorporatePageShell.vue'
import CorporateSectionHeading from '@/components/CorporateSectionHeading.vue'

const route = useRoute()
const searchQuery = ref('')
const countryFilter = ref(null)

const branches = [
  {
    slug: 'south-africa',
    title: 'REMA TIP TOP Holding South Africa Pty Ltd (Head Office)',
    country: 'South Africa',
    city: 'Benoni',
    address: ['Corner Edinburgh (No. 1) & Van Dyk Road', 'Benoni, 1501'],
    phones: ['+27 (0)10 880 4744'],
    email: 'enquiries@rematiptop.co.za',
    mapQuery: 'REMA TIP TOP Africa, Benoni, South Africa',
    overview: [
      'Founded in 1980, REMA TIP TOP Africa is headquartered in Benoni, South Africa. The group employs more than 1,300 people, including the Howick plant.',
      'The holding company manages branches and country operations across Africa, combining German engineering with local expertise and service teams.',
      'Its vertically integrated manufacturing facility in Howick, KwaZulu-Natal, produces rubber compounds and specialist products for customer applications.'
    ],
    network: [
      { label: 'REMA TIP TOP Afrique' },
      { label: 'REMA TIP TOP Ghana', slug: 'ghana' },
      { label: 'REMA TIP TOP Industry' },
      { label: 'REMA TIP TOP Madagascar' },
      { label: 'REMA TIP TOP Mozambique', slug: 'mozambique' },
      { label: 'REMA TIP TOP Zambia', slug: 'zambia' },
      { label: 'REMA TIP TOP Zimbabwe', slug: 'zimbabwe' },
      { label: 'Dunlop Industrial Products' }
    ],
    products: []
  },
  {
    slug: 'ghana',
    title: 'Rema Tip Top Belting & Rubber Ghana Limited',
    country: 'Ghana',
    city: 'Accra',
    address: [
      'Capital Place, Block C, 1st floor',
      '11 Patrice Lumumba Road',
      'Airport Residential Area, Accra, Ghana'
    ],
    phones: ['+233 20 311 2012'],
    email: 'enquiries@rematiptop.co.za',
    mapQuery: '11 Patrice Lumumba Road, Accra, Ghana',
    overview: [
      'REMA TIP TOP Ghana is a subsidiary of REMA TIP TOP Afrique, based in Accra. The branch supports customers in Ghana and the wider West African region.',
      'Ghana provides a well-equipped port and a strategic distribution hub for landlocked West African countries, including Burkina Faso, Niger and Mali.'
    ],
    products: [
      'Automotive tyre repair materials and equipment',
      'Conveyor belting',
      'Conveyor belt maintenance materials and services',
      'Conveyor idlers and idler frames',
      'Hand-built mining and industrial hose',
      'Belt conveyor skirting, load boots and pulley lagging',
      'Rubber lining and surface protection systems'
    ]
  },
  {
    slug: 'mauritius',
    title: 'Rema Tip Top Mauritius',
    country: 'Mauritius',
    city: 'Grand Baie',
    address: [
      'Villa Intemporrelles, Chemin Vingt Pieds',
      'Grand Baie, Mauritius'
    ],
    phones: ['+261 34 14 516 37'],
    email: 'enquiries@tt-dunlop.co.za',
    mapQuery: 'Les Villas Intemporrelles, Grand Baie, Mauritius',
    overview: [
      'REMA TIP TOP opened a subsidiary branch in Mauritius in 2020 to provide the complete range of REMA TIP TOP products, supported by local stock and service teams.'
    ],
    products: [
      'Automotive tyre repair materials and equipment',
      'Conveyor belting and maintenance services',
      'Conveyor idlers and idler frames',
      'Hand-built mining and industrial hose',
      'Belt conveyor skirting, load boots and pulley lagging',
      'Rubber lining and surface protection systems'
    ]
  },
  {
    slug: 'mozambique',
    title: 'Rema Tip Top Mozambique Limited',
    country: 'Mozambique',
    city: 'Moatize',
    address: [
      'Unit 4, Bairro Bagamoyo',
      'EN7 Zona Industrial Moatize',
      'Mozambique'
    ],
    phones: ['+27 10 880 4744'],
    email: 'enquiries@rematiptop.co.za',
    mapQuery: 'Unit 4 Bairro Bagamoyo, Moatize, Mozambique',
    overview: [
      'REMA TIP TOP has grown from one branch in Tete to three branches in Mozambique, covering the country’s southern, central and northern regions.',
      'The local team supports customers with a broad range of products and services backed by the wider REMA TIP TOP network.'
    ],
    products: [
      'Automotive tyre repair materials and equipment',
      'Conveyor belting and maintenance services',
      'Conveyor idlers and idler frames',
      'Hand-built mining and industrial hose',
      'Belt conveyor skirting, load boots and pulley lagging',
      'Rubber lining and surface protection systems'
    ]
  },
  {
    slug: 'zambia',
    title: 'Rema Tip Top Zambia Limited',
    country: 'Zambia',
    city: 'Kitwe',
    address: [
      'Plot No. 3665A, Chibuluma Road',
      'Light Industrial Area, Kitwe, Zambia'
    ],
    phones: [
      '+260 764 444 700',
      '+243 979 523 596',
      '+243 852 292 717',
      '+260 963 904 480'
    ],
    email: 'enquiries@rematiptop.co.zm',
    mapQuery: 'Plot No. 3665A Chibuluma Road, Kitwe, Zambia',
    overview: [
      'Established in 2012, REMA TIP TOP Zambia has grown into a supplier of conveyor belt splicing and service solutions.',
      'The branch supports mining and industrial customers with local stock, technical expertise and a broad range of conveyor and material-processing products.'
    ],
    products: [
      'Automotive tyre repair materials and equipment',
      'Conveyor belting',
      'Conveyor belt maintenance materials and services',
      'Conveyor idlers and idler frames',
      'Hand-built mining and industrial hose',
      'Belt conveyor skirting, load boots and pulley lagging'
    ]
  },
  {
    slug: 'zimbabwe',
    title: 'Rema Tip Top Zimbabwe Limited',
    country: 'Zimbabwe',
    city: 'Harare',
    address: ['145 Kwame Nkrumah Avenue', 'Harare, Zimbabwe'],
    phones: ['+263 242 707038', '+263 242 706458'],
    email: 'enquiries@rematiptop.co.zw',
    mapQuery: '145 Kwame Nkrumah Avenue, Harare, Zimbabwe',
    overview: [
      'REMA TIP TOP Zimbabwe was incorporated on 24 November 2015 and now serves mining customers through three branches nationwide.',
      'The team supports platinum, gold, cement, iron ore, lithium and coal mines throughout Zimbabwe.'
    ],
    products: [
      'Conveyor belting and services',
      'Hand-built mining and industrial hose',
      'Surface protection',
      'Material processing',
      'Consulting services'
    ]
  }
]

const countryOptions = [...new Set(branches.map(branch => branch.country))]

const selectedBranch = computed(() =>
  branches.find(branch => branch.slug === route.params.slug)
)

const filteredBranches = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return branches.filter(branch => {
    const matchesCountry =
      !countryFilter.value || branch.country === countryFilter.value
    const searchableText =
      `${branch.title} ${branch.country} ${branch.city} ${branch.address.join(' ')} ${branch.email}`.toLowerCase()

    return matchesCountry && (!query || searchableText.includes(query))
  })
})

const resultLabel = computed(
  () =>
    `${filteredBranches.value.length} ${filteredBranches.value.length === 1 ? 'office' : 'offices'}`
)

const clearFilters = () => {
  searchQuery.value = ''
  countryFilter.value = null
}

const mapUrl = query =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

const mapLink = query =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
</script>

<style scoped>
.branch-page {
  --branch-ink: #1d1d1d;
  --branch-muted: #606060;
  --branch-line: #dedede;
  --branch-accent: var(--q-negative);
  --branch-surface: #f3f3f3;
  color: var(--branch-ink);
}

.branch-intro {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 2rem;
  margin: 2rem 0 1.5rem;
}

.branch-intro h1,
.branch-detail-heading h1,
.branch-empty h1 {
  margin: 0;
  color: var(--branch-ink);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 2.5rem;
  line-height: 1.1;
}

.branch-intro > p {
  max-width: 350px;
  margin: 0 0 0.25rem;
  color: var(--branch-muted);
  line-height: 1.6;
}

.branch-kicker {
  color: var(--branch-accent);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.branch-toolbar {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(200px, 260px);
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid var(--branch-line);
  background: var(--branch-surface);
}

.branch-search,
.branch-country-filter {
  min-width: 0;
}

.branch-results-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem 0 0.75rem;
}

.branch-results-heading h2 {
  margin: 0;
  color: var(--branch-ink);
  font-size: 1rem;
  font-weight: 700;
}

.branch-results-heading span {
  color: var(--branch-muted);
  font-size: 0.85rem;
}

.branch-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.branch-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid var(--branch-line);
  border-top: 3px solid var(--branch-accent);
  background: #fff;
  color: inherit;
  text-decoration: none;
  transition:
    border-color 160ms ease,
    background-color 160ms ease,
    transform 160ms ease;
}

.branch-card:hover,
.branch-card:focus-visible {
  border-color: var(--branch-accent);
  background: #fffafa;
  transform: translateY(-2px);
}

.branch-card:focus-visible {
  outline: 2px solid var(--branch-accent);
  outline-offset: 2px;
}

.branch-card__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--branch-accent);
}

.branch-card h3 {
  margin: 0.65rem 0 0.15rem;
  color: var(--branch-ink);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.55rem;
  line-height: 1.15;
}

.branch-card__company {
  min-height: 2.8em;
  margin: 0 0 1rem;
  color: var(--branch-muted);
  font-size: 0.88rem;
  line-height: 1.45;
}

.branch-card__address,
.branch-card__email {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr);
  gap: 0.55rem;
  align-items: start;
  color: var(--branch-ink);
  font-size: 0.84rem;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.branch-card__address {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid #edf0ef;
}

.branch-card__email {
  margin-top: 0.65rem;
  color: var(--branch-muted);
}

.branch-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 1.3rem 0 1.8rem;
  color: var(--branch-muted);
  font-size: 0.85rem;
}

.branch-breadcrumb .q-btn {
  margin-left: -0.55rem;
  color: var(--branch-ink);
}

.branch-detail-heading {
  margin-bottom: 1.4rem;
}

.branch-detail-heading .branch-kicker {
  margin-bottom: 0.35rem;
}

.branch-detail-heading p {
  margin: 0.5rem 0 0;
  color: var(--branch-muted);
  font-size: 1rem;
}

.branch-map {
  width: 100%;
  height: 340px;
  overflow: hidden;
  background: #ededed;
}

.branch-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.branch-map-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.65rem;
  color: var(--branch-accent);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
}

.branch-map-link:hover {
  color: var(--branch-accent);
  text-decoration: underline;
}

.branch-detail-grid {
  display: grid;
  grid-template-columns: minmax(240px, 0.36fr) minmax(0, 1fr);
  gap: 2rem;
  margin-top: 1.5rem;
}

.branch-contact {
  align-self: start;
  padding: 1.35rem;
  border-top: 3px solid var(--branch-accent);
  background: var(--branch-surface);
}

.branch-contact h2,
.branch-overview h2 {
  margin: 0 0 1rem;
  color: var(--branch-ink);
  font-size: 1rem;
  font-weight: 700;
}

.branch-contact__group {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 0.6rem;
  align-items: start;
  margin-bottom: 1rem;
  color: var(--branch-accent);
}

.branch-contact address {
  display: grid;
  gap: 0.15rem;
  color: var(--branch-ink);
  font-size: 0.9rem;
  font-style: normal;
  line-height: 1.5;
}

.branch-contact__action {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  gap: 0.6rem;
  align-items: start;
  margin-top: 0.75rem;
  color: var(--branch-accent);
  font-size: 0.88rem;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: none;
}

.branch-contact__action:hover {
  color: var(--branch-accent);
  text-decoration: underline;
}

.branch-overview > p {
  margin: 0 0 0.85rem;
  color: var(--branch-muted);
  line-height: 1.65;
}

.branch-overview h2 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.branch-products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.5rem;
  padding: 0;
  list-style: none;
}

.branch-products li {
  position: relative;
  padding-left: 1.25rem;
  color: var(--branch-ink);
  font-size: 0.9rem;
  line-height: 1.45;
}

.branch-products li::before {
  position: absolute;
  left: 0;
  color: var(--branch-accent);
  content: '↗';
  font-weight: 700;
}

.branch-products--network a {
  color: var(--branch-accent);
  text-decoration: underline;
  text-decoration-color: #d9a6a8;
  text-underline-offset: 3px;
}

.branch-products--network a:hover {
  color: var(--branch-accent);
}

.branch-empty {
  display: grid;
  justify-items: center;
  gap: 0.75rem;
  padding: 4rem 1rem;
  text-align: center;
}

.branch-empty h2,
.branch-empty p {
  margin: 0;
}

@media (max-width: 760px) {
  .branch-intro {
    align-items: start;
    flex-direction: column;
    gap: 0.75rem;
  }

  .branch-toolbar,
  .branch-list {
    grid-template-columns: 1fr;
  }

  .branch-toolbar {
    padding: 0.75rem;
  }

  .branch-detail-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .branch-map {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .branch-intro h1,
  .branch-detail-heading h1,
  .branch-empty h1 {
    font-size: 2rem;
  }

  .branch-products {
    grid-template-columns: 1fr;
  }

  .branch-map {
    height: 230px;
  }
}
</style>
