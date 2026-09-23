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
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/RemaTipTopLogo.png'

const drawerOpen = ref(false)
const route = useRoute()

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

function onSearchClick() {}
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
}
</style>
