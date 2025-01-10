<template>
    <div class="bg-red-500">
       {{ skill.title }}
       {{ skill.level }}
    </div>
    {{ skill }}
</template>

<script setup lang="ts">
const props = defineProps({
    skill: {
        type: Object,
        required: true
    }
})
</script>