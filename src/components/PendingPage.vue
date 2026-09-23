<template>
  <q-page class="pending-page corporate-page">
    <main class="corporate-container pending-page__content">
      <div class="text-overline text-red">REMA TIP TOP</div>
      <h1 class="corporate-heading text-h3 text-weight-bold q-mt-sm q-mb-md">{{
        title
      }}</h1>
      <p class="text-body1 text-grey-8 q-mb-none">{{ message }}</p>
    </main>
  </q-page>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Content for this section is being prepared.'
  }
})
</script>
