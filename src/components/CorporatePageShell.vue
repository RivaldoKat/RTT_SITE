<template>
  <q-page class="corporate-page">
    <q-parallax
      v-if="heroImage"
      :src="heroImage"
      :height="heroHeight"
      class="corporate-hero"
    />
    <main class="corporate-container">
      <slot />
    </main>
  </q-page>
</template>

<script setup>
defineProps({
  heroImage: {
    type: String,
    default: ''
  },
  heroHeight: {
    type: Number,
    default: 360
  }
})
</script>
