<template>
    <div class="text-lg font-bold text-white grid">
       <p>{{ skill.title }}</p>
       {{ typeof skill.level }}
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