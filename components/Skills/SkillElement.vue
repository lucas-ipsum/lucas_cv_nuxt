<template>
    <div class="text-lg font-bold text-white grid grid-cols-2">
       <p>{{ skill.title }}</p>
       <div class="flex gap-1 text-[#f97316]">
            <span v-for="n in skill.level">
                <font-awesome :icon="['fas', 'circle']" />
            </span>
            <span v-for="n in 5 - skill.level">
                <font-awesome :icon="['far', 'circle']" />
            </span>
       </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    skill: {
        type: Object,
        required: true
    }
})
</script>