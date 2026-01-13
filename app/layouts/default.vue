<template>
  <header class="bg-black h-18 flex gap-4 items-center">
    <h1 class="font-bold text-2xl">Critical Render Path</h1>

    <nav class="flex gap-4">
      <li>
        <NuxtLink to="/script">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Long Task</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/text-area">Virtulization</NuxtLink>
      </li>
    </nav>
  </header>
  <main>
    <div class="p-4">
      <NuxtPage />
    </div>
  </main>
</template>
