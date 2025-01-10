<template>
    <div class="outline outline-2 outline-white p-4 rounded-lg ">
        <div v-for="skill in skillsData?.data">
            <SkillElement :skill="skill"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import SkillElement from './SkillElement.vue';

interface Skill {
        id: number;
        name: string;
        level: string;
    }

    const { find } = useStrapi();
    const skillsData = ref<{ data: Skill[] } | null>(null);

    // ### Events ###
    onMounted(() => {
        getData();
    })

    // ### API Requests ###
    const getData = async () => {
        skillsData.value = await find('skills')
        console.log(skillsData.value);
    }

    // skillsData.value = await find('allSkills');

    /*
    const {data: skillsData, pending, error, refresh} = await useAsyncData("allSkills", () => {
        find("skills");
    })
    */
</script>