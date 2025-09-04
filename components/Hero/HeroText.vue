<template>
  <div class="font-semibold text-center w-fit text-white">
    <Transition name="slide-fade">
      <h1 v-if="displayHeader" class="text-5xl">
        <span class="text-primary">Hi, </span><span>ich bin Lucas.</span>
      </h1>
    </Transition>
    <Transition name="slide-fade">
      <h2 v-if="displayHeader" class="text-4xl">
        Web Developer und Umweltinformatiker
      </h2>
    </Transition>
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

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
  }
</style>
