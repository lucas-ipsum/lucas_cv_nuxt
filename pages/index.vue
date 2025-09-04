<template>
    <v-app>
        <div class="justify-center flex">
            <div class="flex flex-col gap-10 max-w-[95%] xl:max-w-[56rem]">
                <HeroSection />
                <TimeLineSection />
                <SkillSection />
            </div>
        </div>
    </v-app>
</template>

<script lang="ts" setup>
import SkillSection from '~/components/Skills/SkillSection.vue';
import TimeLineSection from '~/components/Timeline/TimeLineSection.vue';

  // page
  useHead({
    title: "Lucas CV",
  });
</script>