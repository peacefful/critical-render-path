<template>
  <div class="page">
    <h2 class="text-black font-bold text-xl">
      Страница с внешними SCRIPTS and CSS
    </h2>

    <div class="map-container h-100 w-full" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { useScriptTag } from "@vueuse/core";
import { ref, computed, onMounted } from "vue";

const mapContainer = ref(null);

// let linkEl;

onMounted(async () => {
  // const { load } = useScriptTag(
  //   "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  //   () => {
  //     console.log("Script loaded");
  //   },
  //   {
  //     defer: true,
  //     manual: true,
  //   },
  // );

  // await load();

  if (!mapContainer.value) return;

  const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([51.505, -0.09]).addTo(map).bindPopup("Это маркер!").openPopup();

  // CSS
  // if (document.querySelector("link[data-leaflet]")) return;

  // linkEl = document.createElement("link");
  // linkEl.rel = "stylesheet";
  // linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  // linkEl.dataset.leaflet = "true";

  // document.head.appendChild(linkEl);
});

// onUnmounted(() => {
//   linkEl?.remove();
// });

// https://vueuse.org/core/useScriptTag/#usescripttag
</script>
