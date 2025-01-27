<template>
  <div>
    <v-timeline v-for="experience in experincesData?.data" direction="horizontal" dot-color="red">
        <TimelineTimlineElement :experience="experience"/>
    </v-timeline>
  </div>
  {{ experincesData }}
</template>

<script setup lang="ts">
import type { Experience } from "./types"; // Import the interface


  const { find } = useStrapi();
  const experincesData = ref<{ data: Experience[] } | null>(null);


  // ### Events ###
  onMounted(() => {
    getData();
  });

  // ### API Requests ###
  const getData = async () => {
    experincesData.value = await find("experiences");
    // experincesData.value = response.data as Experience[];
  }

</script>
