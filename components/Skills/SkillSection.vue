<template>
  <div>
    <SkillList :skills="skillsData?.data || []" />
  </div>
</template>

<script setup lang="ts">
import SkillList from './SkillList.vue';
import type { Skill } from './types'; // Import the interface

  const { find } = useStrapi();
  const skillsData = ref<{ data: Skill[] } | null>(null);

  // ### Events ###
  onMounted(() => {
    getData();
  });

  // ### API Requests ###
  const getData = async () => {
    skillsData.value = await find("skills", {
      filters: {
        category: {
          $eq: "programmingLanguages",
        },
      },
    });
    console.log(skillsData.value);
  };
</script>
