<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <HeroImage class="order-last sm:order-none" />
    <HeroText />
  </div>
  <SocialsSection />
</template>

<script setup lang="ts">
  import SocialsSection from "./SocialsSection.vue";
</script>
