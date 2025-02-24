<template>
  <div class="font-semibold text-white">
    <h1 id="heading-name" class="text-5xl">
        <span class="text-primary">Hi,</span> 
        ich bin Lucas.
    </h1>
    <h2 class="text-4xl pl-2">Web Developer und Umweltinformatiker</h2>
  </div>
</template>

<script setup lang="js">
import { animate, easeIn } from "motion";
// TODO make this ts
onMounted(() => {
    const headingName = document.getElementById("heading-name");
    animate(headingName,   
    { y: [-100, 0] },
    { ease: "easeIn", duration: 0.5 })
    //animate(headingName, { rotate: 360, duration: 0.1 })
})



</script>
