<template>
  <div id="timeline" class="">
    <v-timeline
      class="overflow-x-scroll snap-x"
      :direction="xs ? 'vertical' : 'horizontal'"
      line-color="#ffffff"
      dot-color="#ffffff"
      v-bind="xs ? { side: 'end' } : {}"
    >
      <TimelineTimlineElement
        v-for="experience in experincesData?.data"
        :experience="experience"
      />
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
  import { scroll } from "motion";
  import { useDisplay } from "vuetify";
  import type { Experience } from "./types"; // Import the interface

  const { mobile, xs } = useDisplay(); // vuetify display api checks if mobile devive

  // ## Strapi Backend Data logic ##
  const { find } = useStrapi();
  const experincesData = ref<{ data: Experience[] } | null>(null);

  // ### Events ###
  onMounted(() => {
    getData();
    // scroll(callback, { container: document.getElementById("timeline") })
  });

  const callback = () => {
    console.log("scroll");
  };

  // ### API Requests ###
  const getData = async () => {
    experincesData.value = await find("experiences", {
      sort: "startDate:desc",
    });
    // experincesData.value = response.data as Experience[];
  };
</script>
