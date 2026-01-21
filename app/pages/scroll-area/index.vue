<template>
  <h1 class="font-bold text-black text-3xl">Virtual Scroll Nuxt UI</h1>
  <UScrollArea
    v-slot="{ item, index }"
    :items="data"
    orientation="vertical"
    :virtualize="{
      gap: 16,
      lanes: 3,
      estimateSize: 480,
    }"
    class="w-full h-50 pt-4 border-2 border-green-500 border-solid"
  >
    <section class="container">
      <section class="list">
        <article class="card" data-role="card">
          <header>
            <span class="title">Comment {{ item.id }}</span>
          </header>

          <ul class="meta">
            <p>{{ item.name }}</p>
            <li>
              <span class="value">{{ item.email }}</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
  </UScrollArea>
</template>

<script setup lang="ts">
const heights = [320, 480, 640, 800];

function getHeight(index: number) {
  const seed = (index * 11 + 7) % 17;
  return heights[seed % heights.length]!;
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const items = Array.from({ length: 500 }).map((_, index) => {
  const height = getHeight(index);

  return {
    id: index,
    title: `Item ${index + 1}`,
    src: `https://picsum.photos/640/${height}?v=${index}`,
    width: 640,
    height,
  };
});

const { data } = await useFetch<IComment[]>(
  "https://jsonplaceholder.typicode.com/comments",
);

// https://ui.nuxt.com/docs/components/scroll-area
</script>
