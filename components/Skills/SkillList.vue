<template>
  <div class="mx-auto">
    <div
      class="shadow-md bg-[#052e16] bg-opacity-50 p-4 rounded-lg w-[300px]"
    >
    <h2 class="text-primary text-xl font-bold mb-2">{{ title }}</h2>
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
