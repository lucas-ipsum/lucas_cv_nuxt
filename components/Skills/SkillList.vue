<template>
  <div class="mx-auto">
    <h2 class="text-primary text-xl font-bold">{{ title }}</h2>
    <div
      class="outline outline-2 outline-[#f5f5dc] p-4 rounded-lg w-full sm:w-[400px] mx-auto"
    >
      <div v-for="skill in skills">
        <SkillElement :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkillElement from "./SkillElement.vue";
  import type { Skill } from "./types"; // Import the interface

  const props = defineProps({
    skills: {
      type: Array as PropType<Skill[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });
</script>
