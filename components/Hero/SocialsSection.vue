<template>
  <div class="w-full flex justify-center">
    <div class="flex w-[80%] sm:w-[300px] justify-evenly text-primary">
      <SocialIconButton :icon="['fab', 'linkedin']" link="https://www.linkedin.com/in/lucas-tiedemann-972444227/" />
      <SocialIconButton :icon="['fab', 'square-github']" link="https://github.com/lucas-ipsum" />
      <SocialIconButton :icon="['fas', 'envelope']" link="mailto:lucas.tiedemann@posteo.de" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SocialIconButton from "./SocialIconButton.vue";
</script>
