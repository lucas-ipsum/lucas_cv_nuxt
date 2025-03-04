<template>
  <div class="font-semibold text-white">
    <h1 id="heading-name" class="text-5xl">
      <Transition name="slide-fade">
        <span v-if="displayHeader">
          <span class="text-primary">Hi, </span
          ><span>ich bin Lucas.</span></span
        >
      </Transition>
    </h1>
    <h2 class="text-4xl pl-2">Web Developer und Umweltinformatiker</h2>
  </div>
</template>

<script setup lang="ts">
  const displayHeader = ref(false);

  onMounted(() => {
    displayHeader.value = true;
  });
</script>

<style>
  /*
  Enter and leave animations can use different
  durations and timing functions.
  */
  .slide-fade-enter-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  /* Define the initial state for entering */
  .slide-fade-enter-from {
    transform: translateX(-20px); /* Slide in from the left */
    opacity: 0;
  }

  /* Define the final state for leaving */
  .slide-fade-leave-to {
    transform: translateX(20px); /* Slide out to the right */
    opacity: 0;
  }
</style>
