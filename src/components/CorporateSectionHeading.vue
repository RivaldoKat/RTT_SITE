<template>
  <header class="corporate-section-heading">
    <div class="corporate-section-heading__eyebrow"
      >Global industrial expertise</div
    >
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
