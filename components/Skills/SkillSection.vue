<template>

  <div class="flex ">
    <SkillList :skills="programmingLanguages || []" />
    <SkillList :skills="toolsAndFrameworks || []" />
  </div>
</template>

<script setup lang="ts">
import SkillList from './SkillList.vue';
import type { Skill } from './types'; // Import the interface

  const { find } = useStrapi();
  const skillsData = ref<{ data: Skill[] } | null>(null);
  const programmingLanguages = ref<Skill[] | []>([]);
  const toolsAndFrameworks = ref<Skill[] | []>([]);


  // ### Events ###
  onMounted(() => {
    getData();
  });

  // ### API Requests ###
  const getData = async () => {
    skillsData.value = await find("skills");
    // Filter data and store to ref depending on category of skill
    programmingLanguages.value = skillsData.value?.data.filter(skill => skill.category === 'programmingLanguages') ||[];
    toolsAndFrameworks.value = skillsData.value?.data.filter(skill => skill.category === 'toolsAndFrameworks') || [];
  };
</script>
