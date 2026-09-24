<template>
  <q-layout view="lHh lpr lFf">
    <q-header class="site-header">
      <section class="bg-dark text-grey-4 layout-contact-bar">
        <div class="layout-contact-bar__inner">
          <div class="layout-contact-details">
            <a href="tel:+27108804744"
              ><q-icon name="phone" /> +27 10 880 4744</a
            >
            <a href="mailto:enquiries@rematiptop.co.za"
              ><q-icon name="mail" /> enquiries@rematiptop.co.za</a
            >
          </div>
          <div class="cursor-pointer hover-text-white">
            <q-icon name="mail" class="q-mr-xs" /> enquiries@rematiptop.co.za
          </div>
        </div>
      </section>

      <q-toolbar class="bg-white layout-toolbar">
        <div class="layout-toolbar__inner">
          <q-btn
            v-if="$q.screen.lt.md"
            flat
            round
            dense
            icon="menu"
            color="red"
            aria-label="Open navigation"
            @click="drawerOpen = !drawerOpen"
          />
          <q-toolbar-title class="layout-logo">
            <router-link to="/" aria-label="Rema Tip Top home">
              <img :src="logo" alt="Rema Tip Top Logo" />
            </router-link>
          </q-toolbar-title>

          <q-tabs
            v-if="$q.screen.gt.sm"
            align="right"
            active-color="red"
            indicator-color="red"
            class="text-grey layout-tabs"
          >
            <q-route-tab to="/" label="Home" />
            <q-btn-dropdown
              flat
              label="About Rema Tip Top"
              hover
              aria-haspopup="menu"
              class="aLink"
              
            >
              <q-list role="menu">
                <q-item to="/vision-mission/" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Vision & Mission</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/our-presence" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Our Presence</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/manufacturing-plant" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Manufacturing Plant</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/iso-certified" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>ISO-Certified Company</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/our-brands-services" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Our Brands & Services</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              flat
              label="Products"
              hover
              aria-haspopup="menu"
              class="aLink"
            >
              <q-list role="menu">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
            <q-btn
              flat
              label="International"
              class="layout-external-button"
              href="https://rema-tiptop.de/en/"
              target="_blank"
              rel="noopener"
            />
            <q-route-tab to="/contact" label="Contact Us" />
            <q-btn
              flat
              round
              dense
              icon="search"
              aria-label="Search"
              @click="onSearchClick"
            />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" bordered :width="280" class="bg-white">
      <q-list padding>
        <q-item to="/" clickable v-close-popup @click="drawerOpen = false">
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-expansion-item
          label="About Rema Tip Top"
          :header-class="sectionHeaderClass(aboutLinks)"
        >
          <q-item
            v-for="item in aboutLinks"
            :key="item.to"
            :to="item.to"
            clickable
            active-class="layout-drawer__item--active"
            v-close-popup
            @click="drawerOpen = false"
          >
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          label="Products"
          :header-class="sectionHeaderClass(productLinks)"
        >
          <q-item
            v-for="item in productLinks"
            :key="item.to"
            :to="item.to"
            clickable
            active-class="layout-drawer__item--active"
            v-close-popup
            @click="drawerOpen = false"
          >
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item
          to="/contact"
          clickable
          active-class="layout-drawer__item--active"
          v-close-popup
          @click="drawerOpen = false"
        >
          <q-item-section>Contact Us</q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          href="https://rema-tiptop.de/en/"
          target="_blank"
          rel="noopener"
        >
          <q-item-section>International</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="searchOpen" class="site-search-dialog">
      <q-card class="site-search">
        <div class="site-search__header">
          <div>
            <div class="site-search__eyebrow"
              >REMA TIP TOP / FIND YOUR SOLUTION</div
            >
            <h2>Search the global network</h2>
          </div>
          <q-btn
            flat
            round
            dense
            icon="close"
            aria-label="Close search"
            class="site-search__close"
            @click="searchOpen = false"
          />
        </div>
        <q-form class="site-search__form" @submit.prevent="openFirstResult">
          <q-input
            v-model="searchQuery"
            autofocus
            borderless
            clearable
            debounce="120"
            input-class="site-search__input"
            placeholder="Search products, services and company information"
            aria-label="Search products, services and company information"
          >
            <template #append>
              <q-icon name="search" color="grey-7" />
            </template>
          </q-input>
        </q-form>
        <div v-if="!searchQuery" class="site-search__popular">
          <span>Popular searches</span>
          <button
            v-for="term in popularSearches"
            :key="term"
            type="button"
            @click="searchQuery = term"
            >{{ term }}</button
          >
        </div>
        <div v-if="searchQuery" class="site-search__results">
          <div class="site-search__result-count">
            {{ searchResults.length }}
            {{ searchResults.length === 1 ? 'result' : 'results' }}
          </div>
          <button
            v-for="result in searchResults"
            :key="result.to"
            type="button"
            class="site-search__result"
            @click="goToResult(result.to)"
          >
            <q-icon :name="result.icon" size="20px" />
            <span>
              <strong>{{ result.label }}</strong>
              <small>{{ result.group }}</small>
              <em>{{ result.description }}</em>
            </span>
            <q-icon name="arrow_forward" size="18px" />
          </button>
          <p v-if="!searchResults.length" class="site-search__empty">
            No matching pages found.
          </p>
        </div>
        <div v-else class="site-search__hint">
          <q-icon name="keyboard_return" /> Press Enter to open the first match
          <span>Esc to close</span>
        </div>
      </q-card>
    </q-dialog>

    <footer class="site-footer bg-grey-10 text-grey-4 q-pa-xl">
      <div class="row q-col-gutter-lg">
        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="col-12 col-md-4"
        >
          <div class="text-h6 text-white q-mb-md">{{ column.title }}</div>
          <q-list v-if="column.items" dense>
            <q-item v-for="item in column.items" :key="item" class="q-px-none">
              <q-item-section>{{ item }}</q-item-section>
            </q-item>
          </q-list>
          <div v-else>
            <div v-for="line in column.lines" :key="line.label" class="q-mb-sm">
              <strong>{{ line.label }}</strong
              ><br />{{ line.value }}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from '@/assets/RemaTipTopLogo.png'
import { searchIndex } from '@/data/searchIndex'

const drawerOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const route = useRoute()
const router = useRouter()

const aboutLinks = [
  { label: 'Vision & Mission', to: '/vision-mission' },
  { label: 'Our Presence', to: '/our-presence' },
  { label: 'Manufacturing Plant', to: '/manufacturing-plant' },
  { label: 'ISO-Certified Company', to: '/iso-certified' },
  { label: 'Our Brands & Services', to: '/our-brands-services' }
]

const productLinks = [
  { label: 'Adhesive Systems', to: '/products/adhesive-systems' },
  { label: 'Automotive', to: '/products/automotive' },
  { label: 'Belt Cleaning', to: '/products/belt-cleaning' },
  { label: 'Belt Splicing Presses', to: '/products/belt-splicing-presses' },
  {
    label: 'Belt Splicing Services, Materials & Tools',
    to: '/products/belt-splicing-services-materials-tools'
  },
  { label: 'Conveyor Belting', to: '/products/conveyor-belting' },
  {
    label: 'Hand Built Mining & Industrial Hose',
    to: '/products/hand-built-mining-industrial-hose'
  },
  { label: 'Idler Systems', to: '/products/idler-systems' },
  { label: 'Mill Liners', to: '/products/mill-liners' },
  { label: 'Pulley Lagging', to: '/products/pulley-lagging' },
  { label: 'Technical Advisory', to: '/products/technical-advisory' },
  { label: 'Rema Tip Top Academy', to: '/products/rema-tip-top-academy' }
]

const searchResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return []
  return searchIndex
    .map(page => ({
      ...page,
      searchText:
        `${page.label} ${page.group} ${page.description} ${page.keywords}`.toLowerCase()
    }))
    .filter(page => page.searchText.includes(query))
})

const popularSearches = [
  'Conveyor Belting',
  'ISO Certified',
  'Our Presence',
  'Automotive'
]

const socialLinks = [
  { icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', label: 'Instagram' },
  { icon: 'fab fa-facebook-f', label: 'Facebook' }
]

const footerColumns = [
  {
    title: 'REMA TIP TOP Important Info',
    items: [
      'PAIA',
      'Rema Tip Top Privacy Policy',
      'T&C of Sale & Delivery',
      'T&C of Purchase',
      'T&C of Website Use'
    ]
  },
  {
    title: 'REMA TIP TOP Head Office',
    lines: [
      {
        label: 'Physical Address:',
        value: 'Corner Edinburgh (No.1) & Van Dyk Road, Benoni, 1501'
      },
      { label: 'Postal Address:', value: 'Private Bag X 027, Benoni, 1500' },
      { label: 'Telephone:', value: '+27 10 880 4744' }
    ]
  },
  {
    title: 'REMA TIP TOP Manufacturing Branch',
    lines: [
      { label: 'Physical Address:', value: 'Induna Mills Road, Howick, 3290' },
      { label: 'Postal Address:', value: 'Private Bag 29, Howick, 3290' },
      { label: 'Telephone:', value: '+27 (0) 33 239 7200' }
    ]
  }
]

function isSectionActive(links) {
  return links.some(link => route.path.startsWith(link.to))
}

function sectionHeaderClass(links) {
  return isSectionActive(links)
    ? 'layout-drawer__section layout-drawer__section--active'
    : 'layout-drawer__section'
}

function onSearchClick() {
  searchQuery.value = ''
  searchOpen.value = true
}

function goToResult(path) {
  searchOpen.value = false
  router.push(path)
}

function openFirstResult() {
  if (searchResults.value[0]) goToResult(searchResults.value[0].to)
}
</script>

<style scoped>
.layout-contact-bar {
  min-height: 44px;
  padding: 0 1rem;
  font-size: 0.75rem;
}

.layout-contact-bar__inner,
.layout-toolbar__inner {
  width: min(100%, 1384px);
  margin: 0 auto;
}

.layout-contact-bar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-footer {
  position: static;
  width: 100%;
}

.layout-contact-details,
.layout-social-links {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.layout-contact-details a {
  color: inherit;
  text-decoration: none;
}

.layout-contact-details a:hover {
  color: white;
}

.layout-toolbar {
  min-height: 118px;
  padding: 0 1rem;
}

.layout-toolbar__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.layout-logo {
  flex: 0 0 440px;
}

.layout-logo img {
  display: block;
  width: 440px;
  max-width: 100%;
  height: 80px;
  object-fit: cover;
  object-position: top left;
}

.layout-logo a {
  display: block;
  color: inherit;
  text-decoration: none;
}

.layout-tabs {
  flex: 1;
  min-height: 42px;
  text-transform: uppercase;
}

.layout-tabs :deep(.q-tab),
.layout-tabs :deep(.q-btn:not(.q-btn--round)),
.layout-external-button,
.layout-menu-button {
  min-height: 36px;
  padding: 0 16px;
  border-radius: 2px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.layout-tabs :deep(.q-tab:hover),
.layout-tabs :deep(.q-btn:not(.q-btn--round):hover),
.layout-external-button:hover,
.layout-menu-button:hover,
.layout-menu-button--active {
  color: #d71920 !important;
  background-color: rgb(215 25 32 / 8%);
}

.layout-menu-button {
  color: inherit;
}

.layout-tabs :deep(.q-tab--active) {
  color: #d71920;
}

.layout-submenu-item--active,
.layout-drawer__item--active,
.layout-drawer__section--active {
  color: #d71920;
  background-color: rgb(215 25 32 / 8%);
}

.site-search {
  position: relative;
  width: min(760px, calc(100vw - 2rem));
  padding: 2rem;
  background: #17242c;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 14px;
  color: #fff;
  box-shadow: 0 28px 80px rgb(0 0 0 / 35%);
}

.site-search__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.site-search__eyebrow {
  color: #ed3028;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
}

.site-search h2 {
  margin: 0.4rem 0 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 400;
}

.site-search__close {
  color: #fff;
  background: rgb(255 255 255 / 8%);
}

.site-search__form {
  padding: 0 1rem;
  background: #fff;
  border-radius: 6px;
}

.site-search__form :deep(.q-field__control) {
  height: 56px;
}

.site-search__form :deep(.q-field__native),
.site-search__form :deep(.site-search__input),
.site-search__form :deep(input) {
  color: #17242c !important;
  caret-color: #ed3028;
  font-size: 1rem;
}

.site-search__form :deep(input::placeholder) {
  color: #68757d !important;
  opacity: 1;
}

.site-search__form :deep(.q-field__control:before),
.site-search__form :deep(.q-field__control:after) {
  border: 0;
}

.site-search__form :deep(.q-field__native:focus) {
  color: #17242c !important;
}

.site-search__results {
  display: grid;
  gap: 0.5rem;
  max-height: 45vh;
  padding-top: 0.75rem;
  overflow-y: auto;
}

.site-search__result-count {
  padding: 0.6rem 0.8rem;
  color: #9eabb0;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.site-search__result {
  display: grid;
  grid-template-columns: 24px 1fr 20px;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem;
  border: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font: inherit;
  text-align: left;
}

.site-search__result:hover,
.site-search__result:focus-visible {
  background: rgb(255 255 255 / 9%);
  outline: 2px solid #ed3028;
  outline-offset: -2px;
}

.site-search__result > .q-icon {
  color: #ef3028;
}

.site-search__result strong,
.site-search__result small {
  display: block;
}

.site-search__result small,
.site-search__hint,
.site-search__empty {
  color: #aeb6b9;
  font-size: 0.8rem;
}

.site-search__result small {
  margin-top: 0.2rem;
}

.site-search__result em {
  display: block;
  margin-top: 0.35rem;
  color: #aeb6b9;
  font-size: 0.78rem;
  font-style: normal;
  line-height: 1.4;
}

.site-search__hint,
.site-search__empty {
  margin: 1rem 0 0;
  text-align: center;
}

.site-search__hint {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  color: #aeb6b9;
  font-size: 0.78rem;
}

.site-search__hint span {
  margin-left: 1rem;
  color: #6f7d82;
}

.site-search__popular {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.site-search__popular > span {
  width: 100%;
  margin-bottom: 0.15rem;
  color: #9eabb0;
  font-size: 0.72rem;
  text-transform: uppercase;
}

.site-search__popular button {
  padding: 0.5rem 0.7rem;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 999px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 0.78rem;
}

.site-search__popular button:hover,
.site-search__popular button:focus-visible {
  border-color: #ed3028;
  outline: 0;
  color: #fff;
  background: #ed3028;
}

.layout-drawer__section--active {
  font-weight: 500;
}

@media (max-width: 599px) {
  .layout-contact-bar {
    padding: 0.4rem 0.75rem;
  }

  .layout-contact-bar__inner {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;
  }

  .layout-contact-details {
    flex-wrap: wrap;
    gap: 0.25rem 0.75rem;
  }

  .layout-social-links {
    display: none;
  }

  .layout-toolbar {
    min-height: 64px;
    padding: 0 0.75rem;
  }

  .layout-toolbar__inner {
    width: 100%;
  }

  .layout-logo {
    flex: 1;
  }

  .layout-logo img {
    width: min(100%, 260px);
    height: 48px;
  }

  .site-footer {
    padding: 2rem 1rem;
  }

  .site-search {
    padding: 1.25rem;
  }

  .site-search__hint {
    align-items: center;
    flex-direction: column;
  }

  .site-search__hint span {
    margin-left: 0;
  }
}
</style>





<!-- CASCADING STYLE SHEET -->
.bg-dark.text-grey-4.row.justify-between.items-center.q-px-md {
  padding-left: 16px;
  padding-right: 16px;
  display :flex;
  flex-wrap: wrap;

}