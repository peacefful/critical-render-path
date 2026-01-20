<template>
  <div class="page">
    <h2 class="text-black font-bold text-xl">Страница с внешним SCRIPT</h2>
  </div>
</template>

<script setup>
import { useScriptTag } from "@vueuse/core";
  
// useScriptTag("https://player.twitch.tv/js/embed/v1.js", {
//   defer: true,
// });

// useScriptTag("https://mw2.breezyx.space/static/index.css", {
//   defer: true,
// });
</script>
