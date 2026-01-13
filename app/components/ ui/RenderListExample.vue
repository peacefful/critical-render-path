<template>
  <div ref="target" class="page">
    <section class="container">
      <section v-if="targetIsVisible" class="list">
        <article
          v-for="i in 5000"
          :key="i"
          class="card"
          data-role="card"
          :data-active="i % 2 === 0"
        >
          <header>
            <span class="title">Карточка {{ i }}</span>
          </header>

          <ul class="meta">
            <li>
              <span class="value">Meta value</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from "@vueuse/core";
import { shallowRef, useTemplateRef } from "vue";

const target = useTemplateRef("target");
const targetIsVisible = shallowRef(false);

useIntersectionObserver(target, ([entry], observerElement) => {
  targetIsVisible.value = entry?.isIntersecting || false;
});

// https://vueuse.org/core/useIntersectionObserver/
</script>
