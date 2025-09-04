<template>
  <div class="dotted-background">
    <div class="py-5 px-4 sm:px-12">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Prevents all overflow */
    box-sizing: border-box;
    background: linear-gradient(
      to bottom,
      #14532d,
      #052e16,
      #1c1917
    ); /* Adjust to match your color theme */
  }
  /* Dotted Background */
  .dotted-background {
    min-height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
    /* Gradient background */
    /* Dotted pattern */
    background-image: radial-gradient(
      circle,
      #ff007f 0.5px,
      transparent 1px
    ); /* Dots */
    background-size: 10px 10px; /* Adjust spacing between dots */
    background-repeat: repeat; /* Ensures the pattern covers the entire area */
    height: auto;
  }
</style>
