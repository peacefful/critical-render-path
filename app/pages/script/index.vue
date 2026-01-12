<template>
  <div class="page">
    <h1>Страница с внешним SCRIPT</h1>
    <p>Этот стиль подключён только здесь</p>
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
