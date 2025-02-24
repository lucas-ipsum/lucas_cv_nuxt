<template>
    <a :href="link" target="_blank">
        <font-awesome
            class="hover:scale-125 cursor-pointer"
            :icon="icon"
            size="2xl"
      ></font-awesome>
    </a>
</template>

<script setup lang="ts">
    defineProps({
        icon: {
            required: true,
            type: Array
        }, 
        link: {
            required: true,
            type: String
        }
    })
</script>