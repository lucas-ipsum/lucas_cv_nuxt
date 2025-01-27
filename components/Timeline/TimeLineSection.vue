<template>
  <div id="timeline" class="">
    <v-timeline class="overflow-x-scroll snap-x" direction="horizontal" line-color="#ffffff" dot-color="#ffffff">
        <TimelineTimlineElement v-for="experience in experincesData?.data" :experience="experience"/>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { scroll } from "motion"
import type { Experience } from "./types"; // Import the interface


  const { find } = useStrapi();
  const experincesData = ref<{ data: Experience[] } | null>(null);


  // ### Events ###
  onMounted(() => {
    getData();
    // scroll(callback, { container: document.getElementById("timeline") })
  });

  const callback = () => {
    console.log('scroll')
  }

  // ### API Requests ###
  const getData = async () => {
    experincesData.value = await find("experiences");
    // experincesData.value = response.data as Experience[];
  }

</script>
