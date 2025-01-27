<template>
  <v-timeline-item>
    <template v-slot:opposite> Opposite content </template>
    <template v-slot:icon>
        <font-awesome class="text-primary p-3 outline outline-2 rounded-full" :icon="['fas', 'building-columns']" size="xl"/>
    </template>
    <div class="flex flex-col gap-3 max-w-[220px] shadow-md bg-[#052e16] bg-opacity-50 p-4 rounded-lg text-white">
      <!-- Title -->
        <div class="text-xl font-bold text-primary">{{ experience.title }}</div>
      <!-- date -->
       <div class="flex gap-1 content-center">
        <font-awesome :icon="['fas', 'calendar-days']" size="xl"></font-awesome>
        <span>{{ useDateConversion(experience.startDate) }}</span>
        <span v-if="experience.endDate"> - {{ useDateConversion(experience.endDate) }} </span>
       </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </v-timeline-item>
</template>

<script setup lang="ts">
import type { Experience } from './types';

defineProps({
    experience: {
      type: Object as PropType<Experience>,
      required: true
    },
})
</script>
