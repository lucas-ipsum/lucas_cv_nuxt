<template>
    <div class="justify-center flex">
        <div class="flex flex-col gap-10 xl:max-w-[56rem]">
            <HeroSection />
            <TimeLineSection />
            <SkillSection />
        </div>
    </div>

</template>

<script lang="ts" setup>
import SkillSection from '~/components/Skills/SkillSection.vue';
import TimeLineSection from '~/components/Timeline/TimeLineSection.vue';
</script>