<template>
  <header class="corporate-section-heading">
    <h2 class="corporate-heading text-h5 text-weight-bold text-dark q-mb-xs">
      {{ title }}
    </h2>
    <div class="dotted-separator" />
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
