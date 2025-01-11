<template>
  <div class="outline outline-2 outline-white p-4 rounded-lg w-[400px]">
    <div v-for="skill in skills">
      <SkillElement :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SkillElement from "./SkillElement.vue";
  import type { Skill } from './types'; // Import the interface

  const props = defineProps({
    skills: {
        type: Array as PropType<Skill[]>,
        required: true
    }
  })
</script>
