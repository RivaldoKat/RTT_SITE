<template>
  <q-layout view="lHh lpr lFf">
    <q-header
      :class="[
        'site-header',
        {
          'site-header--hero': isHeroRoute,
          'site-header--scrolled': hasScrolled
        }
      ]"
    >
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
          <div class="layout-social-links">
            <q-btn
              v-for="social in socialLinks"
              :key="social.icon"
              flat
              round
              dense
              :icon="social.icon"
              size="sm"
              :aria-label="social.label"
            />
          </div>
        </div>
      </section>

      <q-toolbar class="layout-toolbar">
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
            v-if="$q.screen.gt.md"
            align="right"
            active-color="red"
            indicator-color="red"
            class="text-grey layout-tabs"
          >
            <q-route-tab to="/" exact label="Home" />
            <q-btn-dropdown
              flat
              label="About Rema Tip Top"
              :class="[
                'layout-menu-button',
                { 'layout-menu-button--active': isSectionActive(aboutLinks) }
              ]"
            >
              <q-list>
                <q-item
                  v-for="item in aboutLinks"
                  :key="item.to"
                  :to="item.to"
                  :active="item.to === '/our-presence' && isBranchRoute"
                  clickable
                  active-class="layout-submenu-item--active"
                  v-close-popup
                >
                  <q-item-section>{{ item.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown
              flat
              label="Products"
              :class="[
                'layout-menu-button',
                { 'layout-menu-button--active': isSectionActive(productLinks) }
              ]"
            >
              <q-list>
                <q-item
                  v-for="item in productLinks"
                  :key="item.to"
                  :to="item.to"
                  clickable
                  active-class="layout-submenu-item--active"
                  v-close-popup
                >
                  <q-item-section>{{ item.label }}</q-item-section>
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
          </q-tabs>
          <q-btn
            flat
            round
            dense
            color="red"
            icon="search"
            aria-label="Search"
            class="layout-search-button"
            @click="onSearchClick"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      bordered
      :width="280"
      class="bg-white site-drawer"
    >
      <div class="site-drawer__header">
        <router-link to="/" aria-label="Rema Tip Top home">
          <img :src="logo" alt="Rema Tip Top" class="site-drawer__logo" />
        </router-link>
        <q-btn
          flat
          round
          dense
          icon="close"
          aria-label="Close navigation"
          class="site-drawer__close"
          @click="drawerOpen = false"
        />
      </div>
      <div class="site-drawer__eyebrow">Navigation</div>
      <q-list class="site-drawer__list">
        <q-item
          to="/"
          exact
          clickable
          class="site-drawer__item"
          active-class="site-drawer__item--active"
          v-close-popup
          @click="drawerOpen = false"
        >
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-expansion-item
          label="About Rema Tip Top"
          icon="business"
          :header-class="sectionHeaderClass(aboutLinks)"
        >
          <q-item
            v-for="item in aboutLinks"
            :key="item.to"
            :to="item.to"
            :active="item.to === '/our-presence' && isBranchRoute"
            clickable
            class="site-drawer__item site-drawer__subitem"
            active-class="site-drawer__item--active"
            v-close-popup
            @click="drawerOpen = false"
          >
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-expansion-item
          label="Products"
          icon="precision_manufacturing"
          :header-class="sectionHeaderClass(productLinks)"
        >
          <q-item
            v-for="item in productLinks"
            :key="item.to"
            :to="item.to"
            clickable
            class="site-drawer__item site-drawer__subitem"
            active-class="site-drawer__item--active"
            v-close-popup
            @click="drawerOpen = false"
          >
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item
          to="/contact"
          clickable
          class="site-drawer__item"
          active-class="site-drawer__item--active"
          v-close-popup
          @click="drawerOpen = false"
        >
          <q-item-section avatar><q-icon name="mail_outline" /></q-item-section>
          <q-item-section>Contact Us</q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          class="site-drawer__item"
          href="https://rema-tiptop.de/en/"
          target="_blank"
          rel="noopener"
        >
          <q-item-section avatar><q-icon name="public" /></q-item-section>
          <q-item-section>International</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :class="{ 'site-page-container--hero': isHeroRoute }">
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

    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__masthead">
          <div class="site-footer__brand">
            <strong>REMA TIP TOP</strong>
            <span>German engineering / Made in Africa / For Africa</span>
          </div>
          <router-link
            class="site-footer__contact-link"
            to="/contact"
          >
            Contact our team
            <q-icon name="arrow_forward" size="18px" />
          </router-link>
        </div>

        <div class="site-footer__columns">
          <section
            v-for="column in footerColumns"
            :key="column.title"
            class="site-footer__column"
          >
            <h2>{{ column.title }}</h2>
            <ul v-if="column.items" class="site-footer__items">
              <li v-for="item in column.items" :key="item">{{ item }}</li>
            </ul>
            <address v-else class="site-footer__details">
              <div
                v-for="line in column.lines"
                :key="line.label"
                class="site-footer__detail"
              >
                <strong>{{ line.label }}</strong>
                <a v-if="line.href" :href="line.href">{{ line.value }}</a>
                <span v-else>{{ line.value }}</span>
              </div>
            </address>
          </section>
        </div>

        <div class="site-footer__bottom">
          <span>© {{ currentYear }} REMA TIP TOP Africa</span>
          <router-link to="/our-presence">
            African branch network
            <q-icon name="north_east" size="15px" />
          </router-link>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from '@/assets/RemaTipTopLogo.svg'
import { searchIndex } from '@/data/searchIndex'

const drawerOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const hasScrolled = ref(false)
const route = useRoute()
const router = useRouter()
const isHeroRoute = computed(
  () => route.path === '/' || route.path.startsWith('/products/')
)
const isBranchRoute = computed(
  () => route.path === '/branch' || route.path.startsWith('/branch/')
)

function updateScrollState() {
  hasScrolled.value = window.scrollY > 8
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})

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
  { label: 'Surface Protection', to: '/products/surface-protection' },
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
      {
        label: 'Telephone:',
        value: '+27 10 880 4744',
        href: 'tel:+27108804744'
      },
      {
        label: 'Email:',
        value: 'enquiries@rematiptop.co.za',
        href: 'mailto:enquiries@rematiptop.co.za'
      }
    ]
  },
  {
    title: 'REMA TIP TOP Manufacturing Branch',
    lines: [
      { label: 'Physical Address:', value: 'Induna Mills Road, Howick, 3290' },
      { label: 'Postal Address:', value: 'Private Bag 29, Howick, 3290' },
      {
        label: 'Telephone:',
        value: '+27 (0) 33 239 7200',
        href: 'tel:+27332397200'
      }
    ]
  }
]

const currentYear = new Date().getFullYear()

function isSectionActive(links) {
  const matchesLink = links.some(
    link => route.path === link.to || route.path.startsWith(`${link.to}/`)
  )

  return matchesLink || (links === aboutLinks && isBranchRoute.value)
}

function sectionHeaderClass(links) {
  return isSectionActive(links)
    ? 'site-drawer__group layout-drawer__section layout-drawer__section--active'
    : 'site-drawer__group'
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
.site-header {
  background: transparent;
}

.site-page-container--hero {
  padding-top: 44px !important;
}

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
  background: #1d1d1d;
  color: #d2d2d2;
}

.site-footer__inner {
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: 2.75rem 1.5rem 1rem;
}

.site-footer__masthead,
.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.site-footer__masthead {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(255 255 255 / 16%);
}

.site-footer__brand {
  display: grid;
  gap: 0.35rem;
  padding-left: 0.85rem;
  border-left: 3px solid #d71920;
}

.site-footer__brand strong {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
}

.site-footer__brand span {
  color: #aeb2b5;
  font-size: 0.74rem;
  text-transform: uppercase;
}

.site-footer__contact-link,
.site-footer__bottom a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
}

.site-footer__contact-link {
  padding: 0.7rem 0.9rem;
  background: #c10015;
  font-size: 0.86rem;
  font-weight: 600;
}

.site-footer__contact-link:hover {
  background: #d71920;
}

.site-footer__columns {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) repeat(2, minmax(0, 1fr));
  gap: 2rem;
  padding: 1.75rem 0;
}

.site-footer__column h2 {
  margin: 0 0 1rem;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
}

.site-footer__column h2::after {
  display: block;
  width: 2rem;
  height: 2px;
  margin-top: 0.65rem;
  background: #d71920;
  content: '';
}

.site-footer__items,
.site-footer__details {
  display: grid;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__items li,
.site-footer__details {
  color: #b8babe;
  font-size: 0.84rem;
  line-height: 1.5;
}

.site-footer__detail {
  display: grid;
  gap: 0.1rem;
}

.site-footer__detail strong {
  color: #fff;
  font-size: 0.76rem;
  font-weight: 600;
}

.site-footer__detail a {
  color: #d2d2d2;
  overflow-wrap: anywhere;
  text-decoration: none;
}

.site-footer__detail a:hover,
.site-footer__bottom a:hover {
  color: #ff5359;
  text-decoration: underline;
}

.site-footer__bottom {
  min-height: 35px;
  border-top: 1px solid rgb(255 255 255 / 16%);
  color: #9fa3a6;
  font-size: 0.76rem;
}

.site-footer__bottom a {
  color: #d2d2d2;
  font-size: 0.78rem;
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
  border-bottom: 1px solid rgb(29 29 29 / 8%);
  background: rgb(255 255 255 / 84%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.site-header--hero:not(.site-header--scrolled) .layout-toolbar {
  border-bottom-color: transparent;
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.site-header--scrolled .layout-toolbar {
  background: rgb(255 255 255 / 94%);
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
  height: 70px;
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
  min-width: 0;
  text-transform: uppercase;
}

.layout-search-button {
  flex: 0 0 auto;
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

.site-drawer__header {
  display: flex;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-top: 3px solid #d71920;
  border-bottom: 1px solid #e6e6e6;
}

.site-drawer__header a {
  display: block;
}

.site-drawer__logo {
  display: block;
  width: 164px;
  height: 33px;
  object-fit: contain;
  object-position: left center;
}

.site-drawer__close {
  color: #4a4a4a;
}

.site-drawer__eyebrow {
  padding: 1.1rem 1rem 0.45rem;
  color: #d71920;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
}

.site-drawer__list {
  padding: 0.25rem 0.75rem 1rem;
}

.site-drawer__item,
.site-drawer__group {
  min-height: 46px;
  margin: 0.15rem 0;
  border-left: 3px solid transparent;
  border-radius: 2px;
  color: #292929;
  font-size: 0.9rem;
  transition:
    color 160ms ease,
    background-color 160ms ease;
}

.site-drawer__item :deep(.q-icon),
.site-drawer__group :deep(.q-icon) {
  color: #737373;
}

.site-drawer__item--active {
  border-left-color: #d71920;
  color: #d71920;
  background: rgb(215 25 32 / 8%);
  font-weight: 600;
}

.site-drawer__item--active :deep(.q-icon),
.site-drawer__group.layout-drawer__section--active :deep(.q-icon) {
  color: #d71920;
}

.site-drawer__group.layout-drawer__section--active {
  border-left-color: #d71920;
  font-weight: 600;
}

.site-drawer__subitem {
  min-height: 40px;
  padding-left: 1rem;
  font-size: 0.84rem;
}

.site-drawer :deep(.q-expansion-item__content) {
  margin-left: 1.15rem;
  border-left: 1px solid #e6e6e6;
}

@media (max-width: 599px) {
  .layout-contact-bar {
    padding: 0.4rem 0.75rem;
  }

  .layout-contact-bar__inner {
    align-items: center;
    gap: 0.5rem;
  }

  .layout-contact-details {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.2rem;
  }

  .layout-social-links {
    flex-shrink: 0;
    gap: 0.1rem;
    margin-left: auto;
  }

  .layout-social-links :deep(.q-btn) {
    min-width: 28px;
    min-height: 28px;
  }

  .layout-toolbar {
    min-height: 64px;
    padding: 0 0.75rem;
  }

  .site-page-container--hero {
    padding-top: 45px !important;
  }

  .layout-toolbar__inner {
    width: 100%;
    gap: 0.5rem;
  }

  .layout-logo {
    flex: 1;
  }

  .layout-logo img {
    width: min(100%, 260px);
    height: 48px;
  }

  .site-footer {
    padding: 0;
  }

  .site-footer__inner {
    padding: 2rem 1rem 0.75rem;
  }

  .site-footer__masthead,
  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .site-footer__masthead {
    gap: 1rem;
  }

  .site-footer__columns {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  .site-footer__bottom {
    justify-content: center;
    gap: 0.65rem;
    padding: 0.85rem 0;
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
